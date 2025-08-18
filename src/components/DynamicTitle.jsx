import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Eco Adventure"; 

    if (location.pathname === "/") {
      title = "Eco Adventure | Home";
    } 
    else if (location.pathname.startsWith("/category/")) {
      title = "Eco Adventure | Home"; 
    } 
    else if (location.pathname.startsWith("/adventure/")) {
      title = "Eco Adventure | Adventure";
    } 
    else if (location.pathname === "/auth/login") {
      title = "Eco Adventure | Login";
    } 
    else if (location.pathname === "/auth/register") {
      title = "Eco Adventure | Register";
    } 
    else if (location.pathname === "/auth/forgetPassword") {
      title = "Eco Adventure | Forget Password";
    } 
    else if (location.pathname === "/auth/profile") {
      title = "Eco Adventure | Profile";
    } 
    else if (location.pathname === "/auth/profileUpdate") {
      title = "Eco Adventure | Update Profile";
    } 
    else {
      title = "Eco Adventure | Page Not Found";
    }

    document.title = title;
  }, [location]);

  return null;
};

export default DynamicTitle;
