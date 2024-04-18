function attachListeners() {
    profiles = document.querySelectorAll('.profile')
    counter = 1
    profiles.forEach(profile => {
        const radios = profile.querySelectorAll('input[type="radio"]')
        const showDetailsButton = profile.querySelector('button')
        const hiddenFields = profile.querySelector(`#user${counter}HiddenFields`)

        showDetailsButton.addEventListener('click', function () {
            let lock = "lock"


            radios.forEach(radio => {
                if (radio.checked) {
                    lock = radio.value
                }
            })

            console.log(lock)

            if (lock == 'unlock') {
                if (hiddenFields.style.display === "none") {
                    hiddenFields.style.display = "block"; // Reset to default value
                } else if (hiddenFields.style.display === "block") {
                    hiddenFields.style.display = "none";
                } else {
                    hiddenFields.style.display = "block"
                }
            }
        })
        counter++
    });
}

function lockedProfile() {
    attachListeners()
}