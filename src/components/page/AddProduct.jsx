import { useEffect, useState } from "react";
import AddCard from "./addCard";


const AddProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://e-commerce-server-bbmemffin-sharminmily.vercel.app/alldata')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            {/* banner */}
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <img src="https://i.ibb.co/J2gtpqX/sider2.png" className="w-full lg:h-[80vh]" />

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <div className='top-60'>

                                <p className="text-orange-600 md:text-3xl font-bold" data-aos="flip-left" >E-commerce <br /><span className='hover:font-semibold p-2'>allows for more precise and <br /></span> targeted marketing efforts.
                                </p>

                                <div className="text-center">
                                    <button className='text-white font-bold hover:bg-orange-600 md:text-2xl  rounded-lg p-2 md:p-4 mt-4 border '>Product</button>
                                </div>
                            </div>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/wW3g8rT/sider1.png" className="w-full lg:h-[80vh]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <div className='top-60'>

                                <p className="text-orange-600 md:text-3xl font-bold" data-aos="flip-left" >E-commerce <br /><span className='hover:font-semibold p-2'>allows for more precise and <br /></span> targeted marketing efforts.
                                </p>

                                <div className="text-center">
                                    <button className='text-white font-bold hover:bg-orange-600 md:text-2xl  rounded-lg md:p-4 p-2 mt-4 border '>Marketing</button>
                                </div>
                            </div>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/qyVfm1W/sider3.png" className="w-full lg:h-[80vh]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <div className='top-60'>

                                <p className="text-orange-600 md:text-3xl font-bold" data-aos="flip-left" >E-commerce <br /><span className='hover:font-semibold p-2'>allows for more precise and <br /></span> targeted marketing efforts.
                                </p>
                                <div className="text-center">
                                    <button className='text-white font-bold hover:bg-orange-600 md:text-2xl  rounded-lg md:p-4 p-2 mt-4 border '>location</button>
                                </div>
                            </div>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* add Card */}
            <div className="my-10">
                <h2 className="py-4 text-3xl text-orange-600 font-serif font-bold">added Product</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
                {
                    products.map(product => <AddCard key={product._id} product={product}></AddCard>)
                }
            </div>


        </div>
    );
};

export default AddProduct;