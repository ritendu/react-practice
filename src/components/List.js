import {FaEdit,FaTrash} from 'react-icons/fa';

const List = ({items,removeItem,editItem})=>{
  
    return (
       <div className="grocery-list">
        {items.map((item)=>{
            console.log(item,"??????????")
            return (
                <article key={item.id} className="grocery-item">
<p className="title">{item.title}</p>
<div className="btn-container">
    <button type="button" className="edit-btn" onClick={()=>editItem(item.id)}><FaEdit></FaEdit></button>
    <button type="button" className="edit-btn" onClick={()=>removeItem(item.id)}><FaTrash></FaTrash></button>
</div>
                </article>
            )
        })}
       </div>
    )
}

export default List