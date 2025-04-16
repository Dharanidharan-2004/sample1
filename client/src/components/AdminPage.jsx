import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [products, setProducts] = useState({
    productName: "",
    price: "",
    oldPrice: "",
    categoryType: "",
    is_active: false,
    descriptionBox: "",
    CategoryList: ""
  });

  const [storeData, setStoreData] = useState([]);
  const [updateDate, setupdateDate] = useState(null);

  const categoryList = ["Vegetables", "Fruits & Nuts", "Dairy & creams", "Packages Food", "Staples"];

  const getFetch = () => {
    axios.get("http://localhost:8000/read")
      .then(res => setStoreData(res.data))
      .catch(err => console.log("Error fetching data:", err));
  };

  useEffect(() => {
    getFetch();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProducts({ ...products, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateDate) {
      axios.put(`http://localhost:8000/update/${updateDate}`, products)
        .then(() => {
          resetForm();
          getFetch();
        });
    } else {
      axios.post("http://localhost:8000/create", products)
        .then(() => {
          resetForm();
          getFetch();
        });
    }
  };

  const resetForm = () => {
    setProducts({
      productName: "",
      price: "",
      oldPrice: "",
      categoryType: "",
      is_active: false,
      descriptionBox: "",
      CategoryList: ""
    });
    setupdateDate(null);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/delete/${id}`)
      .then(() => getFetch());
  };

  const handleUpdate = (product) => {
    setProducts(product);
    setupdateDate(product.id);
  };

  return (
    <div className="container">
      <h2 className='d-flex justify-content-center mt-5'>Products</h2>

      <form onSubmit={handleSubmit}>
        <input name="productName" type="text" 
        placeholder="Enter Product Name" 
        value={products.productName} 
        onChange={handleChange} />
        
        <br />

        <input name="price" type="number" 
        placeholder="Enter Price" 
        value={products.price} 
        onChange={handleChange} />

        <br />

        <input name="oldPrice" 
        type="number" placeholder = "Enter Old Price" 
        value = {products.oldPrice} 
        onChange = {handleChange} /><br />

        <select name="categoryType" 
        value={products.categoryType} 
        onChange={handleChange}>
          <option value="">Select Category</option>
          {categoryList.map((cate) => (
            <option key={cate} value={cate}>{cate}</option>
          ))}
        </select><br />

        <input name="CategoryList" 
        type="text" placeholder="Enter Category List" 
        value={products.CategoryList} 
        onChange={handleChange} />
        
        <br />

        <label>
          <input type="checkbox" 
          name="is_active" checked={products.is_active} 
          onChange={handleChange} /> Is Active
        </label>

        <br />

        <textarea name="descriptionBox" 
        placeholder="Description" 
        value={products.descriptionBox} 
        onChange={handleChange}>
        </textarea><br />

        <button type="submit">{updateDate ? 'Update' : 'Add'} Product</button>
      </form>

      <table className="table mt-5">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Old Price</th>
            <th>Category</th>
            <th>Category List</th>
            <th>Is Active</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {storeData.map((item) => (
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td>{item.oldPrice}</td>
              <td>{item.categoryType}</td>
              <td>{item.CategoryList}</td>
              <td>{item.is_active ? 'Yes' : 'No'}</td>
              <td>{item.descriptionBox}</td>
              <td>
                <button onClick={() => handleUpdate(item)}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;


