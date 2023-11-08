import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <h1><Link to="/soda">Soda</Link></h1>
            <h1><Link to="/chips">Chips</Link></h1>
            <h1><Link to="/candy">Candy</Link></h1>
        </div>
    );
}
export default VendingMachine;