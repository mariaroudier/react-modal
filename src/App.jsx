import React, { useState } from "react";
import ReactModal from './lib/components/ReactModal'

function App() {

      const mockText = "Employee Created !"
      const [ isVisible, setVisibility ] = React.useState(false)

      const styleModal = ({
            background: '#fff',
      })
      const styleModalBg = ({
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
      })
      const styleText = ({
            color:'black'
      })

      const openModal = (e) => {
            e.preventDefault()
            setVisibility(true)
      }
      const closeModal = (isVisible) => {
            setVisibility(false)
            return isVisible
      }

      return (
            <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"space-around", height:"auto", marginTop:"50%"}}>
                  <span style={{margin:"20px", fontSize:"20px"}}>
                        Here is an action to call the modal
                  </span>
                  <button className="call-modal" onClick={openModal} style={{padding:"10px", background:"yellow"}}>Call the modal</button>
                  {isVisible && <ReactModal text={mockText} closeModal={closeModal} styleModal={styleModal} styleModalBg={styleModalBg} styleText={styleText}/>}
            </div>
      )
}

export default App;