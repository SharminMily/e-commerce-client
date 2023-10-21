const MoreDetails = () => {
    return (
        <div className="mb-20 mx-4">
            <h2 className="text-4xl pb-4 font-bold">More Details all <span className="text-orange-600">E-Commerce</span></h2>


            <div className="md:flex my-8 flex-row justify-center w-full h-[100%] bg-gray-200">
                <div className="w-full">
                    <img className="w-full h-full" src="https://i.ibb.co/JvgczhP/banner2.png" alt="" />
                </div>
                <div className="bg-orange-600 w-full text-white">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                E-commerce is synonymous with convenience
                            </div>
                            <div className="collapse-content">
                                <p>Consumers can shop for products and services from the comfort of their own homes, avoiding the hassle of driving to physical stores, finding parking, and waiting in long checkout lines. Moreover, e-commerce stores are open 24/7, allowing people to make purchases at any time that suits them.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                E-commerce opens up a world of products.
                            </div>
                            <div className="collapse-content">
                                <p>Consumers can access items from all over the world, which may not be available in local stores.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                E-commerce allows for detailed tracking of customer behavior.
                            </div>
                            <div className="collapse-content">
                                <p> Retailers can see what products are popular, where customers are coming from, and much more. This data can be used to make informed business decisions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MoreDetails;