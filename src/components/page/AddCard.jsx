/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsEyeFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import Swal from 'sweetalert2'


const AddCard = ({ product }) => {

    const { _id, image, price, rating, title, views, details, category, brand_name } = product;
    // console.log(product)

    const handleDelete = _id => {
        console.log(_id, 'hello');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://e-commerce-server-bbmemffin-sharminmily.vercel.app/alldata/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                        }
                    })

                console.log('deleted')

            }
        })

    }





    return (
        <div className="font-sans">
            <div className=" card card-side bg-base-100 shadow-xl">
                <figure><img className="h-48 w-72 mr-4" src={image} alt="Movie" /></figure>
                <div className="flex justify-evenly w-full  ">
                    <div className="text-start ml-4">
                        <h2 className="card-title text-orange-600 font-bold"> {category}</h2>
                        <p className="font-semibold">Brand Name: <span className="text-orange-600 font-serif">{brand_name}</span></p>
                        <p className="font-semibold">{title}</p>
                        <p className="font-semibold">Price: ${price}</p>
                        <p className="font-semibold">
                            <div className="flex items-center gap-[2px] text-red-700">
                                <p className="font-bold text-xl">{rating}</p>
                                <BsStarFill className="text-xl" />
                                <BsStarFill className="text-xl" />
                                <BsStarFill className="text-xl" />
                                <BsStarHalf className="text-xl" />
                            </div>
                        </p>
                        {/* details button */}
                        <Link to={`/myCart/${_id}`}><button className="btn mt-6 normal-case text-xl bg-orange-600 hover:bg-black text-white">Details</button></Link>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <Link to={`/updateProduct/${_id}`}>
                                <button className="btn text-2xl">
                                    <BiEditAlt />
                                </button>
                            </Link>
                            <button onClick={() => handleDelete(_id)}
                                className="btn bg-red-700 text-white rounded-xl hover:bg-black">
                                <MdDeleteForever className="text-2xl" />
                            </button>
                            <button className="btn">
                                <BsEyeFill className="text-2xl" />
                            </button>



                            {/* <Link to={`updateCoffee/${_id}`}>
                                <button className="btn">Edit</button>
                            </Link> */}
                            {/* <button
                                onClick={() => handleDelete(_id)}
                                className="btn bg-red-700">X</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCard;