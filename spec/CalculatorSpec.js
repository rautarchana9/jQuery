function setUpHTMLFixture() {
     setFixtures('<form id="calculator">'
     	        +'  Operand1'
                +'  <input type="text" name="operand1" id="operand1" pattern="[0-9]+([.,][0-9]+)?" step="0.01" onchange="displayResult();"required/>'
                +'  Operand2'
                +'  <input type="text" name="operand2"id="operand2" pattern="[0-9]+([.,][0-9]+)?" step="0.01"  onchange="displayResult();"required/>'
                +'  Operator:'
                +'  <input type="text" name="operator" id="operator" pattern="[+-^*/]"  onchange="displayResult();"required/>'
                +'  Result:'
                +'  <input type="text" name="result" id="result" readonly/>'
                +'</form>');
       
}
describe("Operand", function(){
    beforeEach(function() {
    setUpHTMLFixture();
    document.getElementById("operand1").value = "3";
    operand1 = new Operand("operand1")
    });
    it("returns operand object", function(){
        expect(operand1.value).toBe("3");
    });
    it("should should return true if value is a number", function() {
        expect(operand1.isvalid("operand1")).toBeTruthy();
    });
    it("should should return false if value is not a number", function() {
        document.getElementById("operand1").value = "*";
        expect(operand1.isvalid("operand1")).toBeFalsy();
    });
});

describe("Operator", function(){
    beforeEach(function() {
    setUpHTMLFixture();
    document.getElementById("operator").value = "*";
    operator = new Operator("operator")
    });
    it("returns operator object", function(){
        expect(operator.value).toBe("*");
    })
    it("should should return true if value is a number", function() {
        expect(operator.isvalid("operand1")).toBeTruthy();
    });
    it("should should return false if value is not a number", function() {
        document.getElementById("operand1").value = "$";
        expect(operator.isvalid("operand1")).toBeFalsy();
    });
});


describe("calculate", function(){
	it("returns the result of addition", function(){
       expect(calculate( '3', '6', '+')).toEqual(9);
	});
    it("returns the result of subtraction", function(){
       expect(calculate('3', '6', '-')).toEqual(-3);
	});
	it("returns the result of multiplication", function(){
       expect(calculate( '3', '6', '*')).toEqual(18);
	});
	it("returns the result of division", function(){
       expect(calculate('3', '6', '/')).toEqual(0.5);
	});
});

describe("displayResult", function(){
	beforeEach(function() {
    setUpHTMLFixture();
    document.getElementById("operand1").value = "3";
    document.getElementById("operand2").value = "6";
    
    });
	it("returns correct result when operands and operator are valid", function(){
		document.getElementById("operator").value = "*";
		displayResult();
        expect(document.getElementById("result").value).toBe("18");
	});
	
    it("returns Invalid when operand is not valid", function() {
        document.getElementById("operand1").value = "$";
        displayResult();
        expect(document.getElementById("result").value).toBe("Invalid");
    });
    it("returns Invalid when operand is not valid", function() {
        document.getElementById("operand2").value = "$";
        displayResult();
        expect(document.getElementById("result").value).toBe("Invalid");
    });
    it("returns Invalid when operand is not valid", function() {
        document.getElementById("operator").value = "$";
        displayResult();
        expect(document.getElementById("result").value).toBe("Invalid");
    });
});