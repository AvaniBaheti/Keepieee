import React, { useState } from 'react'
import Notes from '../notes/Notes'
import './home.css'

export default function Home({notes}) {
    
    if(notes.length===0){
        return(
            <div></div>
        )
    }
    return (
        <div>
            <p style={{ fontSize: 20, textAlign: "left", marginLeft: "5%" }}>
                Others
            </p>
            <div className="notes">
                {notes.map(eachNote => (
                    !eachNote.isArchived && (
                        <div className="singlenote" key={eachNote.id}>
                            <Notes note={eachNote} />
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
