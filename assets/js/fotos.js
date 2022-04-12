'use strict'

const enlaces = document.querySelectorAll('a.a > img')
const lightbox  = document.querySelector('.lightbox')
const grande = document.querySelector('.abrir')
const cerrar = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i ) => {
    enlaces[i].addEventListener('click', (e) => {
        e.preventDefault()
        let ruta = e.srcElement.src
        console.log(ruta)

        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)
    })
})

cerrar.addEventListener( 'click', () => {
    lightbox.classList.remove('activo')
})



