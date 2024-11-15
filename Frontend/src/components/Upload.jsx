import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Upload() {
  const [selectedImage, setSelectedImage] = useState(null); // To store the Image file
  const [imageUrl, setImageUrl] = useState(null); // For previewing image Url
  const [randomImages, setRandomImages] = useState([]); // To store the random Unsplash images
  const [loading, setLoading] = useState(false); // To manage loading state

  // Handle image file selection
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file); // store the actual file object
      setImageUrl(URL.createObjectURL(file)); // For image preview
    }
  };

  // Handle image upload and fetch random images from Unsplash
  const handleUploadSubmit = async () => {
    if (!selectedImage) {
      alert("Please select an image first");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      // API call to fetch random images from Unsplash
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${
          import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        }&count=6`
      );
      setRandomImages(response.data); // Assuming the response contains an array of random image data
    } catch (error) {
      console.error("Error fetching random images from Unsplash:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        className="mt-12 text-center bg-gradient-to-r from-purple-600 via-gray-700 to-blue-600 bg-clip-text text-transparent text-5xl font-bold"
      >
        Face Search AI
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        className="text-center text-2xl text-gray-700 mb-10 "
      >
        Finds your image anywhere on the web
      </motion.p>

      <div className="flex flex-col items-center">
        <motion.input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mb-6 cursor-pointer border border-gray- rounded-lg py-2 px-4 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-gradient-to-r from-purple-500 to-blue-600 hover:file:from-purple-600 hover:file:to-blue-700"
        />
        {imageUrl && (
          <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt="Preview"
              className="w-72 h-72 object-cover"
            />
          </div>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleUploadSubmit}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 ease-in-out"
        >
          {loading ? "Uploading..." : "Upload Image"}
        </motion.button>
        <p className="text-center text-sm text-gray-700 mt-5 ">
          You have 3 free searches left.{" "}
          <a href="#" className="text-blue-600">
            Explore plans
          </a>
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 lg:px-12">
        {randomImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={img.urls.small}
              alt={img.alt_description}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <p className="mt-2 text-lg font-semibold text-gray-800">
                {img.alt_description || "Untitled"}
              </p>
              <p className="text-sm text-gray-500">By {img.user.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Upload;