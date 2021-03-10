import React from 'react';
import { Link } from "react-router-dom";
import './Modal.css'

//GOES WITH A BACKDROP
const Modal = (props) => {
    
    return (

        <>
    <div className="modal2">
       
          
        <section className="modal_content">
        <div className="modalHeader">
        <h1>{props.title}</h1>
        </div>
            <section className="sectionContent">
            {props.children}
            CONTENT
            </section> 
            <section className="modal_actions">
        <button className="modalButtons" onClick={props.onCancel}>{props.backBtn}</button>

        {/* {props.canCancel && <button className="modalButtons" onClick={props.handlePageChange("UserPage")}>{props.backBtn}</button>} */}
        {/* {props.canConfirm && <Link to={"/admin/" + props.nameParams + "/userpage/"}> */}
        {/* <button className="modalButtons" onClick={props.handlePageChange("UserPage")}>{props.homeBtn}</button></Link>}         */}
        </section>
        </section> 

       
    </div>
    </>
)
};

export default Modal