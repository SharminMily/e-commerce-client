import { useLoaderData } from "react-router-dom";

const Product = () => {
    const product = useLoaderData([])
    console.log(product)
    return (
        <div>
           <h1>product {product.length}</h1>
        </div>
    );
};

export default Product;