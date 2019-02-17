## Jobocar

[![Build Status](https://travis-ci.org/CryptoManiacsZone/jobocar.svg?branch=master)](https://travis-ci.org/CryptoManiacsZone/jobocar)
[![Coverage Status](https://coveralls.io/repos/github/CryptoManiacsZone/jobocar/badge.svg?branch=master)](https://coveralls.io/github/CryptoManiacsZone/jobocar?branch=master)

Try it out: https://jobocar.com

## Inspiration

To have decentralized peer to peer car sharing with any crypto currency payments based on Ethereum Network.    

## What it does

Offers to rent a car from someone who offers his own for money like a normal car sharing service. Also offers to share 
own private car for any crypto currency based on Ethereum Network. 


## Solving problems

- Sharing car availability (95% of staying cars)
- Earn extra money  
- First step to self driving sharing cars


## How we built it

Angular for the frontend UI of renter, car owner and the vehicle device.
Smart Contracts written in Solidity and deployed on Ethereum blockchain for the backend implementation. 
Python for updating E-Paper display.
Raspberry Pi with LTE modem, GPS tracker, RFID reader, 4k camera and a 15" touchscreen for vehicle hardware kit.
Continues deployment with Circle CI and Github Pages.


## Challenges we ran into

- Integrate custom styled Google Maps and render radius driving areas.
- Building the hardware kit with Raspberry PI, LTE modem, GPS Tracker, RFID reader, 4k camera and 15" touchscreen.
- Setup E-Paper display and deploying automatically generated QR codes.
- Setup internet connectivity trough the LTE modem and a SIM Card.
- Building a lot of UI components.
- Integrating uPort.me in to the dApp.

## Raspberry PI Code

Raspberry PI code can be found at ``./pi`` directory.

### How to run the QR generator on the Raspberry PI

```
apt update 

apt install git python-pip python-imaging spidev imagemagick nodejs

npm install -g yarn

pip install RPi.GPIO spidev Pillow

cd /opt

git clone https://github.com/CryptoManiacsZone/jobocar.git

cd jobocar/pi/nodejs

yarn

yarn start
```

## Accomplishments that we're proud of

- We build our first hardware prototype on a hackathon
- We build a lot of UI component to deliver better understanding of our idea
- We solved the deployment problem of a picture on an E-Paper display
- Invent new crypto graphic scheme to create secure expirable QR codes
- Sleeping only 5 hours over more then 40 hours of staying awake 
- Integrated token swam with kyber.network

## What we learned

- How to working with Raspberry Pi, LTE modem and E-Paper display
- How to work with Google Maps
- How to integrate uPort.me

## What's next for Jobocar

We are open for offerings.

## Repo

https://github.com/CryptoManiacsZone/jobocar

## Slides



# Install
``yarn``

# Build
``yarn run build``

# Run dev
``yarn run start``

## Helper links

https://www.flaticon.com/free-icon/automobile_296194#term=car&page=1&position=52
http://www.birdtheme.org/useful/v3tool.html

E-Paper Display setup
https://maker-tutorials.com/waveshare-three-color-e-paper-display-am-raspberry-pi-3-anschliessen-eink-driver-hat/

###### Created by Crypto Maniacs 2019
