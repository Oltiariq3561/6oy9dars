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
      <div className=" container flex mb-20">
        <div className=" mt-5 flex-1">
          <h1 className="text-7xl text-gray-600 mb-4 font-bold">
            We are changing <br /> the way people <br /> shop
          </h1>
          <p className=" text-2xl text-gray-600 mt-10 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Tempore repellat explicabo enim soluta temporibus asperiores <br />
            aut obcaecati perferendis porro nobis.
          </p>
          <button onClick={handleProducts} className=" bg-blue-500 p-3 mt-10 rounded-md text-white mt-4">
            OUR PRODUCTS
          </button>
        </div>
        <div className="carousel carousel-center bg-neutral rounded-box max-w-md w-[600px] space-x-4 p-4">
  <div className="carousel-item">  
    <img
      src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
      className="rounded-box w-[300px] h-[470px]" />
  </div>
  <div className="carousel-item">
    <img
      src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
      className="rounded-box w-[300px] h-[470px]" />
  </div>
  <div className="carousel-item">
    <img
      src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp"
      className="rounded-box w-[300px] h-[470px]" />
  </div>
  <div className="carousel-item">
    <img
      src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp"
      className="rounded-box w-[300px] h-[470px]" />
  </div>
</div>
      </div>

      <h1 className="text-4xl ml-10 mb-10">Featured Products</h1>
      <div className="wrapper container mx-auto flex flex-wrap gap-3 justify-center">
        {products.length > 0 && products.map((product) => (
          <div key={product.id} className="w-[350px] h-[320px] bg-white shadow-md rounded-md cursor-pointer" onClick={() => handleRedirect(product.id)}>
            <img className="h-[200px] w-[330px] rounded-md  ml-[10px] mt-[10px] object-cover" src={product.attributes.image} alt={product.attributes.title} />
            <h2 className="text-lg text-slate-700 text-center mt-[28px] text-[20px]">{product.attributes.title}</h2>
            <h3 className="text-xl  text-slate-700 text-center mt-[10px] text-[18px]">${product.attributes.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
