/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateProduct = () => {
    const product = useLoaderData();

    // console.log(product)
    const { _id, image, price, rating, title, views, details, category, brand_name } = product;


    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const UpdateProduct = { name, quantity, category, details, photo }

        console.log(UpdateProduct);

        // send data to the server
        fetch(`https://e-commerce-server-bbmemffin-sharminmily.vercel.app/allData/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0)
                    Swal.fire({
                        title: 'Success!',
                        text: 'product Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Added'

                    })
            })

    }



    return (
        <div>

            <div className="bg-[#F4F3F0] p-20">
                <h2 className="text-3xl font-extrabold mb-6">Update Product: <span className="text-orange-600">{brand_name}</span></h2>
                <form onSubmit={handleUpdateProduct}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={brand_name} placeholder="brand name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" defaultValue={price} placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Ratting</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" defaultValue={rating} placeholder="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={image} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add card" className="btn btn-block bg-orange-600 text-white hover:bg-black" />

                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;