'use client'
import { useState } from "react";
import imageCompression from 'browser-image-compression'; // Import the image compression library

const useImageHook = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Selected file is not an image.");
      return;
    }

    // Check if the file size is more than 300KB
    if (file.size > 300 * 1024) {
      try {
        // Compress the image
        const compressedFile = await imageCompression(file, { maxSizeMB: 0.3 });

        const reader = new FileReader();
        reader.onloadend = () => {
          setImgUrl(reader.result);
        };
        reader.readAsDataURL(compressedFile); // Set the compressed image URL
        setError(null);
      } catch (error) {
        console.error('Error compressing image:', error);
        setError('Error compressing image');
      }
    } else {
      // If the image is already below 300KB, proceed without compression
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      reader.readAsDataURL(file); // Set the image URL
      setError(null);
    }
  };

  const clearImage = () => {
    setImgUrl(null);
  };

  return { handleImageChange, imgUrl, error, clearImage };
};

export default useImageHook;
