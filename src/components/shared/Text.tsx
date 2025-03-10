import React, { FC } from "react";

interface TextProps {
    children: string;
}

const Text: FC<TextProps> = ({
    children
}) => {
    const message = children.split("\n").map((str, idx, arr) => {
        return (
            <React.Fragment key={idx}>
                {str}
                {idx !== arr.length - 1 && <br />}
            </React.Fragment>
        )
    })
    return (
        <div>
            {message}
        </div>
    )
}

export default Text;