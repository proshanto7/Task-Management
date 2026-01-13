import { useDispatch } from "react-redux";
import { auth } from "../../Firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../../redux/slices/userSlice";
import { useEffect } from "react";

function Layout({ children }) {
  const userInfo = auth
  console.log(userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        dispatch(addUser(user));
       
      }
    });
  }, []);

  return <div>{children}</div>;
}

export default Layout;
