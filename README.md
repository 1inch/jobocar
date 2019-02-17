## Jobocar

[![Build Status](https://travis-ci.org/CryptoManiacsZone/jobocar.svg?branch=master)](https://travis-ci.org/CryptoManiacsZone/jobocar)
[![Coverage Status](https://coveralls.io/repos/github/CryptoManiacsZone/jobocar/badge.svg?branch=master)](https://coveralls.io/github/CryptoManiacsZone/jobocar?branch=master)

## Inspiration

## What it does

## Solving problems

- Sharing car availability
- 90% of staying cars
- Earn extra money  


## How we built it

Angular for the frontend UI ov renter, car owner and the vehicle device.
Smart Contracts written in Solidity and deployed on Ethereum blockchain for the backend implementation. 
Python for updating E-Paper display.
Raspberry Pi with LTE modem, GPS tracker, RFID reader, 4k camera and a 15" touchscreen for vehicle hardware kit.


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

``
apt update 
apt install git python-pip python-imaging spidev imagemagick nodejs
npm install -g yarn
pip install RPi.GPIO spidev Pillow
cd /opt
git clone https://github.com/CryptoManiacsZone/jobocar.git
cd jobocar/pi/nodejs
yarn
yarn start
``

## Accomplishments that we're proud of


## What we learned

## What's next for Jobocar


## Repo


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
