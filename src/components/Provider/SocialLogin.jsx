import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);

    const handleGoogle = (media) => {  
        media()
        .then(res => console.log(res))       
            // console.log("res.user")
        .catch(err => console.log(err))    
        
    }

    return (
        <div>
                <div className="divider">continue with</div>
            <div className="">
                <button onClick={() => handleGoogle (googleLogin)} className="btn btn-neutral btn-sm">Google</button>
                {/* <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-neutral btn-sm">Github</button> */}
            </div>
        </div>
    );
};

export default SocialLogin;