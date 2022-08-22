import { useState } from "react";

const File = ()=>{
    // const [firstName,setFirstName] = useState('');
    // const [email,setEmail] = useState('');
 const [people,setPeople] = useState([]);
 const [person,setPerson] = useState({firstName:'',email:'',age:''});
const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person,[name]:value})
}
     const handleSubmit = (e)=>{
       e.preventDefault();
if(person.firstName && person.email && person.age){
   const newPerson = {...person,id:new Date().getTime()};
   setPeople([...people,newPerson]);
   setPerson({firstName:'',email:'',age:''})
}
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">FirstName</label>
<input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange}></input>
<label htmlFor="email">Email</label>
<input type="email" id="email" name="email" value={person.email} onChange={handleChange}></input>
<input type="number" name="age" value={person.age} onChange={handleChange}></input>
<button type="submit">submit</button>
            </form>
            {
                people.map((person,index)=>{
                    const {id,firstName,email,age} = person
                    return (
                        <div key={id}>
                            <h4>{firstName}</h4>
                           
                            <p>{email}</p>
                            <p>{age}</p>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default File