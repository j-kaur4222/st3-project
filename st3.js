function stringlength(inputtxt, minlength)
{ 
var field = inputtxt.value; 
var mnlen = minlength;


if(field.length<mnlen)
{ 
alert("Please input the userid between " +mnlen+ "characters");
return false;
}
else
{ 
alert('Your userid have accepted.');
return true;
}
}
