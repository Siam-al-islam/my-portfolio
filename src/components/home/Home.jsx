const Home = () => {
    return (
        <div className="mt-4 max-w-4xl">
            <div>
                <h1 className="text-xl font-semibold text-white uppercase">About Me</h1>
                <p className="text-white mt-2 font-light">Hey I'm Siam Al Islam.<br /> I am a passionate web developer specializing in JavaScript. Currently pursuing a degree in Computer Science and Engineering at Dhaka International University, I focus on building dynamic and responsive web applications. With a strong foundation in front-end development, I am dedicated to continuously learning and staying updated with the latest industry trends.
                </p>
            </div>
            <div className="">
                <div className="text-white text-2xl bg-[#4d4d4db4] w-fit px-3 py-1 rounded-md cursor-pointer">
                    <a href="https://github.com/Siam-al-islam" target="_blank"><i className="fa fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Home;