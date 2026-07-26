/* ══════════════════════════════════════════════════════════════
   FiberSprung — homepage

   The hero carries no JavaScript. It is immediate: full bleed from first
   paint, with an ambient drift and a one-shot entrance stagger, both pure
   CSS and neither scroll-linked. Removing it from here also removes it as
   a failure surface — the h1 and CTAs cannot be hidden by a script error
   because no script touches them.

   The pin / scale / overlap mechanic moves to section 04.
   ══════════════════════════════════════════════════════════════ */


/* Last resort. If anything below throws, strip html.js so every hidden
   state in styles.css switches off and the page renders as plain, fully
   visible content. Losing the animation beats losing the page. */
function fsFailOpen(err) {
  var d = document.documentElement;
  d.className = d.className.replace(/(^|\s)js(\s|$)/, '$1$2');
  if (window.console && console.warn) {
    console.warn('FiberSprung: reveal disabled, showing static page.', err);
  }
}

/* ══════════════════════════════════════════════════════════════
   Shared scroll reveal — everything on the page that is not the hero.
   Plays once on entry, short travel, then stops observing.
   Reduced motion gets the final state with no observer at all.

   USAGE
     <div class="js-reveal">…</div>                  single element
     <div data-reveal-stagger>                       group, 100ms interval
       <p class="js-reveal">…</p>  ×2–4
     </div>
     <div data-reveal-stagger="80">…</div>           group, custom interval

   STAGGER RULES (design system)
     Interval is clamped to the 80–120ms band.
     No more than four items in a stagger. Item five onward holds the
     fourth delay rather than continuing to accumulate, so a group can
     never drift into a slow cascade.

     Stagger is for items that arrive on screen TOGETHER — a row of
     pillars, a two-up. Do not wrap a tall vertical list in it: each
     child enters view on its own scroll position, so a delay on the
     fifth item just makes it late for no reason.
   ══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';
  try {

  var MAX_STAGGER = 4;    // design system: never more than four in a stagger
  var MIN_INTERVAL = 80;  // design system: 80–120ms
  var MAX_INTERVAL = 120;
  var DEFAULT_INTERVAL = 100;

  var items = document.querySelectorAll('.js-reveal');
  if (!items.length) return;

  function showAll() {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('is-in'); });
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { showAll(); return; }
  if (!('IntersectionObserver' in window)) { showAll(); return; }

  /* Assign the stagger delays before anything is observed. */
  Array.prototype.forEach.call(
    document.querySelectorAll('[data-reveal-stagger]'),
    function (group) {
      var raw = parseInt(group.getAttribute('data-reveal-stagger'), 10);
      var interval = isNaN(raw) ? DEFAULT_INTERVAL
                   : Math.min(MAX_INTERVAL, Math.max(MIN_INTERVAL, raw));

      Array.prototype.forEach.call(
        group.querySelectorAll('.js-reveal'),
        function (el, i) {
          var step = Math.min(i, MAX_STAGGER - 1);   // hold at the fourth slot
          el.style.transitionDelay = (step * interval) + 'ms';
        }
      );
    }
  );

  /* threshold 0 with a negative bottom margin, deliberately.
     A ratio threshold makes the trigger point depend on element height:
     at threshold 0.2 an element taller than ~4.6 viewport heights can
     never place 20% of its area on screen, so it would never reveal.
     threshold 0 fires at one fixed line instead — the element's top edge
     crossing 88% of the viewport height. Never early: 12% of the screen
     is already showing it. Never impossible, at any height. */
  var io = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });

  Array.prototype.forEach.call(items, function (el) { io.observe(el); });

  } catch (err) { fsFailOpen(err); }
})();


/* ══════════════════════════════════════════════════════════════
   Hero parallax — the whole plane (image + scrim + caption) drifts up at
   0.35× scroll speed as one surface while the hero is pinned, and the page
   overtakes all of it together. Transform only, rAF-throttled, passive.
   Desktop (≥900px) only; off under reduced motion.

   Note this translates .hero__plane, NOT .hero__img: the img carries the
   heroDrift keyframe animation, and an animation on transform beats an
   inline transform on the same element. Separate elements, no conflict.

   Errors here must not strip html.js: any uncaught throw would reach the
   head guard's window 'error' listener. It is protected twice — the guard
   returns early once data-reveal-ready is set, and this whole block is
   wrapped anyway. A broken parallax costs the drift, nothing else.
   ══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';
  try {

  var plane = document.getElementById('hero-plane');
  if (!plane) return;

  var reduce  = window.matchMedia('(prefers-reduced-motion: reduce)');
  var desktop = window.matchMedia('(min-width: 900px)');
  var RATE    = 0.35;
  var ticking = false;

  function render() {
    ticking = false;
    if (reduce.matches || !desktop.matches) {
      plane.style.transform = '';
      return;
    }
    /* The hero is pinned for the first viewport-height of scroll; past that
       it is covered, so travel is capped there and the transform stops
       accumulating into pointless offscreen values. */
    var y = Math.min(window.pageYOffset || window.scrollY || 0, window.innerHeight);
    plane.style.transform = 'translateY(' + (-(y * RATE)).toFixed(1) + 'px)';
  }

  function queue() {
    if (!ticking) { ticking = true; requestAnimationFrame(render); }
  }

  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue, { passive: true });

  function watch(mq) {
    if (mq.addEventListener) mq.addEventListener('change', queue);
    else if (mq.addListener) mq.addListener(queue);
  }
  watch(reduce); watch(desktop);

  render();

  } catch (err) {
    if (window.console && console.warn) console.warn('FiberSprung: parallax off.', err);
  }
})();


