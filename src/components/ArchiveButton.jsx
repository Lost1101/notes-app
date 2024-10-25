import React from "react";
import PropTypes from "prop-types";
import { MdOutlineArchive } from "react-icons/md";
import { MdOutlineUnarchive } from "react-icons/md";

export default function ArchiveButton({ id, onArchive, archived }){
    return(
        <button className="rounded-md p-1 w-full text-xl" onClick={() => onArchive(id)}>{archived ? <MdOutlineUnarchive className="text-yellow-700"/> : <MdOutlineArchive className="text-yellow-700"/>}</button>
    );
};

ArchiveButton.propTypes={
    id: PropTypes.number,
    onArchive: PropTypes.func,
    archived: PropTypes.bool
};