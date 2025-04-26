import React from "react";

const Features = () => {
  return (
    <div>
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                We ensure your orders reach you on time with real-time tracking.
              </p>
            </div>
            <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">
                Every product is handpicked for top-tier quality and
                satisfaction.
              </p>
            </div>
            <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Need help? Our support team is always ready to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
