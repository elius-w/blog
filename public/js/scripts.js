
const bx = document.querySelector('.bx')
const menu_mobile = document.querySelector('.menu-mobile')
const link_mobile = document.querySelector('.link-menu-mobile')


link_mobile.forEach((item) => {

    item.addEventListener('click', () =>{
        menu_mobile.classList.add('showmenu')
    })

})

bx.addEventListener('click',() =>{
    bx.classList.toggle('activebx')

    menu_mobile.classList.toggle('showmenu')
})



console.log()