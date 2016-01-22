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
  it("will return the number if not divisible by 3, 5, or 3 & 5", function() {
    expect(divisibleBy(23)).to.equal(23);
  });
});

describe ("looptyLoo", function() {
  it("will loop through numbers til the limit is reached and loop stops", function() {
    expect(looptyLoo(15)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong"]);
  });
});
