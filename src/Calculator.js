
function getUserInput() {
	var operand1 = parseInt(document.getElementById("operand1").value);
	var operand2 = parseInt(document.getElementById("operand2").value);
	var operator = document.getElementById("operator").value;
	userinput = {"operand1": operand1, "operand2": operand2, "operator": operator};
	return userinput;
}

function calculate(userinput) {
	result = eval(userinput["operand1"]+ " " + userinput["operator"] + " " + userinput["operand2"]);
    return result;
}

function getResult(){
	var userinput = getUserInput();
	if (!document.getElementById("operand1").validity.patternMismatch 
	    && !document.getElementById("operator").validity.patternMismatch
		&& !document.getElementById("operand2").validity.patternMismatch){
	    return calculate(userinput);
	}else {
	    return "Invalid";
	}	
}

function displayResult(){
	document.getElementById("result").value = getResult();
}