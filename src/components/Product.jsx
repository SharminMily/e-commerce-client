/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Product = ({ category }) => {
    // eslint-disable-next-line no-unused-vars
    const { _id, image } = category;
    // const [category, setCategory] = useState([]);

    // console.log(category)   

  
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
    



    return (
        <div>
             {/* <Link to={`/addProduct/${id}`}>  <div onClick={()=> handleCategory} */}
            <Link to={`/addProduct/${_id}`}>  <div className="p-0 bg-base-100 shadow-xl  mt-8 ">
                <figure><img className="w-40 h-36 rounded-xl" src={category.image} alt="Shoes" /></figure>

            </div></Link>
            <h2 className="text-xl pt-2 text-orange-600 font-bold">{category.category}</h2>
        </div>
    );
};

export default Product;