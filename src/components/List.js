const List = ({people})=>{
    console.log(people,"people")

    return <>{people.map(people=>{
        return (
        <div key={people.id}>
           <img src={people.image} alt={people.name}></img>
            <p>{people.name}</p>
            <p>{people.age}</p>
           
            </div>)
    })}</>
}

export default List