## Quick node start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.<br />
2.  Clone this repo using `git clone --depth=1 https://gitlab.com/aliresa/tradino_frontend.git <YOUR_PROJECT_NAME>`<br />
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
5.  At this point you can run `npm start`(in case this command didn't work as expected, you can execute `node server`) to see the example app at `http://localhost:3000`.<br />
6.  Run `npm run clean` to delete the example app.<br />


## Quick docker start

1.  Once the cloning is complete, you can buold the image by `docker build -t <name>/<project_name>:<project_version> .`<br />
2.  Now to run the image execute `docker run -p <local>:140 <image_id>`<br />


## Structure
-   All the programable files are in the `./app` directory in the root of the project
-   Inside the `./app` there are two directories named `./app/client` and `./app/controller`
-   The `controller` is basically where front-end interacts with the back-end
    _ For example, there is a `accountController.js` files which handles login and logout and many more APIs which are related to the accounts.
-   The `client` directory is where front-end is setup
    _ the `./client/src` is where important stuff has been coded
-   In the `./src` there is assests which contains images and svg files
-   The `./views` is where pages are pages come together using the `./components` but the main focus of the files in `./views` is to handle the data which is going through the
      front-end and also to keep the required components together in place.
-   The `./App.js` file is where the Routes are defined in the application.


## Config Nginx
-   you can config container with nginx with this config code
server {
server_name <server-domain>;
location / {
proxy_set_header X-Forwarded-For $remote_addr;
proxy_set_header Host $http_host;
proxy_pass "http://127.0.0.1:140";
}
}
server {
server_name <server-domain>;
listen 80;
}

## Useful Commands
sudo nano /etc/nginx/sites-enabled/pldg

sudo certbot --nginx -d application.pledgeapp.com

sudo nginx -t && sudo nginx -s reload

sudo systemctl start nginx

sudo systemctl stop nginx

sudo systemctl status nginx.service

sudo fuser -k 443/tcp

sudo fuser -k 80/tcp

sudo certbot delete



sudo docker ps

sudo docker kill 0927e91a5616

sudo docker image ls

sudo docker build -t alireza/pledge:1.0 .

sudo docker run -p 140:140 2c313f09871d