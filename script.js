const icon = document.getElementById('icon')
const h2Text = document.querySelector('.h2Text')


icon.addEventListener('click', () =>{
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        icon.src = 'images/sun-solid-full.svg'
    }else{
        console.log('not correct')
    }
    console.log('testing')
})