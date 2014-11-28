#!/usr/bin/env bash

# Get root up in here
sudo su

# Add MongoDB to apt
apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/10gen.list

# Update and begin installing some utility tools
apt-get -y update
apt-get -y dist-upgrade
apt-get install -y python-software-properties
apt-get install -y vim git subversion curl
apt-get install -y memcached build-essential

# Install latest stable version of MongoDB
apt-get install -y mongodb-10gen

# Add nodejs repo
curl -sL https://deb.nodesource.com/setup | sudo bash -

# Install nodejs and npm 
apt-get install -y nodejs 

# Install the Sails application framework
npm -g install sails

# Run a little cleanup
apt-get -y autoremove
