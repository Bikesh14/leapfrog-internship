CREATE TABLE Employees (
    EmployeeId SERIAL PRIMARY KEY,
    Lastname VARCHAR(255),
    Firstname VARCHAR(255),
    Birthdate DATE,
    Photo  VARCHAR(255),
    Notes TEXT
);