var mysql = require("mysql");
var cTable = require('console.table');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  
});

function connectionEnd(){
    connection.end();
}

function start(){
    connection.query("SELECT item_id, product_name, price FROM products", function (err,result){
        if (err) throw err;     

        const table = cTable.getTable(result);
        console.log(table);
        inquirer.prompt([
            { type: "input",
                name: "productid",
                message: "What product would you like to buy?"
        },{ type: "input",
        name: "productquantity",
        message: "How many would you like to buy?"
}]).then(function(answers){
    connection.query("SELECT stock_quantity, price FROM products WHERE item_id = ?", parseInt(answers.productid) ,function (err,res){
        if (err) throw err; 
        //console.log(res[0].stock_quantity + "----"+ parseInt(answers.productquantity))
        if(res[0].stock_quantity >= parseInt(answers.productquantity)){
            var newStock = res[0].stock_quantity - parseInt(answers.productquantity)
            connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [newStock,parseInt(answers.productid)],function (err,r){
                console.log("Your total is: $" + (res[0].price*answers.productquantity));

            });
            connectionEnd();

        }else{
            console.log("Insufficient quantity!");
            connectionEnd();
        }

    })
        })
    });

    
 };

 start();