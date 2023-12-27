CREATE TABLE Suppliers (
  supplier_id SERIAL PRIMARY KEY,
  supplier_name VARCHAR(255),
  contact_name VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  postal_code VARCHAR(255),
  country VARCHAR(255),
  phone VARCHAR(255)
);