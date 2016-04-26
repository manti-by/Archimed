#!/bin/sh
echo ""
echo "*** Updating system packages ***"
sudo apt-get update
sudo apt-get upgrade -y
echo ""
echo "*** Remove default system NodeJS, NPM and MongoDB ***"
sudo apt-get remove nodejs npm mongodb-server mongodb-clients
echo ""
echo "*** Installing NodeJS 0.12 and NPM ***"
curl -sL https://deb.nodesource.com/setup_0.12 | sudo -E bash -
sudo apt-get install -y nodejs build-essential
echo ""
echo "*** Installing application requirements ***"
cd /vagrant/application
npm install