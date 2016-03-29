Archimed
==========================================================

Test React/Redux application


Setup:
----------------------------------------------------------

Install [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads).

Run Vagrant and login to box:

```
    $ vagrant up && vagrant ssh
```

Install NPM package manager:

```
    $ sudo apt-get update && sudo apt-get upgrade -y
    $ sudo apt-get install -y npm
```

Install NPM packages and run server:

```
    $ cd /vagrant/application
    $ npm install
    $ npm start
```

Open up [http://localhost:3000/](http://localhost:3000/) in your browser.