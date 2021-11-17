import { useContext } from "react";
import { AuthContext } from "../contexts/authProvider";

const useAuth = () => {
const auth = useContext(AuthContext);
return auth;
}

export default useAuth;