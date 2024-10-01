const Home = () => {
    return (
        <div>
            <div className="mt-4 max-w-4xl">
                <div>
                    <h1 className="text-xl font-semibold text-white uppercase">About Me</h1>
                    <p className="text-white mt-2 font-light">Hey I'm Siam Al Islam.<br /> I am a passionate web developer specializing in JavaScript. Currently pursuing a degree in Computer Science and Engineering at Dhaka International University, I focus on building dynamic and responsive web applications. With a strong foundation in front-end development, I am dedicated to continuously learning and staying updated with the latest industry trends.
                    </p>
                </div>
                <div className="mt-5">
                    <h1 className="text-[#ffffffd1] font-semibold uppercase">Connect With Me</h1>
                    <div className="mt-5 flex gap-4">
                        <div className="animation transition">
                            <a className="text-gray-300 text-2xl bg-[#4d4d4db4] px-3 py-1 rounded-md cursor-pointer hover:bg-[#4d4d4dfa]" href="https://github.com/Siam-al-islam" target="_blank"><i className="fa fa-brands fa-github"></i></a>
                        </div>
                        <div className="animation transition">
                            <a className="text-white text-2xl bg-[#0B66C3] px-3 py-1 rounded-md cursor-pointer " href="https://www.linkedin.com/in/siam-al-islam-052579216/" target="_blank"><i className="fa fa-brands fa-linkedin"></i></a>
                        </div>
                        <div className="animation transition">
                            <a className="text-white text-2xl bg-gradient-to-r from-yellow-600 via-red-500 to-pink-500 px-3 py-1 rounded-md cursor-pointer" href="https://www.instagram.com/may_be_siam_/" target="_blank"><i className="fa fa-brands fa-instagram"></i></a>
                        </div>
                        <div className="animation transition">
                            <a className="text-white text-2xl bg-[#0866FF] px-3 py-1 rounded-md cursor-pointer" href="https://www.facebook.com/siambro006/" target="_blank"><i className="fa fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-8 border border-[#c2c2c220]" />
        </div>
    );
};

export default Home;