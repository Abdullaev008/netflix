import React from 'react';
import "./modal.scss"
import ReactPlayer from 'react-player'


function Modal({ open, setOpen, urlData }) {

    console.log(urlData);

    return (
        <div className={`modal ${open == true ? 'modal-open' : ''}`} onClick={(evt) => {
            if (evt.target.matches('.modal')) {
                setOpen(false)
            }
        }}>
            <div className='modal-inner'>
                <ReactPlayer url={urlData} width={'100%'} height={'70vh'} />
                <button className='modal-btn' onClick={() => {
                    setOpen(false)
                }} >X</button>
            </div>
        </div>
    )
}

export default Modal