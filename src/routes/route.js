import AuthLayout from "../layouts/Auth.layout"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import NoContentPage from "../pages/NoContent"
import DashboardLayout from "../layouts/Dashboard.layout"

const AuthLayoutFunc = (comp) => {
    return <AuthLayout children={comp}></AuthLayout>
}

const DashboardLayoutFunc = (comp)=>{
    return <DashboardLayout children={comp}/>
}

export const route = [
    {
        path:'/dashboard',
        component:DashboardLayoutFunc(<Dashboard/>),
        protected:true,
        role:''
    },
    {
        path:'/login',
        component:AuthLayoutFunc(<Login/>),
        // component:<Login/>,
        protected:false,
        role:''
    },
    {
        path: "*",
        component: <NoContentPage />
     }
  
]