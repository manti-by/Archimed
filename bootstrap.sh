#!/bin/sh
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y npm
cd /vagrant/application
npm install