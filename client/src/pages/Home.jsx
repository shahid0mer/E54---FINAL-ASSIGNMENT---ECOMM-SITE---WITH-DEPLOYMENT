import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Features from "./Features";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousal";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products") 
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <ProductCarousel products={products}/>
      <Footer />
    </div>
  );
};

export default Home;
