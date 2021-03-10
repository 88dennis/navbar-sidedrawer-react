import React from 'react';
import './Backdrop.css'
import ContactInfo from '../ContactInfo/ContactInfo'
// import ButtonLinks from "../ButtonLinks/ButtonLinks"

const backDropComp = props => {

return (
<div className="backdrop_dms" onClick={props.canClose}>
</div>
)
}

export default backDropComp