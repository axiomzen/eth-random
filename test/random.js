var Random = artifacts.require("./RandomWrapper.sol");

async function sleep(time) {
  await new Promise(function(resolve, reject) {
    setTimeout(resolve, time);
  });
}

contract("Random", async function(accounts) {
  const numberOfChecks = 10000;

  it("should output between the lower and upper bound", async function() {
    this.timeout(1e8);
    const max = 1000;
    console.log("    Verifying though brute force: may take a while...");
    console.log("    Running: " + numberOfChecks + " checks");

    const generator = await Random.deployed();

    const results = [];

    for (let i = 1; i < numberOfChecks; i++) {
      await generator.produceRandom(max);
      let random = await generator.output();
      assert(random.toNumber() >= 0, "Random number was under minimum.");
      assert(random.toNumber() <= max, "Random number was over maximum.");
      results.push(random.toNumber() + 1);
      console.log(random.toNumber() + 1);
    }

    // after the loop is done wait a bit for events to finish recording
    await sleep(500);

    let sum = 0;
    results.forEach(x => (sum += x));
    const avg = sum / results.length;

    console.log(
      "    random avg:",
      sum / results.length,
      "out of",
      max,
      "upper bound"
    );
    // make sure the average is within a certain margin
    assert(avg > max * 0.4, "avg of sample results must be within 10% of half");
    assert(avg < max * 0.6, "avg of sample results must be within 10% of half");

    return;
  });
});
