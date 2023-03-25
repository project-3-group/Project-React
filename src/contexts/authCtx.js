import { createContext, useState, useEffect, useContext } from "react";

export const userCtx = createContext({
  first_name: "",
  last_name: "",
  email: "",
  highest_score: 0,
});

export const authCtx = createContext({
  login: async (email, password) => {},
  logout: async () => {},
  updateUserData: async () => {},
  loginError: null,
  loginLoading: false,
  logoutError: null,
  logoutLoading: false,
  updateUserError: null,
  updateUserLoading: false,
});

export const useUser = () => {
  return useContext(userCtx);
};

export const useAuthCtx = () => {
  return useContext(authCtx);
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const [updateUserLoading, setUpdateUserLoading] = useState(true);
  const [loginError, setLoginError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [logoutError, setLogoutError] = useState(null);
  const [logoutLoading, setLogoutLoading] = useState(false);

  useEffect(() => {
    updateUserData();
  }, []);

  const updateUserData = async () => {
    try {
      setUpdateUserLoading(true)
      setUpdateUserError(null)
      const loginURL = process.env.REACT_APP_SERVER_URL + "/users/user";
      const resp = await fetch(loginURL, { credentials: "include" });

      if (resp.ok === false) return setUser(null);
      const data = await resp.json();
      setUser(data);
    } catch (error) {
      console.log(error);
      setUpdateUserError(error)
    }
    setUpdateUserLoading(false)
  };

  const login = async (email, password) => {
    setLoginError(null);
    setLoginLoading(true);
    try {
      const loginURL = process.env.REACT_APP_SERVER_URL + "/auth/login";
      const resp = await fetch(loginURL, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (resp.status === 400) {
        const data = await resp.json();
        throw data;
      }
      const data = await resp.json();
      setUser(data)
    } catch (error) {
      setLoginError(error);
    }
    setLoginLoading(false);
  };

  const logout = async () => {
    setLogoutError(null);
    setLogoutLoading(true);

    try {
      const loginURL = process.env.REACT_APP_SERVER_URL + "/auth/logout";
      const resp = await fetch(loginURL, {
        credentials: "include",
      });
      setUser(null);
      return resp;
    } catch (error) {
      setLogoutError(error);
    }
    setLogoutLoading(false);
  };

  return (
    <userCtx.Provider value={user}>
      <authCtx.Provider
        value={{
          login,
          logout,
          updateUserData,
          loginError,
          loginLoading,
          logoutError,
          logoutLoading,
          updateUserError,
          updateUserLoading
        }}
      >
        {children}
      </authCtx.Provider>
    </userCtx.Provider>
  );
}
export default AuthProvider;
