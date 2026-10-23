gsap.registerPlugin(ScrollTrigger, SplitText);

document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

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
});
console.log('thisIsTest');

window.addEventListener("pageshow", (event) => {
  console.log("pageshow:", {
    restoredFromCache: event.persisted,
    scrollY: window.scrollY,
    scrollHeight: document.documentElement.scrollHeight,
  });

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
});