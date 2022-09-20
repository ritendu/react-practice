const SinglePerson = ({id,title,desc,category,removeItem})=>{
    console.log(id,"id")
    return (
        <div>
{<h1>{title}</h1>}
{<p>{desc}</p> }
<button onClick={()=>removeItem(id)}>remove</button>
        </div>

    )
}

export default SinglePerson