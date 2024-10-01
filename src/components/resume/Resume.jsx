import ResumeNav from "../navbar/ResumeNav";

const Resume = () => {
    return (
        <div className="mt-5">
            <div>
                <h1 className="text-xl text-white font-semibold uppercase">Resume</h1>
                <div>
                    <ResumeNav />
                </div>
            </div>
        </div>
    );
};

export default Resume;