require("babel-polyfill");

const expectThrow = require("./helpers/expectThrow");

const RPG = artifacts.require("RPG");

describe("Auctioneer", function() {
  let rpg; // Contracts
  let heroHP, monsterHP;

  // Default setup
  const setup = async function() {
    // Random = await Random.deployed();
    rpg = await RPG.deployed();
  };

  contract("Play Game", function(accounts) {
    before(async function() {
      await setup();
    });

    it("verify setup", async function() {
      heroHP = await rpg.heroHP();
      monsterHP = await rpg.monsterHP();
      assert.equal(heroHP.toNumber(), 100);
      assert.equal(monsterHP.toNumber(), 1000);
      await expectThrow(rpg.reset());
    });

    it("attack", async function() {
      await rpg.attack();
      heroHP = await rpg.heroHP();
      monsterHP = await rpg.monsterHP();
      assert(heroHP.toNumber() < 100);
      assert(monsterHP.toNumber() < 1000);
    });

    it("finish game", async function() {
      let gameDone = false;
      let i = 0;
      // cant take more than 100 attacks
      while (!gameDone) {
        await rpg.attack();
        const state = await rpg.getState();
        gameDone = state !== "started";
        console.log(state);
      }
    });
  });
});
