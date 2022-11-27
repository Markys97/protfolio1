// open menu


let burgerBtn= document.querySelector('.main-header__open-btn')
let menu= document.querySelector('.menu')
let closeMenuBtn= document.querySelector('.menu__close-btn')
burgerBtn.addEventListener('click',function(e){
    menu.classList.add('menu-open')
})

// close menu
closeMenuBtn.addEventListener('click',function(e){
    menu.classList.remove('menu-open')
})

// s slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
 
    spaceBetween: 10,
    slidesPerView:1.1,
    // Navigation arrows
    navigation: {
      nextEl: '.slide__btn--next',
      prevEl: '.slide__btn--prev',
    },
  
    breakpoints:{
        768:{
            slidesPerView: 2,
            spaceBetween: 30
        },
        1600:{
            slidesPerView: 2,
            spaceBetween: 50
        },
    }
  });

  document.querySelectorAll('.item-what-more__btn').forEach(btn=>{
    btn.addEventListener('click',function(e){
        alert('mamam')
    })
  })

  // scroll top 

  document.querySelector('.footer__btn').addEventListener('click',function(e){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  })

//handler quantity
let moinsBtns= document.querySelectorAll('.item-product__price-btn--moins')
let plusBtn= document.querySelectorAll('.item-product__price-btn--plus')

moinsBtns.forEach(function(btn,index,list){
    btn.addEventListener('click',function(e){
        let quantity= parseInt(this.nextElementSibling.textContent)
      if(quantity > 0){
        quantity -=1;
      }
      this.nextElementSibling.textContent=quantity
    })
})


plusBtn.forEach(function(btn,index,list){
    btn.addEventListener('click',function(e){
        let quantity= parseInt(this.previousElementSibling.textContent)
        quantity +=1;
      this.previousElementSibling.textContent=quantity
    })
})
