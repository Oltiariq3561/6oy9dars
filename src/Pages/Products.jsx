import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://strapi-store-server.onrender.com/api/products')
      .then(response => {
        if (response.status === 200) {
          setProducts(response.data.data); 
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (

    <div>
      <div class="py-8 px-12 rounded-lg shadow-md">
        <div class="flex justify-between items-center">
          <div class="w-1/5">
            <label class="block text-sm text-gray-700">Search Product</label>
            <input
              type="text"
              placeholder="Search"
              class="w-full px-3 py-2 border rounded-md mt-1"
            />
          </div>
          <div class="w-1/5">
            <label class="block text-sm text-gray-700">Select Category</label>
            <select class="w-full px-3 py-2 border rounded-md mt-1">
              <option value="all">all</option>
            </select>
          </div>
          <div class="w-1/5">
            <label class="block text-sm text-gray-700">Select Company</label>
            <select class="w-full px-3 py-2 border rounded-md mt-1">
              <option value="all">all</option>
            </select>
          </div>
          <div class="w-1/5">
            <label class="block text-sm text-gray-700">Sort By</label>
            <select class="w-full px-3 py-2 border rounded-md mt-1">
              <option value="a-z">a-z</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <div class="mt-4">
            <label class="block text-sm text-gray-700">Select Price</label>
            <input type="range" min="0" max="1000" value="0" class="w-full" />
            <div class="flex justify-between text-sm">
              <span>$0.00</span>
              <span>$1,000.00</span>
            </div>
          </div>
          <div class="mt-4 flex items-center">
            <input type="checkbox" class="mr-2" />
            <label class="text-sm">Free Shipping</label>
          </div>
          <div class="mt-6 flex gap-20 justify-between">
            <button class="px-6 py-2 bg-blue-500 text-white rounded-md">
              SEARCH
            </button>
            <button class="px-6 py-2 bg-purple-500 text-white rounded-md">
              RESET
            </button>
          </div>
        </div>
</div>
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
