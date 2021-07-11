function getActive(){
	document.body.style.textAlign="center";
	document.body.style.backgroundColor="aqua";
	var x = document.activeElement.tagName;
	//alert(x);
	document.getElementById("obj1").innerHTML = x;
}


function array_demo(){
	
	const cars = ["BMW", "AUDI", "MERC","HONDA","TOYOTA"];       
	var l = cars.length;
	document.getElementById("msg1").innerHTML = cars[2];
	document.getElementById("msg2").innerHTML = l;
	
	var t = " ";
	
	var i = 1;
	
	while(i<6){
		t = t + "Hello World";
		i++;
	}
	document.getElementById("hello").innerHTML = t;
	
}

function getName(){
	document.body.style.textAlign="center";
	document.body.style.backgroundColor="aqua";
var person = {      
   firstName: "Johnathan is my name",
   lastName: "Doe",
   age:50,
   hairColor:"grey"
  };
   
var car ={
	type: "SUV",
	brand: "Honda",
	model: "2021",
	color: "Red"

};	
	var fName = person.firstName + person.lastName;
	var length = fName.length;     // this will give us the length of the string
	var pos = fName.indexOf("name"); //this will give us the starting index of the given string
	var res = fName.slice(0,15);    // first value is for the starting index and second value is the length of substring.

  document.getElementById("obj1").innerHTML = "Name of the person is " +person.firstName + " " + person.lastName;
  document.getElementById("obj2").innerHTML = res;
}  

function change(){
}  

function change(){
	
		var a = document.getElementById("txt1").value;
		if(a<0){
			document.getElementById("msg1").innerHTML="You entered a negative number"
		}
		else if(a>0 && a<10){
				if(a==4 || a==9) {
					document.getElementById("msg1").innerHTML="You entered a perfect square number"
				}
				else{
					document.getElementById("msg1").innerHTML="You entered positive number less than 10"
				}	
		}
		else if(a>10){
			document.getElementById("msg1").innerHTML="You entered positive number more than 10"
		}
		else if(a==0){
			document.getElementById("msg1").innerHTML="You entered 0"
		}
		
}

function verify(){
	var a = document.getElementById("txt1").value;
	var b = document.getElementById("pwd1").value;
	if(a==""){
		document.getElementById("uname").innerHTML = "User name can not be blank";
		return false;
	}
	else{
		localStorage.setItem("uid",a);
	}
	var re = /^[A-Za-z]+$/;
	var an = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
	if(!re.test(a)){
		document.getElementById("uname").innerHTML = "Only alphabets are allowed";
		document.getElementById("txt1").style.backgroundColor= "red";
		document.getElementById("pwd1").value="";
		document.getElementById("pwd2").value="";
		return false;
	}
	if(!an.test(b)){
		document.getElementById("pwderr").innerHTML = "Only alphanumerics are allowed";
		document.getElementById("pwd1").value="";
		document.getElementById("pwd2").value="";
		return false;
	}
	
	
}

function show(){
	var n = document.getElementById("drpdwn");   
	var e = n.options[n.selectedIndex].text;
	//alert(e);
	if(e!=="Busan")
	{
		document.getElementById("coradd").style.display="block";	
	}
	else{
		document.getElementById("coradd").style.display="none";
	}
}

function display(){
	var b = localStorage.getItem("uid");
	document.getElementById("name").innerHTML = b;
}

















