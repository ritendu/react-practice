
import DashboardNavbar from "../components/Dashboard.Navbar"
import DashboardFooter from "../components/Dashboard.Footer"
const DashboardLayout = ({children})=>{
    return (
        <>
        <div>
         <DashboardNavbar/>
        </div>
        <div>
            {children}
        </div>
        <div>
        <DashboardFooter/>
        </div>
        </>
    )
}

export default DashboardLayout