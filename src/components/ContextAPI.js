import SinglePerson from "./SinglePerson"
const ContextAPI = ({people,removeItem})=>{

    return(
        <div>
            {people.map(people=>{
                return (
                    <SinglePerson key={people.id} {...people} removeItem={removeItem}></SinglePerson>
                )
            })}
           
        </div>
    )
}

export default ContextAPI