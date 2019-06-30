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

connection.connect(function(err){
    if(err) throw err;
    var query = connection.query("SELECT * FROM products", 
        function(err, result){
            if(err) throw err;
            //console.log(result);
            //connection.end();
            for(var i = 0; i < result.length; i++) {
                table.push([result[i].id, result[i].product_name, result[i].department_name, "$"+result[i].price, result[i].stock_quantity]);
            }
            console.log(table.toString());
            //connection.end();
            promptUser(result);
        }
    );
});

function promptUser(database) {
    inquirer.prompt([
        
        {
            name:"product",
            message:"Please input the ID of the product you would like to buy."
        },
        {
            name:"quantity",
            message:"How many would you like to buy?"
        }

    ]).then(function(response) {
        
        var product = response.product;
        var quantity = response.quantity;

        var query = connection.query('SELECT * FROM products WHERE id=?', [product],
            function(error, result) {
                if(error) throw error;
                //console.log(result);
                if(parseInt(quantity) <= parseInt(result[0].stock_quantity)) {
                    console.log("Thank you for your order!");
                    updateTable(product, quantity, result);
                } else {
                    console.log("We're sorry, we seem to be low on " + result[0].product_name + "s");
                }
            }
        
        );
        //connection.end();
    });
}

function updateTable(productId, quantity, tableRow) {
    var query = connection.query('UPDATE products SET ? WHERE ?',
        [
            {
                stock_quantity: (parseInt(tableRow[0].stock_quantity) - parseInt(quantity))
            },
            {
                id: productId
            }
        ],
        function(error, result) {
            if(error) throw error;
            //console.log(result);
            //connection.end();
        }
    );

    var tableQuery = connection.query("SELECT * FROM products WHERE id=?", [productId],
        function(error, result) {
            if(error) throw error;
            var total = parseInt(result[0].price) * parseInt(quantity);
            console.log("Your total today is $" + total);
            connection.end();
        }
    )
}