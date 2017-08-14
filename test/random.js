var Random = artifacts.require("./Random.sol");

contract('Random', function(accounts) {
  const numberOfChecks = 100;

  it("should output between the lower and upper bound", async function() {
    console.log("    Verifying though brute force: may take a while...");
    console.log("    Running: " + numberOfChecks + " checks");

    const generator = await Random.deployed();

    await generator.TestRandom().watch(function(error, result) {
      assert(!error, "Error occured generating random.")
      const rand = result.args["random"].toNumber()
      assert(rand <= 100000, "Random number was over maximum.");
    });

    for (i = 0; i < numberOfChecks; i++) {
      await generator.random(100000)
    }
  });
});
