// document.getElementById("donor_reg").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var firstName = document.getElementById("first-name").value;
//   var lastName = document.getElementById("last-name").value;
//   var dateOfBirth = document.getElementById("dob").value;
//   var Email = document.getElementById("email").value;
//   var contact = document.getElementById("contact-number").value;
//   var address = document.getElementById("address").value;
//   var bloodType = document.getElementById("blood-type").value;


//   // var donationDetails = document.querySelector('input[name="donation-details"]:checked');
  
//   // if (donationDetails !== null) {
//   //     responsedondet = donationDetails.value;
//   // } else {
//   //     responsedondet = ""; 
//   // }
  
//   // var allergies = document.querySelector('input[name="allergies"]:checked');

//   // if (allergies !== null) {
//   //     responseall = allergies.value;
//   // } else {
//   //     responseall = "";
//   // }
//   var otherAllergies = document.getElementById("otherallergies").value;
  

  

//   console.log(firstName, lastName, dateOfBirth, Email, contact, address, bloodType, otherAllergies);

//   saveFormDetails(firstName, lastName, dateOfBirth, Email, contact, address, bloodType, otherAllergies);

//   document.getElementById("donor_reg").reset();
// }

// const saveFormDetails = async (firstName, lastName, dateOfBirth, Email, contact, address, bloodType, otherAllergies) => { //removed donation and allergies radio btns
//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   const raw = JSON.stringify({
//     "firstName": firstName,
//     "lastName": lastName,
//     "dateOfBirth": dateOfBirth,
//     "Email": Email,
//     "contact": contact,
//     "address": address,
//     "bloodType": bloodType,
//     // "donationDetails": donationDetails,
//     // "allergies": allergies,
//     "otherAllergies": otherAllergies,
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
//   };

//   const data = await fetch("http://localhost:3000/donars_reg", requestOptions);
//   console.log(await data.json());
// };
document.getElementById("donor_reg").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var dateOfBirth = document.getElementById("dob").value;
  var Email = document.getElementById("email").value;
  var contact = document.getElementById("contact-number").value;
  var address = document.getElementById("address").value;
  var bloodType = document.getElementById("blood-type").value;
  var otherAllergies = document.getElementById("otherallergies").value;

  saveFormDetails(firstName, lastName, dateOfBirth, Email, contact, address, bloodType, otherAllergies)
    .then(() => {
      // Display success alert
      displayAlert("Form submitted", "green");
    })
    .catch(error => {
      console.error("Error saving form details:", error);
      // Display error alert
      displayAlert("Error submitting form", "red");
    });

  document.getElementById("donor_reg").reset();
}

const saveFormDetails = async (firstName, lastName, dateOfBirth, Email, contact, address, bloodType, otherAllergies) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    "firstName": firstName,
    "lastName": lastName,
    "dateOfBirth": dateOfBirth,
    "Email": Email,
    "contact": contact,
    "address": address,
    "bloodType": bloodType,
    "otherAllergies": otherAllergies,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  const response = await fetch("http://localhost:3000/donars_reg", requestOptions);
  if (!response.ok) {
    throw new Error("Failed to save form details");
  }
  return response.json();
};

function displayAlert(message, color) {
  const alertElement = document.createElement("div");
  alertElement.textContent = message;
  alertElement.classList.add("alert");
  alertElement.style.backgroundColor = color;
  document.body.appendChild(alertElement);
  setTimeout(() => {
    alertElement.remove();
  }, 3000);
}
