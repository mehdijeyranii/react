import { useState } from "react";

type MessageProps = {
    name: string;
    age: number;
    isMarried: boolean;
};

const Message = (props: MessageProps) => {
    const [show, setShow] = useState<boolean>(true);
    const { name, age, isMarried } = props;

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div className="p-4 bg-gray-50/5 rounded-md">
            <button
                className="bg-rose-500 py-2 px-6 rounded w-full font-semibold"
                onClick={handleClick}
            >
                {show ? "Hidden" : "Show"}
            </button>
            {show && (
                <div className="min-h-36 p-3 bg-gray-50/5 mt-2 rounded">
                    <h5 className="text-2xl font-bold text-gray-50 mb-2">
                        Hello, {name}
                    </h5>
                    <p className="text-gray-400">You are {age} years old!</p>
                    <p className="text-gray-400">
                        {isMarried
                            ? "I am glad that you are married!"
                            : "I'm sorry you're still single!"}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Message;
