function fetchCampsData() {
  const campsContainer = document.getElementById('camps');
  const url = 'http://localhost:3000/campDetails';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      campsContainer.innerHTML = ''; 
      data.forEach(camp => { 


        const campDiv = document.createElement('div');
        campDiv.classList.add('camp');

				const h1 = document.createElement('h1');
        h1.textContent = `Hospital Name: ${camp.hospitalName}`;
        campDiv.appendChild(h1);

        const description = document.createElement('p');
				description.textContent = `Description: ${camp.description}`; 
				campDiv.appendChild(description);


        
        const p = document.createElement('p');
        p.textContent = `Location: ${camp.location}`;
        campDiv.appendChild(p);

				const contact = document.createElement('h3');
				contact.textContent = `Contact: ${camp.contact}`;
				campDiv.appendChild(contact)

        campsContainer.appendChild(campDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching camps data:', error);
    });
}
fetchCampsData()