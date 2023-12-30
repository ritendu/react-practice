import AuthHeader from "../components/AuthHeader"
import AuthFooter from "../components/AuthFooter"
const AuthLayout = ({children})=>{
    return (
        <>
          <div>
            <AuthHeader/>
         </div>
         <div>
          {children}
         </div>
         <div>
           <AuthFooter/>
         </div>
        </>

    )

}

export default AuthLayout

