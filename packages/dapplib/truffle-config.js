require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn purpose half clinic obscure siege'; 
let testAccounts = [
"0x8bc9a7d9633a39bfc24b8ce8fe971eb01df6b0cc0ccbef7a5765081b8ca10d44",
"0xe4b7ed2130fad022ab551839d81e1c9f9f40a2932334af04eee66298184fac32",
"0x867f5fa47af4983f3e59e867bf64bc41007fa3abe9b38bb6a7f1555730e45caf",
"0xf9e6f5dff9e95be2f93953ebbd0051df9e19cf31e7f8d265145f106797530675",
"0x5f09045319e7631684d69e7644e63004fddbcf465f96f078eaec3729440c876a",
"0xe97c1532bbbe9ed416243d977fc04ac6820f9d978331c4c90877eb9e6780f686",
"0x1742dde81b6c4e45738f2926dde55693e1819af9deceb00374badbf053d848c7",
"0x7b4f4b4ba3d22bdedd9f57b666b60857405c2ee545b1cbd5b55152a221a0758e",
"0x73f561725e41306d75029be4b2b5d367a8d40af64b4a08d95180e7bad09fe5ae",
"0x30406142cee7868f5ab60137d5b6ce92410343b6ddd5701f8f80216e33823ee8"
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

