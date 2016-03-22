var Operand = function(operandId) {
    this.value = document.getElementById(operandId).value;
    this.id = operandId;
};
Operand.prototype.isvalid = function() {
    return (!document.getElementById(this.id).validity.patternMismatch);
};

var Operator = function(operatorId) {
    this.value = document.getElementById(operatorId).value;
    this.id = operatorId;
};

Operator.prototype.isvalid = function() {
    return (!document.getElementById(this.id).validity.patternMismatch);
};

function calculate(operand1, operand2, operator) {
	result = eval(operand1 + operator + operand2);
    return result;
}

function getResult(){
	operand1 = new Operand("operand1");
	operand2 = new Operand("operand2");
	operator = new Operator("operator");
	if (operand1.isvalid() && operand2.isvalid() && operator.isvalid()){
	    return calculate(operand1.value, operand2.value, operator.value);
	}else {
	    return "Invalid";
	}	
}

function displayResult(){
	document.getElementById("result").value = getResult();
}