import React from "react";
import { motion } from "framer-motion";

function NewsGen({ title, image }) {
  return (
    <motion.div
      className="newholder flex flex-col md:px-0 w-full md:my-4 shadow-sm"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="image-holder overflow-hidden w-full ">
        <img src={image} />
      </div>
      <div className="news-title px-6 py-3 bg-white">
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
}

export default NewsGen;
