let name = document.getElementById('a');
let roll = document.getElementById('b');
let contact = document.getElementById('c');
let email  = document.getElementById('d');
let gpa = document.getElementById('e');
let skill = document.getElementById('f');
let arr = [name, roll, contact, email, gpa, skill];





let click = document.getElementById('button');
click.onclick = function(){
	for(i = 0; i < 6; i++)
	{
		if(arr[i].value == '')
		{
			alert("Please fill all fields");
			break;
		}
	}
	if(arr[4].value < 0 || arr[4].value > 4)
	{
		alert("Invalid CGPA")
	}
	

}