import React from "react";
import paymentimg from "../assets/payment.png";
import { motion } from "framer-motion";

function Payments() {
  const handleCheckout = () => {
    // Manually trigger the redirect to Stripe Checkout page
    window.open("https://buy.stripe.com/test_6oE6skdLK93Y3hm288", "_blank");
  };

  return (
    <div className="border-b border-neutral-900 pb-16 pt-10">
      <div className="flex justify-center lg:justify-between gap-8">
        {/* Left Section: Payment Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={paymentimg}
            alt="Payment illustration"
            className="h-[250px] lg:h-[350px] w-auto object-cover rounded-lg shadow-xl"
          />
        </motion.div>

        {/* Right Section: Button */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <button
            onClick={handleCheckout} // Trigger redirect on click
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-4 px-8 rounded-lg hover:scale-105 transition transform duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Go to Payment Page
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Payments;