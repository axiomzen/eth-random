require('babel-polyfill');

// Took this from https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/test/helpers/expectThrow.js
// Doesn't seem to work any more :(
// Changing to use the invalid opcode error instead works
const expectThrow = async promise => {
    try {
        await promise;
    } catch (err) {
        const outOfGas = err.message.includes('out of gas');
        const invalidOpcode = err.message.includes('invalid opcode');
        assert(outOfGas || invalidOpcode, 'Expected throw, got `' + err + '` instead');
        return;
    }
    assert.fail('Expected throw not received');
};

module.exports = expectThrow;
