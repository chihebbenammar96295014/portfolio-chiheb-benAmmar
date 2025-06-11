/*=============== SERVICES MODAL ===============*/
/*-------hathi partie responsable ki tteanzel 3ala know more*/
const modal =document.querySelectorAll('.services__modal'),
      modalButton=document.querySelectorAll('.services__button'),
      modalClose =document.querySelectorAll('.services__modal-close')
let activeModal= (modalClick)=>{
    modal[modalClick].classList.add('active-modal')
}
/* hathi ki tenzel 3al button mta3 know more tod5el lil description*/
modalButton.forEach((modalbutton, i)=>{
    modalbutton.addEventListener('click',()=>{
        activeModal(i)
    })
})
/* hathi ki tenzel 3al x mta3 know more to5rej min description*/
modalClose.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modal.forEach((modalRemove)=>{
            modalRemove.classList.remove('active-modal')
        })
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
