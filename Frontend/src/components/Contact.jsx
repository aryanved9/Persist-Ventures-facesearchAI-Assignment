import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 bg-gradient-to-r from-purple-600 via-gray-700 to-blue-600 bg-clip-text text-center text-3xl text-transparent "
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-gray-700"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-gray-700"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="#"
          className="border-b text-gray-700 cursor-pointer hover:text-gray-500"
          onClick={(e) => e.preventDefault()}
        >
          {CONTACT.email}
        </motion.a>
      </div>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-10 text-gray-500"
      >
        © All rights reserved to aryanved9
      </motion.p>
    </div>
  );
}

export default Contact;