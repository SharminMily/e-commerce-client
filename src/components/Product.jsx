/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Product = ({ category }) => {
    // eslint-disable-next-line no-unused-vars
    const { _id, image } = category;
    

    return (
        <div>
             {/* <Link to={`/addProduct/${id}`}>  <div onClick={()=> handleCategory} */}
            <Link to={"/addProduct"}>  <div className="p-0 bg-base-100 shadow-xl  mt-8 ">
                <figure><img className="md:w-40 md:h-36 w-full rounded-xl" src={category.image} alt="Shoes" /></figure>

            </div></Link>
            <h2 className="text-xl pt-2 text-orange-600 font-bold">{category.category}</h2>
        </div>
    );
};

export default Product;