/* eslint-disable react/prop-types */


const Product = ({ product }) => {
    // eslint-disable-next-line no-unused-vars
    const { id, name, category, image,} = product;

    console.log(product)
    return (
        <div>
            <div className="p-0 bg-base-100 shadow-xl  mt-8 ">
                <figure><img className="w-40 h-36 rounded-xl" src={product.image} alt="Shoes" /></figure>
                
               
            </div>
            <h2 className="text-xl pt-2 text-orange-600 font-bold">{product.name}</h2>
        </div>
    );
};

export default Product;