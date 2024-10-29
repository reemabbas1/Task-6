fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/') 
  .then(res => res.json()) 
  .then(res => featured(res));
  let divFeatured = document.getElementById('root');
  function featured(res){
    console.log(res);
  for (let index = 42 ; index < res.length; index++){
    divFeatured.innerHTML += `
    <div class="card-1">
    <div class = "frame">
    <img class="frame-image" style="width:200px" src=${res[index].simple_thumb} />
    </div>
    <h5>${res[index].title}</h5>
    <p>${res[index].author}</p>
    </div>
    `
  }
  }
  fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
  .then(res => res.json())
  .then(res => selling(res));

let divSelling = document.getElementById('selling');

function selling(res) {
  console.log(res);
  divSelling.innerHTML = `
    <div class="book-image">
      <img  class="frame-image" style="width:400px" src="${res.cover}" />
    </div>
    <div class="book-items">
      <h3 class="title">Best Selling Book</h3>
      <p>${res.authors[0].name}</p>
      <h5>${res.title}</h5>
      <div class="book-par">
        ${res.fragment_data.html}
      </div>
    </div>
  `;
}

  fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/') 
  .then(res => res.json()) 
  .then(res => popular(res));
  let divPopular = document.getElementById('popular');
  function popular(res){
    console.log(res);
  for (let index = 38 ; index < res.length; index++){
    divPopular.innerHTML += `
    <div class="card-1">
    <div class = "frame">
    <img class="frame-image" style="width:200px" src=${res[index].simple_thumb} />
    </div>
    <h5>${res[index].title}</h5>
    <p>${res[index].author}</p>
    </div>
    `
  }
  }
 
  