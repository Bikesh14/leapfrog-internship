CREATE TABLE Orders (
    OrderId SERIAL PRIMARY KEY,
    CustomerId INT,
    EmployeeId INT,
    OrderDate DATE,
    ShipperId INT,
    FOREIGN KEY (CustomerId) REFERENCES Customers(CustomerId),
    FOREIGN KEY (EmployeeId) REFERENCES Employees(EmployeeId),
    FOREIGN KEY (ShipperId) REFERENCES Shippers(ShipperId)
);