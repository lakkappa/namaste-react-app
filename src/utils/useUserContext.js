import { createContext } from "react";

const useUserContext = createContext({
    loggedInUser: "default user"
});
export default useUserContext;