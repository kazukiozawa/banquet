// const listWrapperEl = document.querySelector('.test');
// const listEl = document.querySelector('.test__list');

// gsap.to(listEl, {
//   x: () => -(listEl.scrollWidth - listWrapperEl.clientWidth),
//   ease: 'none',

//   scrollTrigger: {
//     trigger: listWrapperEl,
//     start: 'top top',
//     end: () => `+=${listEl.scrollWidth - listWrapperEl.clientWidth}`,
//     scrub: true,
//     pin: true,
//     anticipatePin: 0,
//     invalidateOnRefresh: true,

//     markers: true,
//   },
// });




// const menuEl = document.querySelector('.menu__carte');
// const listEl = document.querySelector('.menu__carte-list');

// gsap.to(listEl, {
//   x: () => -(listEl.scrollWidth - window.innerWidth),
//   ease: 'none',

//   scrollTrigger: {
//     trigger: menuEl,
//     start: 'top top',
//     end: () => `+=${listEl.scrollWidth - window.innerWidth}`,
//     scrub: true,
//     pin: true,
//     anticipatePin: 0,
//     invalidateOnRefresh: true,

//     onEnter: () => {
//       console.log(
//         'PIN時のmenu top:',
//         menuEl.getBoundingClientRect().top
//       );
//     },
//   },
// });


// const menuEl = document.querySelector('.menu__carte');
// const listEl = document.querySelector('.menu__carte-list');

// const getScrollAmount = () => {
//   const lastItem = listEl.lastElementChild;
//   const lastItemCenter =
//     lastItem.offsetLeft + lastItem.offsetWidth / 2;

//   return lastItemCenter - window.innerWidth / 2;
// };

// gsap.to(listEl, {
//   x: () => -getScrollAmount(),
//   ease: 'none',

//   scrollTrigger: {
//     trigger: menuEl,
//     start: 'top top',
//     end: () => `+=${getScrollAmount()}`,
//     scrub: true,
//     pin: true,
//     anticipatePin: 0,
//     invalidateOnRefresh: true,

//     onEnter: () => {
//       console.log(
//         'PIN時のmenu top:',
//         menuEl.getBoundingClientRect().top
//       );
//     },
//   },
// });

// const menuEl = document.querySelector('.menu__carte');
// const listEl = document.querySelector('.menu__carte-list');
// const paddingLeft = parseFloat(
//   getComputedStyle(listEl).paddingLeft
// );

// const scrollAmount = listEl.scrollWidth - window.innerWidth + paddingLeft;

// gsap.to(listEl, {
//   x: () => -scrollAmount,
//   ease: 'none',

//   scrollTrigger: {
//     trigger: menuEl,
//     start: 'top top',
//     end: () => `+=${scrollAmount}`,
//     scrub: true,
//     pin: true,
//     anticipatePin: 0,
//     invalidateOnRefresh: true,
//   },
// });



const menuMM = gsap.matchMedia();

menuMM.add('(min-width: 960px)', () => {
  const menuEl = document.querySelector('.menu__carte');
  const listEl = document.querySelector('.menu__carte-list');
  const firstItem = listEl.firstElementChild;


  // const setPaddingLeft = () => {
  //   listEl.style.paddingLeft =
  //     `${(document.documentElement.clientWidth - firstItem.offsetWidth) / 2}px`;
  // };

  // setPaddingLeft();  
  const setPaddingLeft = () => {
    const viewportWidth = document.documentElement.clientWidth;
    const itemWidth = firstItem.getBoundingClientRect().width;
    
    listEl.style.paddingLeft = `${(viewportWidth - itemWidth) / 2}px`;
  };
  
  setPaddingLeft();


  const getScrollAmount = () => {
    const paddingLeft = parseFloat(getComputedStyle(listEl).paddingLeft) || 0;
    return Math.max(0, listEl.scrollWidth - window.innerWidth + paddingLeft);
  };

  gsap.to(listEl, {
    x: () => -getScrollAmount(),
    ease: 'none',

    scrollTrigger: {
      trigger: menuEl,
      start: 'top top',
      end: () => `+=${getScrollAmount()}`,
      scrub: true,
      pin: true,
      anticipatePin: 0,
      invalidateOnRefresh: true,
    },
  });
});

