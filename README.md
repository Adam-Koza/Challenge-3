# CoinCare

CoinCare is a decentralized donation app that utilizes cryptoeconomics to achieve a healthy ecosystem.
  - Donate food, clothes, money and receive CoinCare tokens as reward
  - Accumulate CoinCare tokens and spend them in our store for concerts, events, stuff
  - Magic

### Installation

CoinCare requires these programs to run:
  - [Node.js](https://nodejs.org/) v4+
  - [Truffle](https://github.com/trufflesuite/truffle)
  - [Ganache-CLI](https://github.com/trufflesuite/ganache-cli)
  - [Metamask](https://metamask.io/)

Install the dependencies and devDependencies and start the server.

```sh
$ cd coin-care/client
$ npm install
```

Launch Ganache-cli on a new terminal window...

```sh
$ cd coin-care
$ ganache-cli -m "birth..."
```

Log in to Metamask and select Network Localhost on port 8545

Compile, test and migrate the contracts to the local blockchain
```sh
$ cd coin-care
$ truffle compile
$ truffle test
$ truffle migrate
```

Open a new terminal and start the server. Make sure you are in the client folder...
```sh
$ cd coin-care/client
$ npm run start
```

Finally, point your browser to localhost:3000 and connect to Metamask!

License
----

MIT


**Free Software, Hell Yeah!**
