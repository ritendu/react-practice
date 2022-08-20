import { useState } from "react";

const File = ()=>{
    const [firstName,setFirstName] = useState('');
    const [email,setEmail] = useState('');
 const [people,setPeople] = useState([]);

     const handleSubmit = (e)=>{
       e.preventDefault();
const person = {id:new Date().getTime(),firstName,email};
setPeople((people)=>{
return [...people,person]
})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">FirstName</label>
<input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
<label htmlFor="email">Email</label>
<input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
<button type="submit">submit</button>
            </form>
            {
                people.map((person,index)=>{
                    const {id,firstName,email} = person
                    return (
                        <div key={id}>
                            <h4>{firstName}</h4>
                           
                            <p>{email}</p>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default File