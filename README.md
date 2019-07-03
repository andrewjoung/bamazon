# bamazon

## Author
Andrew Joung

## Description
This application is a simulation shopping node command line application that will query through mySQL database and also allows the user 
to manipulate the database based on items he/she would like to by. 
Upon starting the application, the user can view a table with available products and information about the products.
Afterwards the user will be prompted with what item he/she would like to buy and then the amount of product he/she would like the buy.
After finishing the prompts the database will be updated. The user may then start the application again to view the changes.

## Instructions
1. Clone the repository
2. `npm install` to install all necessary dependencies
    * For this application we use inquirer, mysql, and cli-table node packages
3. From the directory of the repository the user can use the command `node bamazonCustomer.js` to launch the application
    * This will show the user a table of representing the database that holds the products
    * The user will be prompted what they want to buy
    * The user will be prompted how many 

## Screenshots

![screenshot 1](/images/screenshot1.png)
![screenshot 2](/images/screenshot2.png)