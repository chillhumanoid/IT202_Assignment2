function emailReq() {
    if(document.getElementById('emailConf').checked){
		document.getElementById("emailReq").innerHTML = "REQUIRED";
	}else{
		document.getElementById("emailReq").innerHTML ="";
	}
}

var cust1 = {name: "Jonathan Thorne", id: "12345678"};
var cust2 = {name: "Frodo Baggins", id: "012345678"};
var cust3 = {name: "Gandalf", id: "76487638"};
var cust4 = {name: "Shawn Spencer", id: "00000000"};
var cust5 = {name: "Burton Guster", id: "98284729"};
var customers = [cust1,cust2,cust3,cust4,cust5];

function validateForm(){
	var eStr = "INVALID";
	var allNumbers = /^[0-9]+$/; //i found this line online. For checking to make sure ID only contains numbers. 
	var nameError = false;
	var idError = false;
	var emailError = false;
	var name = document.getElementById("custName").value;
	var nameReq = document.getElementById("nameReq");
	var id = document.getElementById("custID").value;
	var idReq = document.getElementById("idReq");
	var email = document.getElementById("custEmail").value;
	var emailConf = document.getElementById("emailConf");
	var emailReq = document.getElementById("emailReq");

	if(name == ""){
		nameError = true;
	}else{
		nameError = false;
	}
	
	if(id == "" || id.length != 8){
		idError = true;
	}else if(id.length == 8 && !allNumbers.test(id)){ // if the id is the right length, check to make sure it contains all numbers.
		idError = true;
		alert("ID is Numbers Only"); //wouldn't want someone wondering why it's not working.
	}else{
		idError = false;
	}
	if(emailConf.checked){
		if(email == ""){
			emailError = true;
		}
		if((email.indexOf("@") == -1 || email.indexOf(".") == -1) || (email.indexOf("@") == -1 && email.indexOf(".",email.indexOf("@")) == -1)){ //checks to make sure email isn't blank and that is has @ symbol, not at the beginning or end. broken down for ease of reading
			emailError = true;
		}
		if(email.indexOf("@") == 0 || email.indexOf(".") == 0 || email.indexOf("@",(email.indexOf("@")+1))!=-1 || email.indexOf("@") == email.length - 1 || email.lastIndexOf(".") == email.length - 1){
			emailError = true;
		}
	}
	
	if(nameError){
		nameReq.innerHTML = eStr.fontcolor("red");
	}
	if(!nameError){
		nameReq.innerHTML = "REQUIRED";
	}
	if(idError){
		idReq.innerHTML = eStr.fontcolor("red");
	}
	if(!idError){
		idReq.innerHTML = "REQUIRED";
	}
	if(emailError){
		emailReq.innerHTML = eStr.fontcolor("red");
	}
	if(!emailError){
		if(emailConf.checked){
			emailReq.innerHTML = "REQUIRED";
		}else{
			emailReq.innerHTML = "";
		}
	}
	
	if(!nameError && !idError && !emailError){
		verifyForm();
	}
}
function verifyForm(){
	eStr = "INVALID";
	var name = document.getElementById("custName").value;
	var nameFound = false;
	var nameFoundAt = 0;
	var i = 0;
	var id = document.getElementById("custID").value;
	for(i = 0; i < customers.length; i++){
		if(name == customers[i].name){
			nameFound = true;
			nameFoundAt = i;
		}else{
		}
	}
	if(!nameFound){
		document.getElementById("nameReq").innerHTML = eStr.fontcolor("red");
		alert("Wrong name");
	}else if(nameFound){
		if(customers[nameFoundAt].id == id){
			alert("Welcome " + name + "!");
		}else{
			document.getElementById("idReq").innerHTML = eStr.fontcolor("red");
			if(name == "Frodo Baggins"){
				alert("One does not simply walk into Mordor");
			}else if(name == "Gandalf"){
				alert("YOU SHALL NOT PASS");
			}else if(name == "Burton Guster"){
				alert("Come on son");
			}else if(name == "Shawn Spencer"){
				alert("I've heard it both ways");
			}
			alert("Wrong ID");
		}
	}
}