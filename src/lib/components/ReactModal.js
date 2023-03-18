
import React from 'react';
import iconClose from '../assets/icon_close.png'
import './ReactModal.css'

/**
* Function component that render modal with multiple optionals params
* @listens {closeModal}closeModal - the function to close the modal
* @param {string} text - the text to display in the span of the modal
* @param {object} styleModal, styleModalBg, styleText - the objects to customise the style of the background of the modal, modal window and text.
*/

function ReactModal({
      text, 
      closeModal,
      styleModal, 
      styleModalBg, 
      styleText
}) {
      /*
      * Add event listener
      * @event closeModalEvent#keyup
      */
      const pushKey = () => {
            window.addEventListener("keyup", (e) => {
                  if (e.key === "Escape" || e.key === "Enter") {
                        closeModal()  
                  }
            })
      }
      pushKey()

      return (
            <div className='body-modal' style= {{ position: "relative"}}>
                  <div className="bg-modal" style={styleModalBg}>
                        <div className="modal" style={styleModal}>
                              <span style={styleText}>{text}</span>
                              <img className='icon-close' src={iconClose} onClick={() => closeModal()} onFocus={() => pushKey()}alt='icon-close' tabIndex="0" aria-label="Close"/>
                        </div>
                  </div>
            </div>
      )      
}

export default ReactModal;