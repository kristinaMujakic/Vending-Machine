import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
    return (
        <div>
            <h3>Here is your soda</h3>
            <img
                src="https://media.giphy.com/media/dRYBjtthrSEEg/giphy.gif"
                alt="Soda"
            />
            <h1>
                <Link to="/">go back</Link>
            </h1>
        </div>
    );
};

export default Soda;
