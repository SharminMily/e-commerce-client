import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { useContext } from 'react';

const PrivateRouter = ({ children }) => {
   
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="text-center py-8"><span className="loading loading-spinner loading-lg "></span></div>
    }


    if (!user?.email) {
        return <Navigate to="/singUp"></Navigate>
    }


    return children;
};

export default PrivateRouter;