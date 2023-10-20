/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Product = ({ product }) => {
    // eslint-disable-next-line no-unused-vars
    const { id, name, category, image, } = product;
    // const [category, setCategory] = useState([]);

    // console.log(product)

    const handleCategory = (id) => {
        console.log(id)
        // fetch('http://localhost:5000/alldata',{
        //     method: 'POST',
        //     headers: {
        //         'context-type': 'application/json'
        //     },
        //     body: JSON.stringify()
        // })
        // .then(res=> res.json())
        // .then(data => {
        //     console.log(data);
        // }) 
    

    }


    return (
        <div>
            <Link to={`/addProduct/${id}`}>  <div onClick={()=> handleCategory}  className="p-0 bg-base-100 shadow-xl  mt-8 ">
                <figure><img className="w-40 h-36 rounded-xl" src={product.image} alt="Shoes" /></figure>

            </div></Link>
            <h2 className="text-xl pt-2 text-orange-600 font-bold">{product.category}</h2>
        </div>
    );
};

export default Product;