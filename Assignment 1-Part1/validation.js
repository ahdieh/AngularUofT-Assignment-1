function validateForm(){
	
	var validate = true;

	// validate first name
	if (document.forms["form"]["firstname"].value == ""){
		alert("First Name is a mandatory feild");
		validate = false;
	}

	// validate last name
	if (document.forms["form"]["lastname"].value == ""){
		alert("Last Name is a mandatory feild");
		validate = false;
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
		alert("Gender type select is a mandatory radio button");
		validate = false;
	}
	
	// validate employment situation
	var employment = document.forms["form"]["employment"];
	var employmentValidate = false;
	for (var i=0; i<employment.length; i++) {
		if (employment[i].checked == true) {
			employmentValidate = true;
		}
	}
	
	if (employmentValidate == false){
		alert("Employment is a mandatory checkbox button");
		validate = false;
	}
	
	// validate car brand
	var select = document.forms["form"]["car"];
	if((select.options[select.selectedIndex].value) == 0){
		alert("Please select a car type");
		validate = false;
	}
	return validate;
}