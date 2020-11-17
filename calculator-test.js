
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(100000,3.92,30)).toEqual("472.81");
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(300000,5,30)).toEqual("1610.46");
});

/// etc
