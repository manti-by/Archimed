Archimed
==========================================================

Test React/Redux application


Setup:
----------------------------------------------------------

1. Install [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads)

2. Run Vagrant and login to box

        $ vagrant up
        $ vagrant ssh

3. Update system packages

        $ sudo apt-get update
        $ sudo apt-get upgrade -y

4. Remove default system NodeJS and NPM

        $ sudo apt-get remove nodejs npm

5. Install latest NodeJS server, NPM and MongoDB

        $ curl -sL https://deb.nodesource.com/setup_0.12 | sudo -E bash -
        $ sudo apt-get install -y nodejs mongodb-server mongodb-clients build-essential

6. Install NPM packages and run server

        $ cd /vagrant/app
        $ npm install
        $ npm start

7. If you are working on windows, use following command to avoid binary links

        $ mkdir ~/node_modules
        $ cd ~/node_modules
        $ mkdir archimed
        $ cd ./archimed
        $ mkdir node_modules
        $ cp /vagrant/app/package.json package.json
        $ npm install package.json
        $ cd /vagrant/app
        $ ln -s ~/node_modules/archimed/node_modules node_modules

    *More info at [perrymitchell.net](http://perrymitchell.net/article/npm-symlinks-through-vagrant-windows/)
and [superuser.com](http://superuser.com/questions/124679/how-do-i-create-a-link-in-windows-7-home-premium-as-a-regular-user?answertab=votes#125981)*

8. Open up [http://localhost:3000/](http://localhost:3000/) in your browser.