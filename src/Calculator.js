calculator = {

	"+" : {eval: function(x,y){return (x+y);}},
	"-" : {eval: function(x,y){return (x-y);}},
	"*" : {eval: function(x,y){return (x*y);}},
	"/" : {eval: function(x,y){return (x/y);}},	
};

function getUserInput() {
	var operand1 = parseInt(document.getElementById("operand1").value);
	var operand2 = parseInt(document.getElementById("operand2").value);
	var operator = document.getElementById("operator").value;
	userinput = {"operand1": operand1, "operand2": operand2, "operator": operator};
	return userinput;
}

function calculate(userinput) {
	operator = userinput["operator"];
	result = calculator[operator].eval(userinput["operand1"], userinput["operand2"]);
    return result;
}