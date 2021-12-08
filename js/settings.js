const collapseToggles = document.querySelectorAll('.settings-toggle')

collapseToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

const ballToggles = document.querySelectorAll('.toggle')
const alpha = document.querySelector('#alpha')
const beta = document.querySelector('#beta')
const delta = document.querySelector('#delta')

ballToggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

/* function doTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedOne) {
            fast.checked = false
        }

        if(cheap === theClickedOne) {
            good.checked = false
        }

        if(fast === theClickedOne) {
            cheap.checked = false
        }
    }
} */