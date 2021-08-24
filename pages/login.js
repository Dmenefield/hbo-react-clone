/* eslint-disable @next/next/no-img-element */
import { useStateContext } from "../components/HBOProvider";
import ls from 'local-storage';
import {v4} from 'uuid';
import router from "next/router";
import Login from "../components/UI/Login/Login";


const LoginPage = () => {

  return (
        <Login/>
  );
}
export default LoginPage
