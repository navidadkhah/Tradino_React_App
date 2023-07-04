## Tradino_React_App
This is a website built with reactjs.
It has authentication pages such as signup, sign-in, forgot password, and so on.
We used the chartjs package for showing our chart related stocks, forex, and cryptos.



## How to run

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.<br />
2.  Clone this repo <br />
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
5.  At this point you can run `npm start`(in case this command didn't work as expected, you can execute `node server`) to see the example app at `http://localhost:3000`.<br />
6.  Run `npm run clean` to delete the example app.<br />


## Quick docker start

1.  Once the cloning is complete, you can build the image by `docker build -t <name>/<project_name>:<project_version> .`<br />
2.  Now to run the image execute `docker run -p <local>:140 <image_id>`<br />


## Structure
-   All the programable files are in the `./app` directory at the root of the project
-   Inside the `./app` there are two directories named `./app/client` and `./app/controller`
-   The `controller` is basically where front-end interacts with the back-end
    _ For example, there is a `accountController.js` file which handles login and logout and many more APIs which are related to the accounts.
-   The `client` directory is where front-end is setup
    _ the `./client/src` is where important stuff has been coded
-   In the `./src` there is assests which contains images and svg files
-   The `./views` is where pages are pages come together using the `./components` but the main focus of the files in `./views` is to handle the data which is going through the
      front-end and also to keep the required components together in place.
-   The `./App.js` file is where the Routes are defined in the application.

