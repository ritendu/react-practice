
const Item = ({items})=>{

  const showhide=(id)=>{
   
const newItems = items.filter(item=>{
    return item.id!==id
})
return newItems
  }
    return (
<>
{items.map(d=>{
    return (
        <div>
            <h2 key={d.id}>{d.name}</h2>
        <button type="button" onClick={showhide}>hide/show</button>
        </div>
        
    )
})}
</>
    )
}

export default Item