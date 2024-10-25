import React from "react";
import PropTypes from "prop-types";

export default function Navbar({ children }){
    return(
        <div className="py-5 flex flex-wrap justify-between border-b border-black">
            <div className= "p-2">
                <span className="text-xl font-bold mx-7">Notes App</span>
            </div>
            <div>
                { children }
            </div>
        </div>
    );
};

Navbar.propTypes={
    children: PropTypes.node
};