var Operand = function(operandId) {
    this.value = document.getElementById(operandId).value;
};
Operand.prototype.isvalid = function(operandId) {
    return (!document.getElementById(operandId).validity.patternMismatch);
};

var Operator = function(operatorId) {
    this.value = document.getElementById(operatorId).value;
};

Operator.prototype.isvalid = function(operatorId) {
    return (!document.getElementById(operatorId).validity.patternMismatch);
};

function calculate(operand1, operand2, operator) {
	result = eval(operand1 + operator + operand2);
    return result;
}

function getResult(){
	operand1 = new Operand("operand1");
	operand2 = new Operand("operand2");
	operator = new Operator("operator");
	if (!document.getElementById("operand1").validity.patternMismatch 
	    && !document.getElementById("operator").validity.patternMismatch
		&& !document.getElementById("operand2").validity.patternMismatch){
	    return calculate(operand1.value, operand2.value, operator.value);
	}else {
	    return "Invalid";
	}	
}

function displayResult(){
	document.getElementById("result").value = getResult();
}