

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto my-8">
            <p className="text-center text-yellow-600 mb-2">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4 text-center">{heading}</h3>
        </div>
    );
};

export default SectionTitle;