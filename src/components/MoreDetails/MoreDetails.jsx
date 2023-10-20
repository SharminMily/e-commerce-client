const MoreDetails = () => {
    return (
        <div className="mb-20 mx-4">
            <h2 className="text-4xl pb-4 font-bold">More Details all <span className="text-orange-600">E-Commerce</span></h2>


            <div className="md:flex my-8 flex-row justify-center w-full h-[100%] bg-gray-200">
                <div className="w-full">
                    <img className="w-full" src="https://i.ibb.co/JvgczhP/banner2.png" alt="" />
                </div>
                <div className="bg-orange-600 w-full text-white">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MoreDetails;