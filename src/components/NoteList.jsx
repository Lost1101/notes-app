import React from "react";
import PropTypes from "prop-types";
import NoteCard from './NoteCard';
import { showFormattedDate } from '../utils/data';

export default function NoteList({ title, notes, onDelete, onArchive, isArchived }){
    const filteredNotes = notes.filter(note => note.archived === isArchived);
    return (
        <div className='p-5'>
            <h1 className='text-center text-xl font-bold my-5'>{title}</h1>
                <div className='grid grid-cols-4 gap-4'>
                    {filteredNotes.length > 0 ? (
                        filteredNotes.map(note => (
                            <NoteCard
                              key={note.id}
                              id={note.id}
                              title={note.title}
                              body={note.body}
                              createdAt={showFormattedDate(note.createdAt)}
                              onDelete={onDelete}
                              onArchive={onArchive}
                              archived={note.archived}
                            />
                        ))) : (
                      <p className="col-span-4 text-center text-gray-500">No notes found</p>
                    )}
                </div>
        </div>
    );
};

NoteList.propTypes = {
    title: PropTypes.string,
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            body: PropTypes.string,
            createdAt: PropTypes.string,
            archived: PropTypes.bool,
        })
    ),
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
    isArchived: PropTypes.bool,
};