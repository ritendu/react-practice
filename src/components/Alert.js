const Alert = ({type,msg})=>{
    console.log(type,"[[[[[[[[[[")
    return (
     <p className={`alert alert-${type}`}>{msg}</p>
    )
}

export default Alert