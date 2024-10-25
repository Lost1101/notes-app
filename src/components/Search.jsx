import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Search({onSearch}){
    const [query, setQuery] = useState('');

    const handleQueryChange = (event) =>{
        setQuery(event.target.value);
    };

    const handleQuerySubmit = (event) =>{
        const { value } = event.target;
        onSearch(value);
    };

    return(
        <div>
            <form onChange={ handleQuerySubmit }>
                <input value={query} onChange={ handleQueryChange } type="text" id="search" placeholder="Search..." className="p-2 rounded-sm mx-5 border border-black"/>
            </form>
        </div>
    );
};

Search.propTypes={
    onSearch: PropTypes.func
};