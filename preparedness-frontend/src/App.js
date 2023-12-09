import React, { useState } from "react"
import { Button, Input, Label} from 'reactstrap'
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  // Created a boolean for the modal and initializing it as false
  const [modal, setModal] = useState(false)
  // A state with name as a variable and initializes it as empty
  const [name, setName] = useState("")
  // handleChange function for the onChange, use e in the parameter for the event
  // call setName to target the input field and extract the value, setting it to state
  const handleChange = (e) => {
    setName(e.target.value)
  }
  // function to toggle the visibility of the modal
  const toggle = () => setModal(!modal)
  // function to reset the 'name' state
  const reset = () => setName("")

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" onChange={handleChange} value={name}/>
        </div>
        <Button onClick={toggle}>CLick Me</Button>
        <Button onClick={reset}>reset</Button>
        <ModalComponent modal={modal} toggle={toggle} name={name} />
      </div>
    </div>
  )
}

export default App
