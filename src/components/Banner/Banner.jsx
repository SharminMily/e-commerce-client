/* eslint-disable react/no-unknown-property */
import './Banner.css'
const Banner = () => {
    return (
        <div className='w-[100%]'>

            <div className="hero w-[100%] min-h-screen" >
                <div className="hero-overlay bg-opacity-60">

                </div>
                <div className="md:flex flex-row justify-between items-center text-white gap-10">
                
                    <div className="md:text-left lg:pr-32 ">
                        <h1 className="mb-5 text-5xl font-bold ">Hello there</h1>
                        <p className="mb-5 md:text-xl text-sm md:w-96">In the rapidly evolving digital age, e-commerce has emerged as a transformative force, revolutionizing the way we shop, conduct business, and interact with the world of retail. This dynamic industry has become a cornerstone of our daily lives, offering unprecedented convenience, choice, and accessibility.</p>
                        <button className="md:p-4 text-sm  md:text-xl rounded-xl p-2 bg-orange-700 text-white">Welcome</button>
                    </div>

                    <div className="md:ml-0 ml-20 pt-2">
                        <img className='rounded-full h-32 w-32 md:w-80 md:h-[50vh]' src="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.webp?b=1&s=170667a&w=0&k=20&c=ZhlW6F6fSu42EG13PO0hkgV0L-MqHipJm1hT0yaRl9U=" alt="" />
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Banner;