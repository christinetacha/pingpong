describe ("divisibleByThree", function () {
  it("will determine if the number divisible by three", function() {
    expect(divisibleByThree(9)).to.equal(true);
  });
  it("will determine if the number is divisible by five", function() {
    expect(divisibleByFive(15)).to.equal(true);
  });
});
