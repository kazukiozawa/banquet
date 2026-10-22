const mm = gsap.matchMedia();

mm.add(
  {
    isMobile: "(max-width: 959px)",
    isDesktop: "(min-width: 960px)",
  },
  (context) => {
    const { isMobile } = context.conditions;

    const aboutSceneImgs = [
      {
        selector: ".about__scene-img1",
        y: isMobile ? '-100%' : -500,
      },
      {
        selector: ".about__scene-img2",
        y: isMobile ? '-120%' : -250,
      },
      {
        selector: ".about__scene-img3",
        y: isMobile ? '-100%' : -250,
      },
      {
        selector: ".about__scene-img4",
        y: isMobile ? '-100%' : -500,
      },
    ];

    aboutSceneImgs.forEach(({ selector, y }) => {
      gsap.to(selector, {
        y: y,
        scrollTrigger: {
          trigger: ".about__scene",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }
);