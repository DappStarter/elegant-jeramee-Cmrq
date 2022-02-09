require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth praise purity gesture hen flock gas'; 
let testAccounts = [
"0x2d49743fd34da06320191434303263e639cf3a3a7c3a7efa2c167adf46eb961f",
"0x235a608ece05e29e3dc2b1d8e4b43ab3ce9ad5800645146872603cabf6d0303e",
"0xfd917f46625bdee8b5b9486c2741b6e6a74700ac5f1d925fd0db41aabffe0340",
"0x0bbf015222e066be887d1fa1afd519344622ff0d11d4052cd28955f746f053bd",
"0x9bae123f6433f2c5c57673b66474bb4d2c171f77e22fa3ba7a4f97681725c5ab",
"0x1dd74f7a6f569044d78c725eb7269a1be70d8f260d79d78f52de55db67c82934",
"0xc8866d23445470a3fe861a39a147d694ac5e26ee003878ed8eede33e74e03c48",
"0x7310e37288dbc21d6d9c01eb969f1e063ea97192fcef096b60a22173849bf5e3",
"0x14b59c9bffc489dac8e8b8ceda783eddf89bfa87e7a1c53473fb78a3561f4ef6",
"0x06b428b84be73181dd615310ed138615d3030abe2116b6f8b00df294f1e3db17"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

