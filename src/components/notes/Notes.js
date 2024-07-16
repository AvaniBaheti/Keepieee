import React from 'react';
import './notes.css';
import { useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { DeleteNote, UpdateNote, UpdatePinnedNote } from '../redux/actions/actions';

export default function Notes(props) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(DeleteNote(props.note.id));
    }

    const handleUpdateArchived = () => {
        dispatch(UpdateNote(props.note.id));
    }

    const handleUpdatePinned = () => {
        dispatch(UpdatePinnedNote(props.note.id));
    }

    return (
        <div className="container">
            <div className="container-body" onClick={() => { props.handleNote(props.note); props.setOpen(true) }}>
                <h3>{props.note.title}</h3>
                <br />
                {props.note.body ? (
                    <ReactMarkdown>{props.note.body}</ReactMarkdown>
                ) : (
                    <div />
                )}
            </div>
            <div className="options hide">
                <ul>
                    <li>
                        <i className="material-icons" title="delete" onClick={handleDelete}>delete</i>
                    </li>
                    <li>
                        <i className="material-icons" title={props.note.isArchived ? "unarchive" : "archive"} onClick={handleUpdateArchived}>
                            {props.note.isArchived ? "unarchive" : "archive"}
                        </i>
                    </li>
                    <li>
                        <i className="material-icons" title={props.note.isPinned ? "Remove Pin" : "Pin"} onClick={handleUpdatePinned}>
                            {props.note.isPinned ? "remove_pin" : "person_pin"}
                        </i>
                    </li>
                </ul>
            </div>
        </div>
    );
}
