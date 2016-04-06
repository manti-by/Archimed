#!/bin/sh
curl -sL https://deb.nodesource.com/setup_0.12 | sudo -E bash -
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y npm
cd /vagrant/application
npm install