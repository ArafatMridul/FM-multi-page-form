import Option from "./Option";

const options = [
    { label: "your info" },
    { label: "select plan" },
    { label: "add-ons" },
    { label: "summary" },
];

const Options = () => {

    return (
        <div className="absolute flex items-center justify-center gap-4 top-8 md:top-24 lg:top-10 left-0 right-0 lg:left-8 lg:right-auto lg:grid lg:gap-7.5">
            {options.map((option, index) => (
                <Option key={index} label={option.label} number={index + 1} />
            ))}
        </div>
    );
};

export default Options;