/* ══════════════════════════════════════════════════════════════
   Recognition marquee — measured loop.

   The CSS keyframe translates −50% of the track, but the two logo sets can
   lay out at fractionally different widths (image rounding), so −50% is not
   exactly one set and the loop lands with a visible jump. This waits for
   the marquee images, measures the FIRST set's rendered width — which
   includes its trailing gap, since the gap is padding on the set — kills
   the CSS animation, and drives the translate over exactly that many
   pixels at the same ~38s pace. Re-measures on resize. Pause on hover
   moves to JS because the CSS :hover pause dies with the CSS animation.

   No-JS / failure fallback: the CSS animation keeps running, jump and all.
   Reduced motion: CSS hides the marquee entirely; this returns before
   touching anything.
   ══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';
  try {

  var mq = document.querySelector('.marquee');
  if (!mq) return;
  var track = mq.querySelector('.marquee__track');
  var firstSet = mq.querySelector('.marquee__set');
  if (!track || !firstSet) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) return;

  var DURATION = 38000;   // ms per full loop, matching the CSS fallback
  var setW = 0, speed = 0, x = 0, last = null, paused = false;

  function measure() {
    setW = firstSet.getBoundingClientRect().width;
    speed = setW > 0 ? setW / DURATION : 0;   // px per ms
    if (x > setW && setW > 0) x = x % setW;
  }

  function step(ts) {
    if (last === null) last = ts;
    if (!paused && setW > 0) {
      x = (x + (ts - last) * speed) % setW;
      track.style.transform = 'translateX(' + (-x).toFixed(2) + 'px)';
    }
    last = ts;
    requestAnimationFrame(step);
  }

  mq.addEventListener('mouseenter', function () { paused = true; });
  mq.addEventListener('mouseleave', function () { paused = false; });

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(measure, 150);
  }, { passive: true });

  function start() {
    measure();
    if (setW <= 0) return;              // leave the CSS fallback running
    track.style.animation = 'none';     // take over from the -50% keyframe
    requestAnimationFrame(step);
  }

  /* Measure only after every marquee image has loaded or errored — widths
     are meaningless before that. */
  var imgs = Array.prototype.slice.call(mq.querySelectorAll('img'));
  var pending = imgs.filter(function (im) { return !im.complete; });
  if (pending.length === 0) {
    start();
  } else {
    var left = pending.length;
    var done = function () { if (--left === 0) start(); };
    pending.forEach(function (im) {
      im.addEventListener('load', done);
      im.addEventListener('error', done);
    });
  }

  } catch (err) {
    if (window.console && console.warn) console.warn('FiberSprung: marquee on CSS fallback.', err);
  }
})();


