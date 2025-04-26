import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function ProductCarousel({ products = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id} className="px-2">
            <Link to={`/products/${product._id}`}>
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
