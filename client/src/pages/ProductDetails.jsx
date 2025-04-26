import axios from "axios";
import React, { useState, useEffect } from "react";

import { addItemToCart } from "../features/cartSlice.js"; 
import { useDispatch } from "react-redux"; 
import { useLocation } from "react-router-dom"; 

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};



  

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="min-h-screen w-full mt-16 pt-72">
      <section className="py-8 bg-white md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-full"
                src={product.image} 
                alt={product.title} 
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                {product.title} 
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  ${product.price} 
                </p>

               
              </div>
              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button
                  className="!w-full !bg-cyan-600 !hover:bg-cyan-700 active:scale-90 !text-white !font-medium !py-3 !rounded-lg !transition-all !outline-none"
                  onClick={() => dispatch(addItemToCart(product))} 
                >
                  Add To Cart
                </button>

                <button className="!w-full !bg-cyan-600 !hover:bg-cyan-700 active:scale-90 !text-white !font-medium !py-3 !rounded-lg !transition-all !outline-none">
                  Buy Now
                </button>
              </div>
              <hr className="my-6 md:my-8 border-gray-200" />
              <p className="mb-6 text-gray-700">{product.description}</p> 
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
