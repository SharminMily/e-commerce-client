import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);

    const handleSocialLogin = (media) => {
        media()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="text-start">
            <button onClick={() => handleSocialLogin (googleLogin)} className="btn hover:bg-orange-600 bg-black text-white">GOOGLE</button>
            </div>
        </div>
    );
};

export default SocialLogin;