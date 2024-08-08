const buttons = document.querySelectorAll('.change')
const body = document.body

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
    })
    
})