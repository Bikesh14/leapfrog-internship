CREATE TABLE OrderDetails (
    OrderDetailId SERIAL PRIMARY KEY,
    OrderId INT,
    product_id INT,
    Quantity INT,
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);