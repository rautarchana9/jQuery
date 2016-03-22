function setUpHTMLFixture() {
     setFixtures('<form id="calculator">'
     	        +'  Operand1'
                +'  <input type="text" name="operand1" id="operand1" value="3" required/>'
                +'  Operand2'
                +'  <input type="text" name="operand2"id="operand2" value="6" required/>'
                +'  Operator:'
                +'  <input type="text" name="operator" id="operator" value="+" required/>'
                +'  Result:'
                +'  <input type="text" name="result" id="result" readonly/>'
                +'</form>');
       
   }
describe("getUserInput", function(){
	beforeEach(function() {
    setUpHTMLFixture();
    });
	it("returns the dict of user inputs", function(){
       expect(getUserInput()).toEqual({"operand1": 3, "operand2": 6, "operator": '+'});
	});
});

describe("calculate", function(){
	it("returns the result of addition", function(){
       expect(calculate({"operand1": 3, "operand2": 6, "operator": '+'})).toEqual(9);
	});
    it("returns the result of subtraction", function(){
       expect(calculate({"operand1": 3, "operand2": 6, "operator": '-'})).toEqual(-3);
	});
	it("returns the result of multiplication", function(){
       expect(calculate({"operand1": 3, "operand2": 6, "operator": '*'})).toEqual(18);
	});
	it("returns the result of division", function(){
       expect(calculate({"operand1": 3, "operand2": 6, "operator": '/'})).toEqual(0.5);
	});
});