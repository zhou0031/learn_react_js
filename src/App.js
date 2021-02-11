import { useState, useEffect } from "react"
import "./user_signup.css"
import * as EmailValidator from 'email-validator'


function App() {

  const [email,setEmail]=useState()
  const [password1,setPassword1]=useState()
  const [password2,setPassword2]=useState()
  const [emailErrorDislay, setEmailErrorDisplay]=useState({"visibility":"hidden"})
  const [passwordErrorDisplay, setPasswordErrorDisplay]=useState({"visibility":"hidden"})


  useEffect(()=>{
    if(password1!==password2) 
      setPasswordErrorDisplay({"visibility":"visible"})
    else
      setPasswordErrorDisplay({"visibility":"hidden"})
  },[password1,password2])

  useEffect(()=>{
    if(EmailValidator.validate(email)){
      fetch("google.com").then(r=>console.log(r))
      //setEmailErrorDisplay({"visibility":"visible"})
    }
    else
      setEmailErrorDisplay({"visibility":"hidden"})
  },[email])

  function isUserExited(email){
    console.log(email)
  }


  return (
    <>
      <div className="full-screen-container">
        <div className="sign-up-container">
          <div className="sign-up-title">Welcome</div>
          <div className="sign-up-input-group">
            <input name="email" id="email" placeholder="Email 邮箱地址" 
            onChange={e=>setEmail(e.target.value)}/> 
            <div className="error-group" style={emailErrorDislay}>
              <div className="arrow"/>
              <p className="error-message">Email already existed/此用户已存在</p>
            </div>
          </div>   

          <div className="sign-up-input-group">
            <input name="password" id="password" 
              placeholder="Password 输入密码" 
              onChange={e=>setPassword1(e.target.value)}
            />  
          </div>

          <div className="sign-up-input-group">

            <input name="password-confirm" id="password-confirm" 
              placeholder="Confirm password 再次输入密码确认" 
              onChange={e=>setPassword2(e.target.value)}
            />  


            <div className="error-group" style={passwordErrorDisplay}>
              <div className="arrow"/>
              <p className="error-message">Passwords don't match／密码不一致</p>
            </div>
          
          </div>

          <button className="sign-up-button">Sign up ／ 提交</button>
          
          <div className="cancel-link">
            <a href="/">Cancel / 放弃</a>
          </div>  
        </div>
      </div>
    </>
  )
}

export default App;
