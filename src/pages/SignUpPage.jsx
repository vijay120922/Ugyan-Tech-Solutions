import AuthLeft from "../components/authLeft";

const SignupPage=()=>{
    return(
        <>
            <div className="flex w-[100%] min-h-screen">
                <AuthLeft/>
                <div className="w-[50%] flex flex-col items-center gap-10 justify-center">
                    <div className="font-semibold text-2xl flex items-center justify-center flex-col">
                        <p>Join & Connect the Fastest</p>
                        <p>Growing Online Community</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignupPage;