const Categories = ({filterItems})=>{
    return (
<div>
<button onClick={()=>filterItems('all')}>all</button>
    <button onClick={()=>filterItems('breakfast')}>Breakfast</button>
</div>
    )
}

export default Categories