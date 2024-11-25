import React from "react";
import { motion } from "framer-motion";

function Payments() {
  const handleCheckout = () => {
    // Manually trigger the redirect to Stripe Checkout page
    window.open("https://buy.stripe.com/test_6oE6skdLK93Y3hm288", "_blank");
  };

  return (
    <div className="border-b border-neutral-900 pb-16 pt-10">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-8 px-6 lg:px-20">
        {/* Left Section: Basic Plan */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 backdrop-blur-lg bg-sky-600/10 rounded-lg p-6 flex flex-col items-center"
        >
          <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 via-gray-700 to-blue-600 bg-clip-text text-transparent uppercase mb-4">Basic</p>
          <p className="text-4xl font-bold text-gray-700 mb-2">
            $9.99 <span className="text-lg font-medium text-neutral-500">/month</span>
          </p>
          <p className="text-sm text-neutral-500 text-center mb-6">
            Beginner-friendly package for Face Search
          </p>
          <button
            onClick={handleCheckout}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Buy Now
          </button>
          <div className="mt-6 space-y-2 text-neutral-500 text-sm">
            <p>Customer Support</p>
            <p>7 Face Searches Per Day</p>
            <p>Tech Team Support</p>
            <p>Download Search Results</p>
          </div>
        </motion.div>

        {/* Right Section: Premium Plan */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 backdrop-blur-lg bg-sky-600/10 rounded-lg p-6 flex flex-col items-center"
        >
          <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 via-gray-700 to-blue-600 bg-clip-text text-transparent  uppercase mb-4">Premium</p>
          <p className="text-4xl font-bold text-gray-700 mb-2">
            $49 <span className="text-lg font-medium text-neutral-500">/6 months</span>
          </p>
          <p className="text-sm text-neutral-500 text-center mb-6">
            For professionals or organizations requiring advanced results
          </p>
          <button
            onClick={handleCheckout}
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
          >
            Purchase Now
          </button>
          <div className="mt-6 space-y-2 text-neutral-500 text-sm">
            <p>Unlimited Face Searches</p>
            <p>Faster and Accurate Results</p>
            <p>Advanced Analytics</p>
            <p>Customer Support</p>
            <p>Tech Team Support</p>
            <p>Download Search Results</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Payments;


