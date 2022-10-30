import { MyContext,MyContexts } from "../App"
const ComponentB =()=>{
    return(
        <div>
            <MyContext.Consumer>
                {(value)=>{
                    return (
                   <MyContexts.Consumer>
                    {(values)=>{
                        return `${value} ${values}`;
                    }}
                   </MyContexts.Consumer>     
                    )
                }}
            </MyContext.Consumer>
        </div>
    )
}

export default ComponentB