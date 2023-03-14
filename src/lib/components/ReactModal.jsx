
import React, { useState, useEffect, useRef } from 'react';
import iconClose from '../assets/icon_close.png'
import './ReactModal.css'

/**
* Function component that render modal with ... (multiple optionals params)
 * @listens {updateModal} hide - Handle state from parent for hide the modal component
* @param {boolean} isVisible - State for modal visibility

*/


function ReactModal({text, updateModal, isVisible}) {

      const newState = false
      const modalRef = useRef(null)

      /**
       * Add event listener when component is mount.
       * */
      function closeModalEvent(e) {
            updateModal(newState)

      }
      useEffect(() => {
            if(!isVisible) return;

            window.addEventListener("keyup", (e) => {
                  if (e.key === "Escape" && isVisible) {
                        closeModalEvent(e)
                        
                  }
            })

            const handleMouseClick = e => {
                  // if(!modalRef.current) return;
                  // if(!modalRef.current.contains(e.target)) {
                  //       closeModalEvent()
                  // }
            }

            document.addEventListener("click", handleMouseClick)

            return () => {
                  document.removeEventListener("click", handleMouseClick)
            }
      })


      return (
            <div className={isVisible === true ? 'body-modal opened' : 'body-modal' } style= {{ position: "relative"}}>
                  <div className="bg-modal">
                        <div className="modal" ref={modalRef}>
                              {text}
                              <img className='icon-close' src={iconClose} onClick={() => updateModal(newState)} alt='icon-close'/>
                        </div>
                  </div>
            </div>
      )      
}

export default ReactModal;