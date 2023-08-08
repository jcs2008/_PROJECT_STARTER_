const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

const nav = document.querySelectorAll('.nav')
window.addEventListener('scroll',fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHehight + 150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}