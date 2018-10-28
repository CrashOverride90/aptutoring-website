function contactUS() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var comment = document.getElementById('comment').value;
	var subject = document.getElementById('contactSubject').value;
	if(name != '' && comment != "" && email.indexOf("@") !== -1 && email.length > 5) {
		$.get("contact.php?name="+name+"&email="+email+"&phone="+phone+"&message="+comment+"&subject="+subject, function(data) {
			// console.log(data);
			clearForm();
			alert("Thank you for contacting us. We will get back to you within 24 hours");
		});
		
	}
	else {
		alert("Oops! Something went wrong. Make sure all required fields are entered correctly");
	}
}

function scheduleSession() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var comment = document.getElementById('comment').value;
	var subject = document.getElementById('subject').value;
	var date = document.getElementById('datepicker').value;
	if(name != '' && comment != "" && email.indexOf("@") !== -1 && email.length > 5) {
		$.get("scheduler.php?name="+name+"&email="+email+"&phone="+phone+"&message="+comment+"&subject="+subject+"&datepicker="+date, function(data) {
			// console.log(data);
			clearScheduleForm();
			alert("Thank you for requesting a tutoring session. We will get back to you within 24 hours");
		});
		
	}
	else {
		alert("Oops! Something went wrong. Make sure all required fields are entered correctly");
	}
}

function feedbackForm() {
	var client_name = document.getElementById('client_name').value;
	var tutor_name = document.getElementById('tutor_name').value;
	var subject = document.getElementById('subject').value;
	var feedback = document.getElementById('feedback').value;
	if(client_name != '' || tutor_name != "" || feedback != "") {
		$.get("feedback.php?client_name="+client_name+"&tutor_name="+tutor_name+"&subject="+subject+"&feedback="+feedback, function(data){
			console.log(data);
			
		});
	}
	else {
		alert("Fill out all the required fields");
	}
}

function clearScheduleForm()
{
	var frm_elements = document.getElementById('schedule_form').elements;
	for (i = 0; i < frm_elements.length; i++)
	{
	    field_type = frm_elements[i].type.toLowerCase();
	    switch (field_type)
	    {
	    case "text":
	    case "password":
	    case "textarea":
	    case "email":
	    case "hidden":
	        frm_elements[i].value = "";
	        break;
	    case "radio":
	    case "checkbox":
	        if (frm_elements[i].checked)
	        {
	            frm_elements[i].checked = false;
	        }
	        break;
	    case "select-one":
	    case "select-multi":
	        frm_elements[i].selectedIndex = -1;
	        break;
	    default:
	        break;
	    }
	}
}

function clearForm()
{
	var frm_elements = document.getElementById('contact_form').elements;
	for (i = 0; i < frm_elements.length; i++)
	{
	    field_type = frm_elements[i].type.toLowerCase();
	    switch (field_type)
	    {
	    case "text":
	    case "password":
	    case "textarea":
	    case "email":
	    case "hidden":
	        frm_elements[i].value = "";
	        break;
	    case "radio":
	    case "checkbox":
	        if (frm_elements[i].checked)
	        {
	            frm_elements[i].checked = false;
	        }
	        break;
	    case "select-one":
	    case "select-multi":
	        frm_elements[i].selectedIndex = -1;
	        break;
	    default:
	        break;
	    }
	}
}