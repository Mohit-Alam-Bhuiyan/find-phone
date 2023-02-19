document.getElementById('error-message').style.display = 'none';
const searchPhone = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   //clear data
   searchField.value = '';
  document.getElementById('error-message').style.display = 'none';
   if(searchText == ''){
    //console.log('no result found');
   }

   else{
    //load data
   const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
   fetch(url)
   .then(res => res.json())
   .then(data => displaySearchResult(data.data))
   .catch(error => displayError(error));
 }
   }
    

  const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
  }


const displaySearchResult = phones => {
   const searchResult = document.getElementById('search-result');
   searchResult.textContent = '';
   if(phones.length == 0){
     console.log(error);
   }
  else{
   // console.log(error);
  }

   phones.forEach(phone => {
     //console.log(phone);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100 ">
         <img src="${phone.image}" class="card-img-top" alt="..." width="300" height="400">
         <div class="card-body">
          <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
          <p class="card-text">Brand: ${phone.brand}</p>

          <div id="phone-detail" onclick="loadPhoneDetail('${phone.slug}')">
          <button type="button" class="btn btn-dark">Detail Explore</button>
          </div>
          
        </div>
      </div>
    `;
    searchResult.appendChild(div);
   })
}


const loadPhoneDetail = slug => {
  const url = ` https://openapi.programming-hero.com/api/phone/${slug}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhoneDetail(data.data));
}


const displayPhoneDetail = phone => {
  console.log(phone);
  const phoneDetails = document.getElementById('phone-details');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${phone.image}" class="card-img-top" alt="..." width="100" height="500">
  <div class="card-body">
    <h5 class="card-title">Phone Name: ${phone.name}</h5>
    <p class="card-text">Brand: ${phone.brand}</p>
    <p>Release Date: ${phone.releaseDate}</p>

    <p>Main Features:
    <br>1. Chip set: ${phone.mainFeatures.chipSet}
    <br>2. Display size: ${phone.mainFeatures.displaySize}
    <br>3. Memory: ${phone.mainFeatures.memory}
    </p>

    <p>Sensor: ${phone.mainFeatures.sensors}</p>
    <div id="others">
      <p>Others:
      <br>1. Bluetooth: ${phone?.others?.Bluetooth}
      <br>2. GPS: ${phone?.others?.GPS}
      <br>3. NFC: ${phone?.others?.NFC}
      <br>4. Radio: ${phone?.others?.Radio}
      <br>5. USB: ${phone?.others?.USB}
      <br>5. WLAN: ${phone?.others?.WLAN}
      </p>
    </div>
  </div>
  `;

  phoneDetails.appendChild(div);
}