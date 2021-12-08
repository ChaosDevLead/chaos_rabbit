var bookList = document.querySelector('.book-list');
const fileURLA = "../data/liberA.json";
const fileURLK = "../data/liberK.json";
var fileURL = "";
var source = window.location.pathname;

function library() {
  console.log(source);
  if (source == '/views/kindle.html/') {
    fileURL = fileURLK;
  }
  else {
    fileURL = fileURLA;
  }
    renderLibrary();
}

async function getLibraryFile(fileURL) {
  try{
    let res = await fetch(fileURL);
    return await res.json();
  }
  catch(error) {
    console.log(error);
  }
}

async function renderLibrary() {
  let books = await getLibraryFile(fileURL);

  books.forEach(book => { 
    let txt = '';
    let i = 0; 
    let imageLink = "https://m.media-amazon.com/images/I/" + book.image + "._SL500_.jpg";
      //${book.title} with tags etc.
    let cBook = `<di class="col bookWrap">
                  <img src="${imageLink}" style="width:200px; height: 200px;">
                  <p>${book.title}</p>
                  <p>${book.author}</p>
                  </div>`; 
    let aRow = `<div class="row">`;
    let endDiv = `</div>`;
    if (i == 0){
      txt += aRow;
      txt += cBook;
    }
    else if (i == 2){
      txt += cBook;
      txt += endDiv;
      i = -1;
    } else {
      txt += cBook;
    }
    
    let container = document.querySelector('.bookList');
    let newPanel = document.createElement('div', 'panel');
    newPanel.innerHTML = txt;
    container.appendChild(newPanel);
    i++;      
});
}

function displayResults(items) {
  
  items.forEach(item=> {
      const {productUrl, title, authors} = item;
      const bookEl = document.createElement('div');
      bookEl.classList.add('book');
      bookEl.innerHTML = `
      <img src="${productUrl}" alt="${title}">
      <div class="book-info">
          <h2>${title}</h2>
          <p>${authors}</p>
        </div>
        `
        main.appendChild(bookEl);
  })
}

//COMPLETE: write search functions to search items by title, author
function searchLibrary(searchTerm) {
let searchResults = ''
switch(searchTerm) {
  case 'title':
    searchResults = items.filter(item => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase())
      })
    break;
  case 'author':
    searchResults = items.filter(item => {
        return item.author.toLowerCase().includes(searchTerm.toLowerCase())
      })
    break;
  default:
    break;
}
return searchResults
}

form.addEventListener('submit', (e) => {
e.preventDefault()
const searchTerm = search.value
if(searchTerm && searchTerm !== '') {
displayLibrary(searchLibrary(searchTerm))
}
else {
displayResults(items)
}
})