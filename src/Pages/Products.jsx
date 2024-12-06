import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://strapi-store-server.onrender.com/api/products')
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <form
        method="get"
        action="/products"
        className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
      >
        <div className="form-control">
          <label htmlFor="search" className="label">
            <span className="label-text capitalize">Search Product</span>
          </label>
          <input type="search" name="search" className="input input-bordered input-sm" defaultValue="" />
        </div>

        <div className="form-control">
          <label htmlFor="category" className="label">
            <span className="label-text capitalize">Select Category</span>
          </label>
          <select name="category" id="category" className="select select-bordered select-sm">
            <option value="all">All</option>
            <option value="Tables">Tables</option>
            <option value="Chairs">Chairs</option>
            <option value="Kids">Kids</option>
            <option value="Sofas">Sofas</option>
            <option value="Beds">Beds</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="company" className="label">
            <span className="label-text capitalize">Select Company</span>
          </label>
          <select name="company" id="company" className="select select-bordered select-sm">
            <option value="all">All</option>
            <option value="Modenza">Modenza</option>
            <option value="Luxora">Luxora</option>
            <option value="Artifex">Artifex</option>
            <option value="Comfora">Comfora</option>
            <option value="Homestead">Homestead</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="order" className="label">
            <span className="label-text capitalize">Sort By</span>
          </label>
          <select name="order" id="order" className="select select-bordered select-sm">
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="price" className="label cursor-pointer">
            <span className="label-text capitalize">Select Price</span>
            <span>$1,000.00</span>
          </label>
          <input
            type="range"
            name="price"
            min="0"
            max="100000"
            className="range range-primary range-sm"
            step="1000"
            defaultValue="100000"
          />
          <div className="w-full flex justify-between text-xs px-2 mt-2">
            <span className="font-bold text-md">0</span>
            <span className="font-bold text-md">Max: $1,000.00</span>
          </div>
        </div>

        <div className="form-control items-center">
          <label htmlFor="shipping" className="label cursor-pointer">
            <span className="label-text capitalize">Free Shipping</span>
          </label>
          <input type="checkbox" name="shipping" className="checkbox checkbox-primary checkbox-sm" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Search
        </button>
        <a className="btn btn-accent btn-sm" href="/products">
          Reset
        </a>
      </form>

      <div className="grid grid-cols-3 gap-8 p-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.attributes.image}
                alt={product.attributes.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">{product.attributes.title}</h2>
                <p className="text-gray-500">${product.attributes.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
