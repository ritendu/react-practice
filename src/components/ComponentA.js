// import {MyContext}  from '../App'
import ComponentB from "./ComponentB"
const ComponentA = ()=>{
    return (
        <div>
            {/* <MyContext.Consumer>
                {(value)=>{
                    return value
                }}
            </MyContext.Consumer> */}
            <ComponentB></ComponentB>
        </div>
    )
}

export default ComponentA