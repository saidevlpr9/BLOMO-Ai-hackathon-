// function fetchdonorData() {
//   const donorContainer = document.getElementById('donor');
//   const url = 'http://localhost:3000/donars_reg';

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       donorContainer.innerHTML = ''; 
//       data.forEach(don => { 


//         const donorDiv = document.createElement('div');
//         donorDiv.classList.add('donor');

// 				const h1 = document.createElement('h1');
//         h1.textContent = `Hospital Name: ${don.hospitalName}`;
//         donorDiv.appendChild(h1);

//         const description = document.createElement('p');
// 				description.textContent = `Description: ${don.description}`; 
// 				donorDiv.appendChild(description);


        
//         const p = document.createElement('p');
//         p.textContent = `Location: ${don.location}`;
//         donorDiv.appendChild(p);

// 				const contact = document.createElement('h3');
// 				contact.textContent = `Contact: ${don.contact}`;
// 				donorDiv.appendChild(contact)

//         donorContainer.appendChild(donorDiv);
//       });
//     })
//     .catch(error => {
//       console.error('Error fetching donor data:', error);
//     });
// }
// fetchdonorData()
function fetchDonorData() {
  const donorContainer = document.getElementById('donor');
  const url = 'http://localhost:3000/donars_reg';

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      donorContainer.innerHTML = ''; // Clear previous data
      data.forEach(don => {
        const donorDiv = document.createElement('div');
        donorDiv.classList.add('donor');

        

        const donorName = document.createElement('h2');
        donorName.textContent = `Donor Name: ${don.firstName}`;
        donorDiv.appendChild(donorName);

        const donorId = document.createElement('h3');
        donorId.textContent = `Donor Id: ${don.id}`;
        donorDiv.appendChild(donorId);

        const dateOfBirth = document.createElement('h4');
        dateOfBirth.textContent = `Date Of Birth: ${don.dateOfBirth}`;
        donorDiv.appendChild(dateOfBirth);

        const email = document.createElement('p');
        email.textContent = `Email: ${don.email}`;
        donorDiv.appendChild(email);

        const contact = document.createElement('h3');
        contact.textContent = `Contact: ${don.contact}`;
        donorDiv.appendChild(contact);

        const address = document.createElement('p');
        address.textContent = `Location: ${don.address}`;
        donorDiv.appendChild(address);

        const bloodType = document.createElement('h3');
        bloodType.textContent = `Blood Type: ${don.bloodType}`;
        donorDiv.appendChild(bloodType);

        const otherAllergies = document.createElement('h3');
        otherAllergies.textContent = `Allergies: ${don.otherAllergies}`;
        donorDiv.appendChild(otherAllergies);

        donorContainer.appendChild(donorDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching donor data:', error);
      donorContainer.innerHTML = '<p>Error fetching donor data. Please try again later.</p>';
    });
}

// Call the function to fetch donor data
fetchDonorData();
