let myFormEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");

let myform = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}

function validateFormData(myform) {
    let {
        name,
        email
    } = myform;
    if (name === "") {
        nameErrMsg.textContent = "required*";
    }
    if (email === "") {
        emailErrMsg.textContent = "required*";
    }
}

function submitFormData(formData) {

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 75fb5ecf29706d10605b66c24886f31c40f8ff9730d793235a01d3d54097a346"
        },
        body: JSON.stringify(formData)
    }
    let url = "https://gorest.co.in/public-api/users";


    fetch(url, options)
        .then(function(event) {
            return event.json();
        })
        .then(function(jsonData) {
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrMsg.textContent = "Email Already Exists";
                }
            }
            console.log(jsonData);
        });


}

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "required*";
    } else {
        nameErrMsg.textContent = "";
    }
    myform.name = event.target.value;
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "required*";
    } else {
        emailErrMsg.textContent = "";
    }
    myform.email = event.target.value;
});

let workingStatusEl = document.getElementById("status");
workingStatusEl.addEventListener("change", function(event) {});

let genderMaleEl = document.getElementById("genderMale");
genderMaleEl.addEventListener("change", function(event) {
    myform.gender = "Male";
});

let genderFemaleEL = document.getElementById("genderFemale");
genderFemaleEL.addEventListener("change", function(event) {
    myform.gender = "female";
});

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(myform);
    submitFormData(myform);

});