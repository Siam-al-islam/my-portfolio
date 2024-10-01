const Resume = () => {
    return (
        <div className="mt-5">
            <div>
                <h1 className="text-xl text-white font-semibold uppercase">Resume</h1>
            </div>
            {/* languages  */}
            <div className="mt-3">
                <h2 className="text-[#8a8a8a] font-semibold">Languages</h2>
                <div className="flex gap-10 mt-2 flex-wrap">
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/x7TFSQ6/js-6b623694.png" alt="" />
                        <h3 className="text-white text-[14px]">Javascript</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/GCfdM0S/c-7491b221.png" alt="" />
                        <h3 className="text-white text-[14px]">C/C++</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/yXdLzsS/html-cc248267.png" alt="" />
                        <h3 className="text-white text-[14px]">HTML</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/f89vK8w/css-5ca147ab.png" alt="" />
                        <h3 className="text-white text-[14px]">CSS</h3>
                    </div>
                </div>
            </div>
            <hr className="border border-[#d4d4d415] mt-4" />
            {/* Frameworks  */}
            <div className="mt-3">
                <h2 className="text-[#8a8a8a] font-semibold">Frameworks</h2>
                <div className="flex gap-10 mt-2 flex-wrap">
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/Tmc9tw9/react-3c091c87.png" alt="" />
                        <h3 className="text-white text-[14px]">React.js</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/xSM86dK/node-2a684569.png" alt="" />
                        <h3 className="text-white text-[14px]">Node.js</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/ww8XPSL/next-JS-ae17f3b7.png" alt="" />
                        <h3 className="text-white text-[14px]">Next.js</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/ChVvLMY/express-5ee3042e.png" alt="" />
                        <h3 className="text-white text-[14px]">Express.js</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/hf9PXSz/tailwind-7b2ac92f.png" alt="" />
                        <h3 className="text-white text-[14px]">Tailwind CSS</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/nkrSkzQ/sass-32e015a3.png" alt="" />
                        <h3 className="text-white text-[14px]">SCSS</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/RCBPzxN/bs-1a8708b7.png" alt="" />
                        <h3 className="text-white text-[14px]">Bootstrap</h3>
                    </div>
                </div>
            </div>
            <hr className="border border-[#d4d4d415] mt-4" />
            {/* Databases  */}
            <div className="mt-3">
                <h2 className="text-[#8a8a8a] font-semibold">Databases</h2>
                <div className="flex gap-10 mt-2 flex-wrap">
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/TcGNJcq/mg-5c6fa460.png" alt="" />
                        <h3 className="text-white text-[14px]">MongoDB</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/hZ16Q62/firebase-beeb8615.png" alt="" />
                        <h3 className="text-white text-[14px]">Firebase</h3>
                    </div>
                </div>
            </div>
            <hr className="border border-[#d4d4d415] mt-4" />
            {/* Tools  */}
            <div className="mt-3">
                <h2 className="text-[#8a8a8a] font-semibold">Tools</h2>
                <div className="flex gap-10 mt-2 flex-wrap">
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/tpkBDWS/vs-7c024993.png" alt="" />
                        <h3 className="text-white text-[14px]">VS Code</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-7" src="https://i.ibb.co.com/MMFrb4c/figma-957c0ab9.png" alt="" />
                        <h3 className="text-white text-[14px]">Figma</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;