import Social from "../shared/Social";

const Home = () => {
    return (
        <div>
            <div className="mt-4 max-w-4xl">
                <div>
                    <h1 className="text-xl font-semibold text-white uppercase">About Me</h1>
                    <p className="text-white mt-2 font-light">Hey I'm Siam Al Islam.<br /> I am a passionate web developer specializing in JavaScript. Currently pursuing a degree in Computer Science and Engineering at Dhaka International University, I focus on building dynamic and responsive web applications. With a strong foundation in front-end development, I am dedicated to continuously learning and staying updated with the latest industry trends.
                    </p>
                </div>
                <Social />
            </div>
            <hr className="mt-8 border border-[#c2c2c220]" />
        </div>
    );
};

export default Home;