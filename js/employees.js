var content = document.getElementById("employeeContainer");
var employeeArray = [

  {
    name: "Thomas Shavor",
    employeeBlurb: "Thom has been helping people <span>SEA</span> the world in style since 2010. He enjoys action movies about impossible missions.",
    employeeTitle: "<span>SEA</span>EO",
    employeePic: "images/thom.jpg"
  },
  {
    name: "Dave Harms",
    employeeBlurb: "Dave has be <span>ANCHORING</span> our operations for 4 years. He enjoys spending time abord his boat, the 'Viatmin Sea'.",
    employeeTitle: "Lord Commander of the Nights' Watch",
    employeePic: "images/dave.jpg"
  },
  {
    name: "Joshua Philips",
    employeeBlurb: "Josh has been <span>CRUISING</span> with us for 3 years now. He is known for designing the world famous ships 'The Unsinkable' and 'The Unsinkable II'.",
    employeeTitle: "VP of Cruise Ship Design",
    employeePic: "images/josh.jpg"
  },
  {
    name: "Alex Craven",
    employeeBlurb: "Alex has been over<span>SEA</span>ing on-board entertainment for 3 years. He really likes beer. Like <span>A YACHT</span>.",
    employeeTitle: "VP of On-Board Entertainment",
    employeePic: "images/alex.jpg"
  }
];

for (var i = 0; i < employeeArray.length; i++) {
    content.innerHTML += `<div class="employee">
      <div class="employeePic">
        <img src="${employeeArray[i].employeePic}">
      </div>
      <p class="employeeName">${employeeArray[i].name}</p>
      <div class="EmployeeInfo">
      <p>${employeeArray[i].employeeTitle}</p>
        <p>${employeeArray[i].employeeBlurb}</p>
      </div>
     </div>`;
}

