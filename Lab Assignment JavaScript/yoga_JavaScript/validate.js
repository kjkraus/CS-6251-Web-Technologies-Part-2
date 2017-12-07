function validateForm() {
	if (document.forms[0].myEmail.value == "" ) {
		var emailError = document.getElementById("error");
		emailError.innerHTML = "Please enter an e-mail address. ";
		return false;
	} //end if
		return true;
} //end function validateForm