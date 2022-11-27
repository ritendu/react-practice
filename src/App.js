import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Alert from "./components/Alert";
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (!name) {
showAlert(true,'danger','Please Enter Your Name')
    } else if (name && isEditing) {
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      
    }
  };

const showAlert = (show=false,type="",msg="")=>{
setAlert({show,type,msg})
}  
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eg. eggs"
            value={name}
            onChange={(e) => {
              console.log(e.target.value,"<<<<<<<<")
              setName(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length>0 && (
      <div className="grocery-container">
      <List items={list}></List>
      <button className="clear-btn">clear items</button>
    </div>
      )}
      
    </section>
  );
}

export default App;
