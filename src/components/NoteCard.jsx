import React from "react";
import PropTypes from "prop-types";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

export default function NoteCard({ id, title, body, createdAt, archived, onDelete, onArchive }) {
    return(
        <div className="border border-black rounded-md relative h-48">
            <div className="p-3">
                <div className="flex justify-between">
                    <h1 className="font-bold text-base truncate">{ title }</h1>
                    <div className="flex">
                        <ArchiveButton id={ id } onArchive={ onArchive } archived={ archived }/>
                        <DeleteButton id={ id } onDelete={ onDelete }/>
                    </div>
                </div>
                <p className="text-gray-700 text-xs">{ createdAt }</p>
                <div className="text-ellipsis">
                    <h4 className="text-sm line-clamp-6">{ body }</h4>
                </div>
            </div>
        </div>
    );
};

NoteCard.propTypes={
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
    onDelete: PropTypes.func,
    onArchive: PropTypes.func
};