import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const withLayout = (PageLayout)=>{
    return function withPage({...props}){
        return (
            <div>
                <Navbar/>
                <PageLayout/>
                <Footer/>
            </div>
        )
    }

}

export default withLayout