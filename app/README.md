Archimed
==========================================================

Test React/Redux application


Setup:
----------------------------------------------------------

1. Update system packages:

        $ sudo apt-get update
        $ sudo apt-get upgrade -y

2. Remove default system NodeJS and NPM

        $ sudo apt-get remove nodejs npm

3. Install latest NodeJS server, NPM and MongoDB

        $ curl -sL https://deb.nodesource.com/setup_0.12 | sudo -E bash -
        $ sudo apt-get install -y nodejs mongodb-server mongodb-clients build-essential

4. Install NPM packages and run server:

        $ cd /vagrant/application
        $ npm install
        $ npm start

See [root readme](https://github.com/manti-by/Archimed) for more info