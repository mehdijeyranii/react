import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <section className="container m-auto my-3">{children}</section>;
};

export default Container;
