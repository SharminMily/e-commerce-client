import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { BsArrowDownLeftSquare } from "react-icons/bs";
import { RiHeadphoneFill } from "react-icons/ri";

const AddProduct = () => {
    return (
        <div className="mt-20">
            {/* <h1 className="text-3xl font-bold">Add Products</h1> */}
            <div className="p-8">
                <div className=" md:flex flex-row justify-center items-center gap-4">
                    <div className="bg-green-200 mb-10 relative p-4 h-full md:w-1/3">
                        <div className="absolute left-8 -top-5 text-white"> <HiArrowTopRightOnSquare className="text-5xl bg-green-700 p-2" /></div>
                        <h1 className="text-2xl pt-8 font-semibold pb-3 ">Free Shopping</h1>
                        <p>when you are a regular customer of our e-commerce site, then you can deserve some free services . </p>
                    </div>

                    <div className="relative mb-10 bg-orange-200 p-4 h-full md:w-1/3">
                        <div className="absolute left-8 -top-5">
                        <BsArrowDownLeftSquare className="text-5xl bg-orange-700 p-3 text-white"/>
                        </div>
                        <h1 className="text-2xl pt-8 font-semibold pb-3">14 days Easy Return</h1>
                        <p>If you are any product dislike. You can return this product only 14 days. otherwise your products not accepted.</p>
                    </div>
                    <div className="relative mb-10 bg-blue-200 p-4 h-full md:w-1/3">
                       <div className="absolute left-8 -top-5">
                       <RiHeadphoneFill  className="text-5xl bg-blue-800 p-3 text-white" />
                       </div>
                        <h1 className="text-2xl pt-8 font-semibold pb-3">24/7 customer Support</h1>
                        <p>All time support ready for our respected customers. You can any time buy your favorite product. </p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default AddProduct;