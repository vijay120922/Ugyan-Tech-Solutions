const HomePage=({user})=>{
    return(
        <>
            <div className="w-full min-h-screen flex justify-center p-4">
                <div className="text-3xl font-bold">
                    Hello Admin {user?.firstName}...
                </div>
                <div>
                    <header>
                        Total Courses : 
                    </header>
                    <div>

                    </div>
                </div>
                
            </div>
        </>
    )
}
export default HomePage;