const searchPhone = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   //console.log(searchText);
   searchField.value = '';
   const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;

   //console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResult(data.data));
}


const displaySearchResult = phones => {
   const searchResult = document.getElementById('search-result');
   phones.forEach(phone => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
         <img src="${phone.image}" class="card-img-top" alt="...">
         <div class="card-body">
          <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
          <p class="card-text">Brand: ${phone.brand}</p>
          <p class="card-text">Feature: ${phone.slug}</p>
        </div>
      </div>
    `;
    searchResult.appendChild(div);
   })
}
