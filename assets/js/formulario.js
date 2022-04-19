'use strict'

const form = document.querySelector('form')
const element = document.querySelectorAll('.inp')
const label = document.querySelectorAll('.label')



element.forEach ((cadaElement, i) => {
    

    element[i].addEventListener('focus', () => {
        label[i].classList.add('activo')
    })

    element[i].addEventListener('blur', () => {
        if (element[i].value == ''){
            label[i].classList.remove('activo')
        }
        
    })  

    form.addEventListener('submit', (e) => {
        if (element[i].value == ''){
            e.preventDefault()


            if (element[i].parentElement.children.length < 3){
                const p = document.createElement("p")
                const text = document.createTextNode("Por favor completá este campo")
                p.appendChild(text)
                p.classList.add('error')

                element[i].parentElement.appendChild(p)
            }
        }else{

            if(element[i].parentElement.children.length >= 3){
                const noP = element[i].parentElement.getElementsByTagName('p')[0]
                element[i].parentElement.removeChild(noP)
            }
        }
    })
})





