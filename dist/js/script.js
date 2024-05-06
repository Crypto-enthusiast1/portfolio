document.addEventListener('DOMContentLoaded', () => {

   const menu = document.querySelector('.menu');
   const overflow = document.querySelector('.overflow');

   function mainMenuInPromoSection() {
      const btnBurger = document.querySelector('.burger');

      btnBurger.addEventListener('click', () => {
         menu.classList.add('active')
         overflow.style.display = 'block';
      })
   }

   mainMenuInPromoSection();

   function closeMenu() {
      const close = document.querySelector('.close')

      close.addEventListener('click', () => {
         menu.classList.remove('active')
         overflow.style.display = 'none';

      })

      overflow.addEventListener('click', () => {
         menu.classList.remove('active')
         overflow.style.display = 'none';
      })

   }

   closeMenu()











});