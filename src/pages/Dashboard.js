import { useSelector } from "react-redux"

const Dashboard =()=>{
    const state = useSelector(state=>console.log(state))
    return (
        <h1>Dashboard</h1>
    )
}

export default Dashboard