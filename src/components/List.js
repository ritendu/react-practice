import {FaEdit,FaTrash} from 'react-icons/fa';

const List = ({items,removeItem})=>{
    console.log(items,"<------------")
    return (
       <div className="grocery-list">
        {items.map((item)=>{
            console.log(item,"??????????")
            return (
                <article key={item.id} className="grocery-item">
<p className="title">{item.title}</p>
<div className="btn-container">
    <button type="button" className="edit-btn"><FaEdit></FaEdit></button>
    <button type="button" className="edit-btn" onClick={()=>removeItem(item.id)}><FaTrash></FaTrash></button>
</div>
                </article>
            )
        })}
       </div>
    )
}

export default List