const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#masterBedLight')
const cheap = document.querySelector('#LivingRmLight')
const fast = document.querySelector('#tvPlug')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

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