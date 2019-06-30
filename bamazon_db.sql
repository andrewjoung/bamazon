DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INT,
    stock_quantity INT,
    PRIMARY KEY(id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Computer monitor", "Electronics", 150, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("IPhone", "Electronics", 800, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Desk chair", "Furniture", 50, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Desk lamp", "Furniture", 15, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Flannel", "Apparel", 30, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Gold chain necklace", "Jewelry", 1000, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Denim jeans", "Apparel", 70, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Portable speakers", "Electronics", 200, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Headphones", "Electronics", 200, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Wrist watch", "Jewelry", 500, 5);

