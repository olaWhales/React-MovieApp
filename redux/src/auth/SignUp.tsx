// import {ChangeEvent, useState } from "react";
// import style from "../styles/signup.module.css";
// import CustomButton from "../reuseables/CustomButton";
// import { Link, useNavigate} from "react-router-dom";

// interface userDetails  {
//     userName : String ; 
//     email : String ;
//     passWord : String ;

// }

// const SignUp = () => {


//     const navigate = useNavigate();

//     const userDetails = {
//         userName: "",
//         email: "",
//         password: "",
//     };

//         const [data, setData] = useState(userDetails)

//         function handleChange(event: { target: { name: any; value: any; }; }){
//             const {name, value} = event.target;
//             // setData((prevData)=>({...prevData, [name]:value}));
//             setData((prevData)=>{
//                 return {...prevData, [name]: value}
//             });
//         };

//         const handleSubmit = ()=>{
//           console.log("Submited ..........")
//           // setTimeout(()=> {
//             navigate("/login");
//           // },4000)
//         }
//         console.log(data)



//   return (
//     <div className="main">
//       <form onSubmit={handleSubmit} action="">
//         <div>
//           <input
//             type="text"
//             name="userName"
//             placeholder="Enter userName"
//             className={style.input}
//             onChange={handleChange}
//             // value={data.userName}
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             email ="email"
//             placeholder="Enter email"
//             className={style.input}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="psw"
//             password ="password"
//             placeholder="Enter password"
//             className={style.input}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <CustomButton style={style.btn} type="Submit" textContent="Submit" onClick={undefined} />
//       </form>
//       <div className={style.existUser}>
//         <span>Already have an account? </span>
//         <span>
//           <Link to={"/login"}>Login</Link>
//         </span>
//       </div>
//     </div>
//   );
// };
// export default SignUp;





import { ChangeEvent, useState } from "react";
import style from "../styles/signup.module.css";
import CustomButton from "../reuseables/CustomButton";
import { Link, useNavigate } from "react-router-dom";

interface UserDetails {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const navitgate = useNavigate();

  const initialUserDetails: UserDetails = {
    username: "",
    email: "",
    password: "",
  };
  //const [userData, setUserData] = useState<UserDetails>(initialUserDetails);
  const [userData, setUserData] = useState(initialUserDetails);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("submitted...");
    //setTimeout(() => {
      navitgate("/login");
   /// }, 2000);
  };

  console.log(userData);

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div>
          <input
            type="text"
            name="username"
            placeholder="enter username"
            className={style.input}
            onChange={handleChange}
            value={userData.username}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            className={style.input}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            className={style.input}
            onChange={handleChange}
            required
          />
        </div>
        <CustomButton style={style.btn} type="submit" textContent="submit" onClick={undefined} />
      </form>
      <div>
        <span className={style.sp}>Already have an account?</span>
        <span>
          <Link to={"/login"}>login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;