function panelHandler() {
	var panels = document.querySelectorAll('.panel');
	var activePanel = document.querySelector('.activepanel');
	var passivePanels = document.querySelector('.passivepanels');

	panels.forEach(panel => {
		panel.addEventListener('click', () => {
			var activeOld = document.querySelector('.active');
			removeActiveClasses();
			if (panel.parentElement === passivePanels) {
				//add active class to clicked panel
				//removeChild from activePanel
				var activeClone = activeOld.cloneNode(true);
				activeClone.classList.remove('active');
				activeClone.classList.add('passive');
				//removeChild from passivePanels
				var passiveClone = panel.cloneNode(true);
				passiveClone.classList.remove('passive');
				passiveClone.classList.add('active');
				//addChild to activePanel
				panel.replaceWith(activeClone);
				//addChild to passivePanels
				activeOld.replaceWith(passiveClone);
			}

			//populate/dynamically insert content based on panel clicked
			if (panel.classList.contains('calendar')) {
				populateCalEvents();
			} else if (panel.classList.contains('catalog')) {
				populateLibrary();
			} else if (panel.classList.contains('settings')) {
				populateSettings();
			} else if (panel.classList.contains('automate')) {
				populateSmartHome();
			} else if (panel.classList.contains('grocery')) {
				populateGrocery();
			}
		})
		//ensure all active classes are removed
		function removeActiveClasses() {
			panels.forEach(panel => {
				panel.classList.remove('active')
			})
			/* for (let i = 0; i < 5; i++) {
			  let panelBody = "panel-body" + String(i);
			  document.getElementsByClassName(panelBody).style.display = 'none';
			 } */
		}
	});
}

/**************************************
 * Audible JS 
 * populate library panel when active
 ***************************************/
const fileURL = "./liberA.json";
function populateLibrary() {
	getLibrary(fileURL);
	/*   const library = document.getElementsByClassName('panel-body2');
	  library.style.display = 'block'; */
}
async function getLibrary(fileURL) {
	try {
    const req = new Request(fileURL);
    fetch(req).then(response => response.json()).then(data => {
      renderLibrary(data);
    })} catch (error) { console.log(error); }
}

function renderLibrary(books) {
    for (const book of books) {
      const { image, title, series, author, narrator, description } = book;
      let txt = '';
      let i = 0;
      let imageLink = "https://m.media-amazon.com/images/I/" + image + "._SL500_.jpg";
      //${book.title} with tags etc.
      let cBook = `<di class="col bookWrap">
                   <img src="${imageLink}" style="width:200px; height: 200px;">
                   <p>${title}</p>
                   <p>${author}</p>
                   </div>`;
        let aRow = `<div class="row">`;
        let endDiv = `</div>`;
        if (i == 0) {
          txt += aRow;
          txt += cBook;
        } else if (i == 2) {
          txt += cBook;
          txt += endDiv;
          i = -1;
        } else {
          txt += cBook;
        }
        console.log(txt);
       /*  let newPanel = document.createElement('div', 'bookPanel');
        newPanel.innerHTML = txt; */
        let panelBody = document.getElementsByClassName('panel-body2');
        panelBody.innerHTML = txt;
        i++;
    };
       
}

/**************************************
 * Automate JS
 * populate automation panel when active
 ***************************************/
function populateSmartHome() {
	/*   const smarty = document.getElementsByClassName('panel-body2');
	  smarty.style.display = 'block'; */
}

var toggles = document.querySelectorAll('.toggle');

/**************************************
 * Calender JS
 * populate calendar panel when active
 ***************************************/
function populateCalEvents() {
	/*   const calend = document.getElementsByClassName('panel-body1');
	  calend.style.display = 'block'; */
}

/**************************************
 * Grocery JS
 * populate grocery panel when active
 ***************************************/
function populateGrocery() {
	/*   const groc = document.getElementsByClassName('panel-body3'); 
	  groc.style.display = 'block'; */
}


/**************************************
 * Settings JS
 * populate settings panel when active
 ***************************************/
function populateSettings() {
	/*  const sett = document.getElementsByClassName('panel-body5');
	 sett.style.display = 'block'; */
}

var collapseToggles = document.querySelectorAll('.settings-toggle');

collapseToggles.forEach(toggle => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});

var ballToggles = document.querySelectorAll('.toggle');
var alpha = document.querySelector('#alpha');
var beta = document.querySelector('#beta');
var charlie = document.querySelector('#charlie');