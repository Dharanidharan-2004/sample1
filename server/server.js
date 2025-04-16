const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create
app.post("/create", (req, res) => {
  const { productName, price, oldPrice, categoryType, is_active, descriptionBox, CategoryList } = req.body;
  const sql = "INSERT INTO products (productName, price, oldPrice, categoryType, is_active, descriptionBox, CategoryList) VALUES (?,?,?,?,?,?,?)";
  db.query(sql, [productName, price, oldPrice, categoryType, is_active, descriptionBox, CategoryList], (err, result) => {
    if (err) return res.status(500).send("Error inserting data");
    res.send(result);
  });
});

// Read
app.get("/read", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).send("Error fetching data");
    res.send(result);
  });
});

// Update
app.put("/update/:id", (req, res) => {
  const { productName, price, oldPrice, categoryType, is_active, descriptionBox, CategoryList } = req.body;
  const { id } = req.params;
  const sql = "UPDATE products SET productName=?, price=?, oldPrice=?, categoryType=?, is_active=?, descriptionBox=?, CategoryList=? WHERE id=?";
  db.query(sql, [productName, price, oldPrice, categoryType, is_active, descriptionBox, CategoryList, id], (err, result) => {
    if (err) return res.status(500).send("Error updating data");
    res.send(result);
  });
});

// Delete
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send("Error deleting data");
    res.send(result);
  });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
