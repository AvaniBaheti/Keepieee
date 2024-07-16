import React, { useState } from 'react';
import { addNote } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function AddNote() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [hidden, setHidden] = useState(true);
    const [isArchived, setArchived] = useState(false);
    const [isPinned, setPinned] = useState(false);

    const dispatch = useDispatch();

    const handleSave = () => {
        if (title || body) {
            dispatch(addNote({
                title,
                body,
                isArchived,
                isPinned,
                id: uuidv4()
            }));
            resetForm();
        }
    }

    const resetForm = () => {
        setHidden(true);
        setArchived(false);
        setPinned(false);
        setTitle("");
        setBody("");
    }

    return (
        <div className="editor">
            <div className="title">
                <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    onClick={() => setHidden(false)}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            {!hidden && (
                <div className="body">
                    <textarea
                        placeholder="Add Description Here..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <div className="buttongroup">
                        <button
                            className="button"
                            onClick={() => setArchived(!isArchived)}
                        >
                            <i className="material-icons">{isArchived ? 'unarchive' : 'archive'}</i>
                        </button>
                        <button
                            className="button"
                            onClick={() => setPinned(!isPinned)}
                        >
                            <i className="material-icons">{isPinned ? 'remove_pin' : 'person_pin'}</i>
                        </button>
                        <button
                            className="button close"
                            type="button"
                            onClick={handleSave}
                        >
                            Save & Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
