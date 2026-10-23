// gsap.registerPlugin(ScrollTrigger, SplitText);

// document.addEventListener("DOMContentLoaded", () => {
//   const lenis = new Lenis();
//   lenis.on("scroll", ScrollTrigger.update);
//   gsap.ticker.add((time) => lenis.raf(time * 1000));
//   gsap.ticker.lagSmoothing(0);

//   gsap.to(".fv__container", {
//     marginLeft: 0,
//     height: "100vh",

//     immediateRender: false,

//     scrollTrigger: {
//       trigger: ".about",
//       start: "top bottom",
//       end: "top top",
//       scrub: 1,
//     },
//   });
// });
// console.log('thisIsTest');

// window.addEventListener("pageshow", (event) => {
//   if (event.persisted) {
//     requestAnimationFrame(() => {
//       lenis.resize();
//       ScrollTrigger.refresh();
//     });
//   }
// });

gsap.registerPlugin(ScrollTrigger, SplitText);

let lenis;

document.addEventListener("DOMContentLoaded", () => {
  lenis = new Lenis();
  console.count("[Lenis initialized]");

  lenis.on("scroll", ScrollTrigger.update);

  const lenisRaf = (time) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(lenisRaf);

  let lastTickerTime = null;

  gsap.ticker.add((time) => {
    if (lastTickerTime !== null) {
      const delta = (time - lastTickerTime) * 1000;

      if (delta > 100) {
        console.log("[ticker gap]", {
          deltaMs: delta.toFixed(1),
          scrollY: window.scrollY,
          lenisScroll: lenis.scroll,
        });
      }
    }

    lastTickerTime = time;
  });

  gsap.ticker.lagSmoothing(0);

  gsap.to(".fv__container", {
    marginLeft: 0,
    height: "100vh",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });
});

window.addEventListener("pageshow", (event) => {
  console.log("[pageshow]", {
    persisted: event.persisted,
    scrollY: window.scrollY,
    scrollHeight: document.documentElement.scrollHeight,
    lenisScroll: lenis?.scroll,
    animatedScroll: lenis?.animatedScroll,
    targetScroll: lenis?.targetScroll,
    isScrolling: lenis?.isScrolling,
  });

  requestAnimationFrame(() => {
    console.log("[pageshow + 1 frame]", {
      scrollY: window.scrollY,
      lenisScroll: lenis?.scroll,
      animatedScroll: lenis?.animatedScroll,
      targetScroll: lenis?.targetScroll,
      isScrolling: lenis?.isScrolling,
    });
  });
});

window.addEventListener("wheel", () => {
  console.log("[wheel]", {
    scrollY: window.scrollY,
    lenisScroll: lenis?.scroll,
    animatedScroll: lenis?.animatedScroll,
    targetScroll: lenis?.targetScroll,
    isScrolling: lenis?.isScrolling,
    velocity: lenis?.velocity,
  });
}, { passive: true });

console.log('New');