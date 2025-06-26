import { div } from "framer-motion/client";
import React from "react";


const data = [

    {

            id: 1,
            name: "Bat Cycle",
            price: "$500,000",
            image: "/images/ChatGPT Image Jun 25, 2025, 11_50_04 AM.png",
            description: "This is a great bike if you want to be batman"

    },

    {

            id: 2,
            name: "Sports bike",
            price: "$150,000",
            image: "/images/Motorcycle-Bike-Transparent-Background.png",
            description: "This is a great bike if you want to be batman"



    }



];


async function ProductsID({
    params,
}: {
    params: Promise <{productsID: string}>;
}) {

    const productsID = parseInt((await params).productsID, 10);

    const product = data.find((item) => item.id === productsID);

    if(!product){

        return <h1>Product not found</h1>



    }

    else{
    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 space-y-6">
  {/* Product Image */}
  <div className="w-full max-w-sm">
    <img 
      src={product.image} 
      alt={product.name} 
      className="rounded-xl shadow-lg object-cover w-full"
    />
  </div>

  {/* Product Information */}
  <div className="text-center space-y-4">
    <h1 className="text-3xl font-bold">{product.name}</h1>
    <h2 className="text-xl text-purple-400 font-medium">{product.price}</h2>
    <p className="text-gray-300 leading-relaxed">{product.description}</p>
  </div>

  {/* Action Button */}
  <button className="px-6 py-2 bg-purple-600 hover:bg-purple-500 transition rounded-lg text-white font-semibold shadow-md">
    Buy Now
  </button>
</div>



    )
    }

}




export default ProductsID;