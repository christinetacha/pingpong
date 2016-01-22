describe ("divisibleBy", function () {
  it("will determine if the number divisible by three and should ping", function() {
    expect(divisibleBy(9)).to.equal("ping");
  });
  it("will determine if the number is divisible by five and should pong", function() {
    expect(divisibleBy(25)).to.equal("pong");
  });
  it("will determine if the number is divisible by three and five and should pingpong", function() {
    expect(divisibleBy(30)).to.equal("pingpong");
  });
});
