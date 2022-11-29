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
      showAlert(true,'success','item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

const showAlert = (show=false,type="",msg="")=>{
setAlert({show,type,msg})
}  
const clearList = ()=>{
  showAlert(true,'danger','empty list');
  setList([]);
}
const removeItem = (id)=>{
  const newList = list.filter((item)=>item.id!==id);
showAlert(true,'danger','item removed');
setList(newList)
}
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
      <List items={list} removeItem={removeItem}></List>
      <button className="clear-btn" onClick={clearList}>clear items</button>
    </div>
      )}
      
    </section>
  );
}

export default App;
