const extra = document.getElementById('extra')
const button = document.getElementsByClassName('button')[0]

function toggle() {
    if (extra.style.display === 'none') {
        extra.style.display = 'block'
        button.innerHTML = "LESS"
    } else {
        extra.style.display = 'none'
        button.innerHTML = 'MORE'
    }
}