## Inspiration

We came up to this solution from another idea, related to token distribution via QR-codes with which we went to the hackathon. But as you may notice the first idea has nothing with the main topic of this Identity Blockchain Hackathon. So we transformed our original idea to the VIC.cards (Very Important Contact Cards).

## What it does

VIC.cards allows famous people to prioritize their communications by offering different sets of business cards for distinct audiences. VIC card receivers are able to communicate with VIC card issuer, by providing a digital Proof-of-Important-Hands. The issuer is capable to revoke compromised VIC cards at any time via smart contract in a decentral and a secure way.

## How we built it

The backend part of this Dapp is built with Ethereum smart contract. The source code is hosted at GitHub and is automatically published to Github Pages by continuous delivery with Circle-CI triggered by commits in `master` branch.

Important libraries we used:
- web3js: communication with Ethereum smart contract methods and fetching event
- ngx-vcard: vcard generation
- qrcode: VIC QR codes visualization
- jspdf, html2canvas: frontend-based PDF generation

## Challenges we ran into

- Own smart JS-based implementation of MerkleTree
- PDF file and QR code generation in an Angular application

## Accomplishments that we're proud of

We are proud of the result we reached in 24 hours hacking almost without coffee and sleep. This was our first very productive experience to develop PoC application in a pair-programming mode.

## What we learned

- How to generate PDF files and QR code in Angular app
- Prefer Ethereum smart contract events over storing data in the state for specific use cases

## What's next for VIC.card

Handover for an MVP to the T-Labs.

## Repo

https://github.com/CryptoManiacsZone/VIC.cards

## Slides

<a href="./RAW/VIC.pdf">VIC.pdf</a>

# Install
``yarn``

# Build
``yarn run build``

# Run dev
``yarn run start``

## Used dependencies

* VCard: ngx-vcard
* QR Code: https://github.com/soldair/node-qrcode

###### Created by Crypto Maniacs 2019
