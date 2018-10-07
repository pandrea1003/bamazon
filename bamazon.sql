DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL auto_increment,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,

    PRIMARY KEY (item_id)
);

USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES 
("Bire TV", "Electronics", 79.99, 50), 
("Bindle", "Electronics", 49.99, 50), 
("Becho", "Electronics", 179.99, 100), 
("Xbox One", "Electronics", 199.99, 50), 
("Rich Dad, Poor Dad", "Books", 11.99, 200), 
("Hanes T-shirt", "Clothing", 4.99, 75), 
("Sterling Silver Earings", "Jewelry", 29.50, 25), 
("Crayon Pack", "Toys and Games", .99, 100), 
("Camera", "Camera and Photo", 129.99, 50);




