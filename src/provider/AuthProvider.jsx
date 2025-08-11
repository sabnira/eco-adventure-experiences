
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase/firebase.config"; 

const AuthProvider = ({children}) => {


    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createNewUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;