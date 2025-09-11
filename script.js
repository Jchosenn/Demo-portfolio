// const icon = document.getElementById('icon')
// const h2Text = document.querySelector('.h2Text')



// icon.addEventListener('click', () =>{
//     document.body.classList.toggle('dark')
//     if(document.body.classList.contains('dark')){
//         icon.src = 'images/sun-solid-full.svg'
//         document.body.classList.remove('dark')
//     }else{
//         icon.src = 'images/moon-solid-full.svg'
//         console.log('not correct')
//     }
// })

const icon = document.getElementById('icon')

if (localStorage.getItem('theme') == null){
    localStorage.setItem('theme', 'light')
}


let localData = localStorage.getItem('theme')

if(localData == 'light'){
    icon.src ="images/moon-solid-full.svg"
    document.body.classList.remove('dark')
}else if(localData == 'dark'){
    icon.src ="images/sun-solid-full.svg"
    document.body.classList.add('dark')
}

icon.addEventListener('click', () =>{
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        icon.src = "images/sun-solid-full.svg"
    localStorage.setItem('theme', 'dark')
    }else{
    icon.src = "images/moon-solid-full.svg"
    localStorage.setItem('theme', 'light')
    }
})