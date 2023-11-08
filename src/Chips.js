import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
    return (
        <div>
            <h3>Here is your chips</h3>
            <img
                src="https://media.giphy.com/media/l4pM3zQtnbFU7GZOg/giphy.gif"
                alt="Chips"
            />
            <h1>
                <Link to="/">go back</Link>
            </h1>
        </div>
    );
};

export default Chips;
