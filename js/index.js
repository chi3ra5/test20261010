console.log("読み込み成功")
// 要素を取得
const hamburgerBtn = document.getElementById('hamburger_btn');
const hamburgerNav = document.getElementById('hamburger_nav');

// ハンバーガーメニューのボタンを実装
hamburgerBtn.addEventListener('click',()=>{
  hamburgerNav.classList.toggle('active')
});



// モーダル要素を取得
const modal = document.getElementById('modal');
// モーダルを開くボタンを取得
const openModal = document.querySelectorAll('.open-modal');
// モーダルを閉じるボタンを取得
const closeModal = document.getElementById('closeModal');


openModal.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  }); 
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
}); 

// window.addEventListener('click', (event) => {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// });