import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactModal from './lib/components/ReactModal'

function App() {

      const mockText = "Employee Created !"
      // const [active, setModal] = React.useState(false)

      const [ isVisible, setVisibility ] = React.useState(false)

      const handleClick = (e) => {
            e.preventDefault()
            setVisibility(true)
      }
      const handleVisibility = (isVisible) => {
            setVisibility(false)
            return isVisible
      }

      return (
            <div>
                  <span>
                        Here is an action for calling the modal
                  </span>
                  <button className="call-modal" onClick={handleClick}>Call the modal</button>
                  <ReactModal text={mockText} isVisible={isVisible} updateModal={handleVisibility}/>
            </div>
      )
}

export default App;