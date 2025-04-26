import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cartSlice";
import { toast } from "react-hot-toast";

import axios from "../axiosConfig.js";

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    toast.success(`${product.name} added to cart!`, {
      duration: 2000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  useEffect(() => {
    axios
      .get("/api/products", { withCredentials: true })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mt-20 pt-20 w-full">
      {products.map((product) => (
        <Link
          to={`/product/${product._id}`}
          state={{ product }}
          key={product._id}
          className=" flex gap-10   justify-center p-4 items-stretch hover:shadow-l hover:scale-105 transition duration-300 "
        >
          <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all ">
            <div className="relative mt-2.5">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-54 object-contain "
              />
              <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Sale
              </span>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-gray-500 mt-1 line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </p>
                  <p className="text-sm text-gray-500 line-through">$69.99</p>
                </div>

                <div className="flex items-center gap-1">
                  <div className="text-yellow-400"></div>
                  <div className="text-gray-300"></div>
                  <span className="text-sm text-gray-600 ml-1"></span>
                </div>
              </div>

              <button
                className="!w-full !bg-cyan-600 !hover:bg-cyan-700 active:scale-90  !text-white !font-medium !py-3 !rounded-lg !transition-all !outline-none"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
              <button className="!w-full !bg-cyan-600 !hover:bg-cyan-700 active:scale-90  !text-white !font-medium !py-3 !rounded-lg !transition-all !outline-none">
                Buy Now
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
