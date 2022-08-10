import { useState } from "react"

const Array = ({array})=>{

const [expense,setTitle] = useState(array);
const clearItem = (id)=>{
const newItems = expense.filter(expense=>{
    return expense.id!==id
})
setTitle(newItems)
}
    return (
        <>
        {expense.map(expense=>{
            const {id, title}= expense;
            return (
                <div key={id}>
                    <ul>
                        <li>{title}
                        
                        </li>
                        <button type="button" onClick={()=>clearItem(id)}>clear item</button>
                    </ul>
                </div>
            )
        })}
        {/* <button type="button" onClick={()=>{setTitle([])}}>clear items</button> */}
        </> 
    )
}


export default Array