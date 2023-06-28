import './modal.css';
import  ReactDOM   from 'react-dom';
import React from 'react';

const ModalOverlay = props => {
    return(
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
    )
}

const BackDrop = props =>{
    return(
        <div className='backdrop'>

        </div>
    )
}

const portalElement = document.getElementById('overlays');
const Modal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop /> ,portalElement )}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> ,portalElement )}

        </React.Fragment>
    )
}

export default Modal;