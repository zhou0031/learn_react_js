import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./user_sign_up.css"


function App() {
  
  return (
    <>
      <div className="full-screen-container">
        <div className="sign-up-container">
          <div className="sign-up-title">Welcome 欢迎新用户</div>

          <div className="sign-up-input-group">
            <input name="email" id="email" 
            placeholder="Email 邮箱地址" /> 
            <div className="error-group">
              <div className="arrow"/>
              <p className="error-message">Email already existed/此用户已注册</p>
            </div>
          </div>   
            
          <div className="sign-up-input-group">
            <input name="password" id="password" 
            placeholder="Password 输入密码" />  
          </div>

          <div className="sign-up-input-group">
            <input name="password-confirm" id="password-confirm" 
            placeholder="Confirm password 再次输入密码确认" />  
            <div className="error-group">
              <div className="arrow"/>
              <p className="error-message">Passwords don't match／密码不一致</p>
            </div>
          </div>

          <div className="sign-up-button">
            <button>Sign up ／ 提交</button>
          </div>


        </div>
      </div>
    </>
  )
}

export default App;
