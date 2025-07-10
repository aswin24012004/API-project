import React, { useState } from "react";
import "./style.css";
export default function DogApi() {
  const [images, setImages] = useState([]);
  const showImages = async () => {
    const apikey =
      "live_QZ0bJRy8l4RqTvz7QGgPKFYTzUbeXYI3weTjjTMTred8QrXhro2nTmztqDY83E0X";
    const api = `https://api.thecatapi.com/v1/images/search?limit=15&breed_ids=beng&api_key=${apikey}`;
    try {
      const res = await fetch(api);
      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.log("Faild to fetc Errors", error);
    }
  };
  return (
    <div>
      <h2>Images</h2>
      <button onClick={showImages}>Show Images</button>
      <div className="box">
        {images.map((img, index) => (
          <img key={index} className="imgs" src={img.url} />
        ))}
      </div>
    </div>
  );
}
