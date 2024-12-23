import { ChangeEvent, useState } from "react";
import style from "../styles/Login.module.css";
import CustomButton from "../reuseables/CustomButton.tsx";
import { Link } from "react-router-dom";

interface UserDetails {
  username: string;
  email: string;
  password: string;
}

const Login = () => {
    const loginDetails ={
        email: "" ,
        password: "",
    };

    const [data, setData] = useState(loginDetails);

        function handleChange(event: { target: { name: any; value: any; }; }){
          const { name, value } = event.target;
          // setData((prevData)=>({...prevData, [name]:value}));
          setData((prevData) => {
            return {...prevData, [name]: value };
          });
        }
        console.log(data);    
    

  return (
      <form action="">
        <div>
          <input
            type="text"
            name ="email"
            placeholder="Enter email"
            className={style.input}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="psw"
            name="password"
            placeholder="Enter password"
            className={style.input}
            onChange={handleChange}
            required
          />
        </div>
        <CustomButton style={style.btn} type="Submit" textContent="login" onClick={undefined} />
      </form>

  );
};
export default Login;
