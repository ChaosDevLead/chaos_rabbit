//set panels var
const panels = document.querySelectorAll('.panel');
//switch active status on panels on click
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        //add active class to clicked panel
        panel.classList.add('active')
        //populate/dynamically insert content based on panel clicked
        switch(panel.classList.contains()) {
            case 'calendar':
                insertCalEvents()
                break;
            case 'audiobooks':
                insertRecentBooks()
                break;
            case 'settings': 
                populateSettings();
                break;
            case 'automate':
                populateSmartHome();
                break;
            default:
                break;
        }
    })
});
//ensure all active classes are removed
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
};
function populateSmartHome() {
    //TODO: populate/make visible smart home devices and current statuses
    //backup case: entry into smart home main screen
    //toggly buttons needed here
}
function populateSettings() {
    //TODO: populate/make visible setting options and current settings
    //backup case: entry into settings main screen
    //toggly buttons needed here
}
function insertCalEvents() { 
    //TODO: dynamically generate events from authorized calendars
    //ensure that events don't overflow container et panel in large/small screen size: 
    //desktop: max 6 (focus current hour et next); 
    //half-screen: max 3 (focus current hour); 
    //tablet: max 3 sed scroll 6; phone: max 2 sed scroll 6*/
     //backup case: entry into calendar main screen
}
function insertRecentBooks() {
    //TODO: dynamically generate books from Audible booklist ("recently read")
    //ensure that audiobooks don't overflow container et panel in large/small screen size: 
    //desktop: max 4
    //half-screen: max 2 
    //tablet: max 2 sed scroll 4 ; phone: max 2 sed scroll 4*/
     //backup case: entry into catalog main screen
     //display image/title with click-in access
}

//dark toggle
const toggle = document.querySelector('.toggle-mode')
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})
//end dark toggle

//toggle buttons
const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedOne) {
            fast.checked = false
        }
    }
}
//end toggle buttons

//from options.js
/*const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})*/