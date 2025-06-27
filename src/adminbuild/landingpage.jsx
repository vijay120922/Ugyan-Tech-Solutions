import SideNavbar from "./sidenavbar";
const AdminLandingPage=()=>{
    return(
        <div className="min-w-screen min-h-screen bg-gray-400 relative">
            <SideNavbar/>
            <div className="w-full flex justify-center items-center p-2 border">
                <h1 className="text-white text-3xl">Welcome Boss!!</h1>
            </div>
        </div>
    )
}
export default AdminLandingPage;