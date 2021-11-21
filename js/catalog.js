//TODO: #5 connect to audible api
//COMPLETE: connected to kindle api
//COMPLETE: rewrite to display results of kindleApi.js
//TODO: #6 rewrite to display results of audibleApi.js

//TODO: with node, access read.amazon.com w/o pulling up browser
//COMPLETE: populate kindle.html with data passing thru catalog.js
//TODO: check bool flag to see if daily cache has been made
//TODO: if not, make it
//TODO: must save to local device storage


// init
let cacheFlag = false
let amazonType = "kindle"
let domain = ""
let xhr = new XMLHttpRequest()
let items = []

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


switch(amazonType) {
  case 'kindle':
        domain = 'https://read.amazon.com/'
      break;
    case 'audible':
        domain = 'https://www.audible.com/ep/library/audiobooks'
      break;
    default:
        break;
}


// function
function getItemsList(paginationToken = null) {
  let url = domain + 'kindle-library/search?query=&libraryType=BOOKS' + ( paginationToken ? '&paginationToken=' + paginationToken : '' ) + '&sortType=recency&querySize=50'
  xhr.open('GET', url, false)
  xhr.send()  

  async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

   displayLibrary(data)
}
}

// request result
xhr.onreadystatechange = function() {
  switch ( xhr.readyState ) {
    case 0:
      console.log('uninitialized')
      break;
    case 1:
      console.log('loading...')
      break;
    case 4:
      if(xhr.status == 200) {
        let data = xhr.responseText
        data = JSON.parse(data)
        if(data.itemsList) {
          items.push(...data.itemsList)
        }
        if(data.paginationToken) {
          getItemsList(data.paginationToken)
        }
      } else {
        console.log('Failed')
      }
      break;
  }
}

// action
getItemsList()

//to html
function displayLibrary(items) {
      main.innerHTML = "";

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
    displayLibrary(items)
  }
})