/* ══════════════════════════════════════════════════════════════
   Compressing header — .is-scrolled past 40px, with hysteresis (add at
   >48, remove at <32) so the state cannot flutter when the scroll position
   sits exactly on a single threshold. rAF-throttled, passive.
   ══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';
  try {

  var header = document.querySelector('.site-header');
  if (!header) return;

  var ON = 48, OFF = 32;
  var scrolled = false, ticking = false;

  function render() {
    ticking = false;
    var y = window.pageYOffset || window.scrollY || 0;
    if (!scrolled && y > ON) {
      scrolled = true;
      header.classList.add('is-scrolled');
    } else if (scrolled && y < OFF) {
      scrolled = false;
      header.classList.remove('is-scrolled');
    }
  }

  function queue() {
    if (!ticking) { ticking = true; requestAnimationFrame(render); }
  }

  window.addEventListener('scroll', queue, { passive: true });
  render();

  } catch (err) {
    if (window.console && console.warn) console.warn('FiberSprung: header static.', err);
  }
})();


/* ══════════════════════════════════════════════════════════════
   Technology stage — pin, scale to full bleed, copy rises, detail covers.
   Adapted from design-system/scroll-mechanic-reference.html.

   One progress number across the 300vh runway drives everything:
     0 → .6   frame opens .58 → 1, corner radius 14 → 0
     .42/.52  heading block, then body block, rise and fade in
     .6 → 1   the plane drifts up at 0.35× of the scroll past full-open —
              the same rate as the hero, for continuity — until the detail
              panel climbs over.

   Desktop + JS only; the matching CSS lives under .js at ≥900px, and
   reduced-motion CSS statics everything with !important, which also beats
   these inline writes.
   ══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';
  try {

  var stage = document.getElementById('tech-stage');
  var frame = document.getElementById('tech-frame');
  var plane = document.getElementById('tech-plane');
  var line  = document.getElementById('tech-line');
  var sub   = document.getElementById('tech-sub');
  if (!stage || !frame || !plane || !line || !sub) return;

  var reduce  = window.matchMedia('(prefers-reduced-motion: reduce)');
  var desktop = window.matchMedia('(min-width: 900px)');
  var REST = 0.58, RATE = 0.35;
  var ticking = false;

  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
  function ease(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2; }

  function clear() {
    [frame, plane, line, sub].forEach(function (el) {
      el.style.transform = ''; el.style.opacity = ''; el.style.borderRadius = '';
    });
  }

  function render() {
    ticking = false;
    if (reduce.matches || !desktop.matches) { clear(); return; }

    var r = stage.getBoundingClientRect();
    var travel = r.height - window.innerHeight;
    if (travel <= 0) return;
    var p = clamp(-r.top / travel, 0, 1);

    var open  = ease(clamp(p / 0.6, 0, 1));
    var scale = REST + (1 - REST) * open;
    frame.style.transform    = 'scale(' + scale.toFixed(4) + ')';
    frame.style.borderRadius = (14 * (1 - open)).toFixed(1) + 'px';

    /* hero-rate drift once fully open */
    var past = Math.max(0, p - 0.6) * travel;      // px scrolled past open
    plane.style.transform = 'translateY(' + (-(past * RATE)).toFixed(1) + 'px)';

    var a1 = clamp((p - 0.42) / 0.2, 0, 1);
    var a2 = clamp((p - 0.52) / 0.2, 0, 1);
    line.style.opacity   = a1;
    line.style.transform = 'translateY(' + (24 * (1 - a1)).toFixed(1) + 'px)';
    sub.style.opacity    = a2;
    sub.style.transform  = 'translateY(' + (18 * (1 - a2)).toFixed(1) + 'px)';
  }

  function queue() { if (!ticking) { ticking = true; requestAnimationFrame(render); } }

  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue, { passive: true });
  function watch(mq) {
    if (mq.addEventListener) mq.addEventListener('change', queue);
    else if (mq.addListener) mq.addListener(queue);
  }
  watch(reduce); watch(desktop);
  render();

  } catch (err) {
    if (window.console && console.warn) console.warn('FiberSprung: tech stage static.', err);
  }
})();


/* ══════════════════════════════════════════════════════════════
   Spec numeral count-up — [data-count] elements animate 0 → final over
   800ms ease-out on first entry, once.

   The HTML always contains the FINAL value ("30+", "3mm", "3 ft"); this
   script only rewrites it while animating and restores the exact original
   string at the end. So no-JS, reduced motion, and any failure here all
   show the correct figures — the numbers can never be stuck at zero.
   Non-numeric values ("1×4 pine", "~6 weeks") simply never get the
   attribute. Suffixes are derived from the string itself, so "30+" counts
   as "17+ … 30+" and "3 ft" as "1 ft … 3 ft".
   ══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';
  try {

  var els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  var DURATION = 800;
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animate(el) {
    var final = el.textContent;
    var m = final.match(/^([\d.]+)(.*)$/);
    if (!m) return;                       // not countable after all; leave it
    var target = parseFloat(m[1]);
    var suffix = m[2];
    var t0 = null;

    function frame(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / DURATION, 1);
      if (p < 1) {
        el.textContent = Math.round(target * easeOut(p)) + suffix;
        requestAnimationFrame(frame);
      } else {
        el.textContent = final;           // exact original string, always
      }
    }
    requestAnimationFrame(frame);
  }

  var io = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);
      animate(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });

  Array.prototype.forEach.call(els, function (el) { io.observe(el); });

  } catch (err) {
    if (window.console && console.warn) console.warn('FiberSprung: count-up static.', err);
  }
})();


/* Report in. If this line is never reached — script.js 404s, is blocked, or
   fails to parse — the guard in the head of index.html strips html.js after
   2.5s and the page renders fully visible. */
document.documentElement.setAttribute('data-reveal-ready', '');
