/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";

const MyCart = () => {
    const product = useLoaderData()
    // console.log(product)

    const { _id, image, price, rating, title, views, details, category, brand_name } = product;
    return (
        <div className="lg:m-32 m-10">
          
            <Link to="/myCart">
          <div className=" card card-side bg-base-100 shadow-xl">
                <figure><img className="h-48 w-72 mr-4" src={image} alt="Movie" /></figure>
                <div className="flex justify-evenly w-full  ">
                    <div className="text-start ml-10">
                        <h2 className="card-title text-orange-600 font-bold"> {category}</h2>
                        <p className="font-semibold">Brand Name: <span className="text-orange-600 font-serif">{brand_name}</span></p>
                        <p className="font-semibold">{title}</p>
                        <p className="font-semibold">Price: ${price}</p>
                        <p className="font-semibold">
                            <div className="flex items-center gap-[2px] ">
                            <p className="font-normal ">{details}</p>
                               
                            </div>
                        </p>
                        <button className="btn mt-6 normal-case text-xl bg-orange-600 hover:bg-black text-white">Add</button>
                    </div>
                     
                </div>
            </div>
            </Link>

        </div>
    );
};

export default MyCart;

{/* <div className="justify-end">
    <div className="badge badge-outline">{views}</div>
    <div className="badge badge-outline">{rating}</div>
</div> */}