# Project Installation

> install project usign bellow commands:


# 1-install npm

``` bash
npm install

```

# 2-build project using:

``` bash

npm run build

```

# 3-start project using:
``` bash

npm start 

```

# linux server configuration:
>ubuntu 20.4.0 server configuration

# 1-install Node/NPM

``` bash

sudo apt install nodejs

node --version

```

# 2-Clone Project from Github or Azuredevops

``` bash

git clone https://github.com/PedramAlidust/fardamotors.git


```

# 3- install Node/NPM

``` bash

sudo apt install nodejs


```


# 4- install dependencies and test app

``` bash

npm install 
npm start (just for test)
ctrl+C (stop app)

```

# 5- setup pm2 process manager to keep app running 

``` bash

sudo npm i pm2 -g
pm2 start npm --name "app name" --start (this command is for starting app inside it's directory)

```

# 6- install NGINX and configuration

``` bash

sudo apt install nginx

sudo nano /etc/nginx/sites-available/default

```

Add the following to the location part of the server block

``` bash
server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```

# 7- Check and restart NGINX config

``` bash

sudo nginx -t 

sudo service nginx restart

```

# 8- start application using pm2:
``` bash

navigate to project root, for example:

cd /var/www/farda/app

start the app using pm2:

pm2 start npm --name "your app name" --start

check app status:

pm2 status

```


# application link:

visit at [https://fardamotors.theresume.ir/app](https://fardamotors.theresume.ir/app).
