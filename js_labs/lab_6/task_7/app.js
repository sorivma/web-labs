function attachListeners() {
    profiles = document.querySelectorAll('.profile')
    counter = 1
    profiles.forEach(profile => {
        const radios = profile.querySelectorAll('input[type="radio"]')
        const showDetailsButton = profile.querySelector('button')
        const hiddenFields = profile.querySelector(`#user${counter}HiddenFields`)

        showDetailsButton.addEventListener('click', function() {
            let lock
            radios.forEach(radio => {
                if (radio.checked) {
                    lock = radio.value
                }
            })
            
            if (lock === 'unlock') {
                hiddenFields.style.display = (hiddenFields.style.display === 'none') ? 'block' : 'none'
            }
        })
    counter++
    });
}

function lockedProfile() {
    attachListeners()
}