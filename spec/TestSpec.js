
beforeEach(function () {
  setFixtures($('<input id="sandbox" type="text" />').val('3'));
});

it("should pass if value matches expectation", function () {
  expect($('#sandbox')).toHaveValue('3');
});