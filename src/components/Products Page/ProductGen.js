import React from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function ProductGen({ title, description, image, image2, image3, image4 }) {
  return (
    <div className="flex flex-col lg:flex-row justify-start bg-black gap-x-12 lg:mx-80 mb-12 shadow-lg">
        <div id="carousel-container">
      <Carousel slide={false} className="w-full">
        <CarouselItem>
          <img src={image} alt="product" className="w-full" />
        </CarouselItem>
        <CarouselItem>
          <img src={image2} alt="product" className="w-full" />
        </CarouselItem>
        <CarouselItem>
          <img src={image3} alt="product" className="w-full" />
        </CarouselItem>
        <CarouselItem>
          <img src={image4} alt="product" className="w-full" />
        </CarouselItem>
      </Carousel>
      </div>
      <div className="text-holder-products py-12 flex-col flex px-12 lg:pl-0 gap-y-8">
        <h1>{title}</h1>
        <div className="descProd">
          {description.split(";").map((txt) => (
            <p>{txt}</p>
          ))}
          <button className="px-3 py-2 buttonw w-48 text-white mt-12"> Encontre Varejistas</button>
        </div>
      </div>
    </div>
  );
}

export default ProductGen;
