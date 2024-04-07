// document.getElementById("CampForm").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var HospitalName = document.getElementById("hospital").value;
//   var datetime = document.getElementById("datetime").value;
//   var location = document.getElementById("location").value;
//   var contact = document.getElementById("contactinfo").value;
//   var Description = document.getElementById("Description").value;

//   console.log(HospitalName,datetime,location,contact,Description)


//   saveFormDetails(HospitalName, datetime, location,contact,Description);

//   //   enable alert
//   document.querySelector(".alert").style.display = "block";

//   //   remove the alert
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

//   //   reset the form
//   document.getElementById("CampForm").reset();
// }

// const saveFormDetails = async (hospitalName, datetime, location,contact,description) => {
//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   const raw = JSON.stringify({
//     "hospitalName": hospitalName,
//     "datetime": datetime,
//     "location": location,
//     "contact": contact,
//     "description": description
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
//   };

// const data = await fetch("http://localhost:3000/campDetails", requestOptions);
// console.log(await data.json())
// };
document.getElementById("CampForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var HospitalName = document.getElementById("hospital").value;
  var datetime = document.getElementById("datetime").value;
  var location = document.getElementById("location").value;
  var contact = document.getElementById("contactinfo").value;
  var Description = document.getElementById("Description").value;

  console.log(HospitalName, datetime, location, contact, Description);

  saveFormDetails(HospitalName, datetime, location, contact, Description);

  // Enable alert
  var alertDiv = document.querySelector(".alert");
  alertDiv.style.display = "block";

  // Remove the alert after 3 seconds
  setTimeout(() => {
    alertDiv.style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("CampForm").reset();
}

const saveFormDetails = async (hospitalName, datetime, location, contact, description) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    "hospitalName": hospitalName,
    "datetime": datetime,
    "location": location,
    "contact": contact,
    "description": description
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  const data = await fetch("http://localhost:3000/campDetails", requestOptions);
  console.log(await data.json());
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

