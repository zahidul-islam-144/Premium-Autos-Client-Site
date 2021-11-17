import { useContext } from "react";
import { AuthContext } from "../contexts/authProvider";

const useInfo = () => {
const userInfo = useContext(AuthContext);
return userInfo;
}

export default useInfo;