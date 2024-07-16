import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Home from './NormalNotes';
import AddNote from '../notes/AddNote';
import PinnedNotes from './PinnedNotes';

export default function Index() {
    const notes = useSelector(state => state);

    const [pinnedNotes, setPinnedNotes] = useState([]);
    const [normalNotes, setNormalNotes] = useState([]);

    useEffect(() => {
        const pinned = [];
        const normal = [];

        notes.forEach(note => {
            if (note.isArchived) return;
            if (note.isPinned) {
                pinned.push(note);
            } else {
                normal.push(note);
            }
        });

        setPinnedNotes(pinned);
        setNormalNotes(normal);
    }, [notes]);

    const noNotes = pinnedNotes.length === 0 && normalNotes.length === 0;

    return (
        <div className="mainpage">
            <AddNote />
            {noNotes ? (
                <h4>
                    Notes you add appear here
                </h4>
            ) : (
                <>
                    <PinnedNotes notes={pinnedNotes} />
                    <Home notes={normalNotes} />
                </>
            )}
        </div>
    );
}
