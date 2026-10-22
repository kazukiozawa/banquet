// const btn = document.querySelector('.mv__scrolldown');
// const about = document.querySelector('.about');
// btn.addEventListener('click', function(){
// about.scrollIntoView({behavior: "smooth"});

// })

// const btn = document.querySelector('.mv__scrolldown');
// const about = document.querySelector('.about');
// const aboutPosition = about.getBoundingClientRect().top + window.scrollY;

// btn.addEventListener('click', function() {
//     console.log('neko');
//   // スクロール位置を少し調整（例えば50px上にスクロール）
//   window.scrollTo({
//     top: aboutPosition  , // 調整するピクセル数
//     behavior: 'smooth'
//   });
// });


const btn = document.querySelector('.mv__scrolldown');
const about = document.querySelector('.about');

btn.addEventListener('click', function() {
  // ページがどこにスクロールされているかを確認
  const aboutPosition = about.offsetTop;

  // about要素の位置までスムーズにスクロール
  window.scrollTo({
    top: aboutPosition,
    behavior: 'smooth'
  });
});
const btnAbout = document.querySelector('.header__link-work');
const work = document.querySelector('.work');
btnAbout.addEventListener('click', function() {
  // ページがどこにスクロールされているかを確認
//   event.preventDefault();
  const workPosition = work.offsetTop;
  console.log('workjump');

  // about要素の位置までスムーズにスクロール
  window.scrollTo({
    top: workPosition,
    behavior: 'smooth'
  });
});

