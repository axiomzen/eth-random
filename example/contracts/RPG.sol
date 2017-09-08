pragma solidity ^0.4.11;

import "eth-random/contracts/Random.sol";

contract RPG {
  enum GameState {
      Started,
      Victory,
      Defeat
  }

  Random random;
  GameState state;
  int16 public monsterHP;
  int16 public heroHP;

    // Creates a new auction house with the given parameters.
  function RPG(address randomAddress) {
    state = GameState.Started;
    random = Random(randomAddress);
    init();
  }

  function init() private {
    monsterHP = 1000;
    heroHP = 100;
  }

  // hero attack first, gets hit second, return true if game is over
  function attack() {
    require(state == GameState.Started);
    // ok to downside int since it safely fits 2^15
    monsterHP = monsterHP - int16(random.random(500) + 1);
    if (monsterHP <= 0) {
      state = GameState.Victory;
      return;
    }
    //
    heroHP = heroHP - int16(random.random(50) + 1);
    if (heroHP <= 0) {
      state = GameState.Defeat;
      return;
    }
  }

  function reset() {
    require(state == GameState.Victory || state == GameState.Defeat);
    init();
  }

  function getState() constant returns(string) {
    if(state == GameState.Started) return "started";
    if(state == GameState.Victory) return "won";
    if(state == GameState.Defeat) return "lost";
  }
}
