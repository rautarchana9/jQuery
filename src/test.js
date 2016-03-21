var value = 'some value';
var differentValue = 'different value';

beforeEach(function () {
  setFixtures($('<input id="sandbox" type="text" />').val(value));
});

it("should pass if value matches expectation", function () {
  expect($('#sandbox')).toHaveValue(value);
  expect($('#sandbox').get(0)).toHaveValue(value);
});