import {MyContext}  from '../App'
const ComponentA = ()=>{
    return (
        <div>
            <MyContext.Consumer>
                {(value)=>{
                    return value
                }}
            </MyContext.Consumer>
        </div>
    )
}

export default ComponentA