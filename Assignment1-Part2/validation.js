function validateForm() {
	var validate = true;

	// validate first name
	if (document.forms["form"]["firstname"].value == "") {
		document.getElementById("firstName").innerHTML = " First Name is a mandatory field";
		document.getElementById("firstName").style.backgroundColor = "red";
		validate = false;
	}
	else {
		document.getElementById("firstName").style.display = "none";
	}

	// validate last name
	if (document.forms["form"]["lastname"].value == "") {
		document.getElementById("lastName").innerHTML = "Last Name is a mandatory field";
		document.getElementById("lastName").style.backgroundColor = "red";
		validate = false;
	}
	else {
		document.getElementById("lastName").style.display = "none";
	}

	// validate gender type
	var i = 0;
	var radioValid = false
	var radios = document.forms["form"]["gender"];
	while (!radioValid && i < radios.length) {
		if (radios[i].checked) radioValid = true;
		i++;
	}
	if (radioValid == false) {
		document.getElementById("genderType").innerHTML = "Gender type select is a mandatory radio button";
		document.getElementById("genderType").style.backgroundColor = "red";
		validate = false;
	}
	else {
		document.getElementById("genderType").style.display = "none";
	}

	// validate employment situation
	var employment = document.querySelectorAll("[name='employment']:checked");

	if (employment.length == 0) {
		document.getElementById("employmentSituation").innerHTML = "Employment is a mandatory checkbox button";
		document.getElementById("employmentSituation").style.backgroundColor = "red";
		validate = false;
	}
	else {
		document.getElementById("employmentSituation").style.display = "none";
	}

	// validate car brand
	var selectCar = document.forms["form"]["car"];
	if ((selectCar.options[selectCar.selectedIndex].value) == 0) {
		document.getElementById("carBrand").innerHTML = "Please select a car type";
		document.getElementById("carBrand").style.backgroundColor = "red";
		validate = false;
	}
	else {
		document.getElementById("carBrand").style.display = "none";
	}

	return validate;
}

	
