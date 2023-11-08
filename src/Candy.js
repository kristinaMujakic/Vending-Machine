import React from "react";
import { Link } from "react-router-dom";

const Candy = () => {
    return (
        <div>
            <h3>Here is your candy</h3>
            <img
                src="https://media.giphy.com/media/l04LqI4vxMb0Fj6lTd/giphy-downsized-large.gif"
                alt="Candy"
            />
            <h1>
                <Link to="/">go back</Link>
            </h1>
        </div>
    );
};

export default Candy;
