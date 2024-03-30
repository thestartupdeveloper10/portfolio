function emailSend(){

	var fullName = document.getElementById('fullname').value;
	var bio = document.getElementById('bio').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + fullName +
	"<br/> bio " + bio +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "thestartupdeveloper0@gmail.com",
    Password : "BD2DF758E5897D0670882B430C39F1C714E4",
    To : 'owinocliffe10@gmail.com',
    From : "thestartupdeveloper0@gmail.com",
    Subject : "Work Enquiry",
    Body : messageBody
}).then(
//   message => {
//   	if(message=='OK'){
//   		swal("Successfull", "Information sent");
//   	}
//   	else{
//   		swal("Error", "Not Sent");
//   	}
//   }
message => alert(message)
);
}