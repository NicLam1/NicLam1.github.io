let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let behind = document.getElementById('behind')
let front = document.getElementById('front')
let text = document.getElementById('textBanner')
let btn = document.getElementById('exploreBtn')

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.left = -20 + (value * -0.02) + '%'
    moon.style.top = value * 0.4 + 'px'
    behind.style.top = value * 0.2 + 'px'
    front.style.top = value * 0.1 + 'px'
    text.style.marginRight = value * 0.7 + 'px'
    text.style.marginTop = value * 1 + 'px'
    btn.style.marginTop = value + 'px'
    btn.style.marginLeft = value * 0.7 + 'px'
})