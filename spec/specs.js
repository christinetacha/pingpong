describe ("divisibleBy", function () {
  it("will determine if the number divisible by three", function() {
    expect(divisibleBy(9)).to.equal(true);
  });
  it("will determine if the number is divisible by five", function() {
    expect(divisibleBy(15)).to.equal(true);
  });
  it("will determine if the number is divisible by three and five", function() {
    expect(divisibleBy(30)).to.equal(true);
  });
});
