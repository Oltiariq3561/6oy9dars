import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://strapi-store-server.onrender.com/api/products?featured=true`)
      .then(response => {
        if (response.status === 200) {
          setProducts(response.data.data);
        }
      })
      .catch(err => console.log(err));
  }, []); 

  const handleRedirect = (id) => {
    navigate(`/products/${id}`);
  };

  const handleProducts = (e) => {
    e.preventDefault();
    navigate("/products");
  };

  return (
    <div>
      <div className="flex mb-20">
        <div className="flex-1">
          <h1 className="text-7xl ml-10 mr-56 mb-4 font-bold">
            We are changing <br /> the way people <br /> shop
          </h1>
          <p className="ml-10 text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Tempore repellat explicabo enim soluta temporibus asperiores <br />
            aut obcaecati perferendis porro nobis.
          </p>
          <button onClick={handleProducts} className="ml-10 bg-blue-500 p-3 rounded-md text-white mt-4">
            OUR PRODUCTS
          </button>
        </div>
        <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      className="rounded-box" />
  </div>
</div>
      </div>

      <h1 className="text-4xl ml-10 mb-10">Featured Products</h1>
      <div className="wrapper container mx-auto flex flex-wrap gap-3 justify-center">
        {products.length > 0 && products.map((product) => (
          <div key={product.id} className="w-1/4 shadow-md rounded-md cursor-pointer" onClick={() => handleRedirect(product.id)}>
            <img className="h-[300px] w-full object-cover" src={product.attributes.image} alt={product.attributes.title} />
            <h2 className="text-lg font-semibold mt-2">{product.attributes.title}</h2>
            <h3 className="text-xl text-gray-600">${product.attributes.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
