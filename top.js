//アコーディオン展開
document.addEventListener("DOMContentLoaded",() => {
  const title = document.querySelectorAll('.js-accordion-title');
  
  for (let i = 0; i < title.length; i++){
    let titleEach = title[i];
    let content = titleEach.nextElementSibling;
    titleEach.addEventListener('click', () => {
      titleEach.classList.toggle('is-active');
      content.classList.toggle('is-open');
    });
  }

});

//1~4の選択肢

document.getElementsByTagName('button')[0].addEventListener('click',() =>{
const min = 1 ;
const max = 4 ;
a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
window.alert(a);
});

//ア〜ウの選択肢
const arr = [ "ア", "イ", "ウ", "エ" ] ;
document.getElementsByTagName('button')[1].addEventListener('click',() =>{
b = arr[ Math.floor( Math.random() * arr.length ) ] ;
window.alert(b);
});

//◯か×
const brr = [ "◯", "×"] ;
document.getElementsByTagName('button')[2].addEventListener('click',() =>{
  c = brr[ Math.floor( Math.random() * brr.length ) ] ;
  window.alert(c);
});

//サイコロ
document.getElementsByTagName('button')[3].addEventListener('click',() =>{
  const min = 1 ;
  const max = 6 ;
d = Math.floor( Math.random() * (max + 1 - min) ) + min ;
window.alert(d);
});