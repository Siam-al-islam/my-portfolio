const Social = () => {
    return (
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
    );
};

export default Social;