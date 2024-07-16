import React, { useState } from 'react';
import Notes from '../notes/Notes';
import './home.css';

export default function PinnedNotes({ notes }) {


    if (!notes || notes.length === 0) {
        return <React.Fragment />;
    }

    return (
        <div style={{ marginTop: 20 }}>
            <p style={{ fontSize: 20, textAlign: "left", marginLeft: "5%" }}>
                Pinned Notes
            </p>
            <div className="notes">
                {notes.map(eachNote => (
                    !eachNote.isArchived && (
                        <div className="singlenote" key={eachNote.id}>
                            <Notes note={eachNote}  />
                        </div>
                    )
                ))}
            </div>
            <hr />
        </div>
    );
}
