var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

var table = new Table({
    head:['ID', 'Product', 'Department', 'Price', 'Quantity'],
    colWidths: [5, 30, 20, 10, 10]
});

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "duck0803",
    database: "bamazon_db"
});

connection.connect(function(error){
    if(error) throw error;
});

inquirer.prompt([
    {
        type:'list',
        message: "Options: ",
        choices:["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
        name:"options"
    }
]).then(function(response){
    if(response.options === "View Products for Sale") {
        viewProducts();
    } else if(response.options === "View Low Inventory") {
        viewLowInventory();
    } else if(response.options === "Add to Inventory") {
        addInventory();
    } else {
        addNewProduct();
    }
    connection.end();
});

function viewProducts() {
    var query = connection.query("SELECT * FROM products", 
        function(err, result){
            if(err) throw err;
            //console.log(result);
            //connection.end();
            for(var i = 0; i < result.length; i++) {
                table.push([result[i].id, result[i].product_name, result[i].department_name, "$"+result[i].price, result[i].stock_quantity]);
            }
            console.log(table.toString());

        }
    );
}

function viewLowInventory() {
    var query = connection.query("SELECT * FROM products WHERE(stock_quantity) < 5", 
        function(error, result) {
            if(error) throw error;
            console.log(result);
            var otherTable = new Table({
                head:['Artist Name'],
                colWidths:[50]
            });
            for(var i = 0; i < result.length; i++) {
                table.push([result[i].id, result[i].product_name, result[i].department_name, "$"+result[i].price, result[i].stock_quantity]);
            }
            //console.log(table.toString());
        }
    )   
}

function addInventory() {

}

function addNewProduct() {

}