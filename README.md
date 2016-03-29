Archimed
==========================================================

Test React/Redux application


Setup:
----------------------------------------------------------

1. Install Vagrant and VirtualBox

2. Run Vagrant and login to box

    $ vagrant up && vagrant ssh

3. Install NPM package manager

    $ sudo apt-get update && sudo apt-get upgrade -y
    $ sudo apt-get install -y npm

4. Install NPM packages and run server

    $ cd /vagrant/application
    $ npm install
    $ npm start
    
5. Open up http://localhost:3000/ in your browser