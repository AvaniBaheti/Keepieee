import React from 'react'
import './header.css'
import Hamburger from './Hamburger';
import Title from './Title';


export default function Header({open , setOpen , title}) {
   
    return (
        <div className="header">

            <div className="header-box">

                <Hamburger open={open} setOpen={setOpen} />

                <div className="componenttitle subComponent">

                <Title title={title} />

                </div>
            </div>
            
        </div>
    )
}
