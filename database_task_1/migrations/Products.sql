CREATE TABLE Products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(255),
  supplier_id INT,
  category_id INT,
  unit VARCHAR(255),
  price NUMERIC(10,2),
  FOREIGN KEY (category_id) REFERENCES categories(category_id),
  FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);

