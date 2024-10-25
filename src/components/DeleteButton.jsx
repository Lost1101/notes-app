import React from "react";
import PropTypes from "prop-types";
import { MdDeleteOutline } from "react-icons/md";

export default function DeleteButton({ id, onDelete }){
    return(
        <button className="rounded-md p-1 w-full text-xl" onClick={() => onDelete(id)}><MdDeleteOutline className="text-red-700"/></button>
    );
};

DeleteButton.propTypes={
    id: PropTypes.number,
    onDelete: PropTypes.func
};