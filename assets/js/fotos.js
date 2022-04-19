'use strict'

const enlaces = document.querySelectorAll('a.a > img')
const lightbox  = document.querySelector('.lightbox')
const grande = document.querySelector('.abrir')
const cerrar = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i ) => {
    enlaces[i].addEventListener('click', (e) => {
        e.preventDefault()
        let ruta = e.target.src
        console.log(ruta)
        console.log(grande)

        lightbox.classList.add('activo')
        lightbox.style.display = 'grid'
        grande.setAttribute('src', ruta)
    })
})

cerrar.addEventListener( 'click', () => {
    lightbox.classList.remove('activo')
    lightbox.style.display = 'none'
}) 



