import { useState } from "react"

const Toggle = (defaultValue)=>{
  const [show,setShow] = useState(defaultValue)
  const toggle = ()=>{
    
setShow(!show)
  }
  return {toggle,show}
}

export default Toggle