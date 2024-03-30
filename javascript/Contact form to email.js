function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "justsend10@gmail.com",
    Password : "98E337EA4C2D9DE16668CA2C982F251ABF57",
    To : 'owinocliffe10@gmail.com',
    From : "justsend10@gmail.com",
    Subject : "Work Enquiry",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Successfull", "Information sent");
  	}
  	else{
  		swal("Error", "Not Sent");
  	}
  }
);
}