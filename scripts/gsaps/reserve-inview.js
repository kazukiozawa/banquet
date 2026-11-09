const reserve = document.querySelector(".reserve");

ScrollTrigger.create({
  trigger: ".about__scene",
  start: "top top",

  onEnter: () => reserve.classList.add("inview"),
  onLeaveBack: () => reserve.classList.remove("inview"),
  onRefresh: (self) => {
    reserve.classList.toggle("inview", self.scroll() >= self.start);
  },
});

console.log("reserve-Inview.js loaded");