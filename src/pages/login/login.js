import React from 'react'
import './login.scss'

class Login extends React.Component{
    render(){
        return (
            <div className="login-wrap">
                <div className="login-header">
                    登录
                    <i className="page-return"></i>
                </div>

                <div className="login-form">

                    {/* 用户名 */}
                    <div className="form-item">
                        <div className="input-wrap">
                            <i className="input-icon icon-phone"></i>
                            <div className="input-box">
                                <input type="text" placeholder="请输入用户名"/>
                            </div>
                        </div>
                    </div>

                    {/* 密码 */}
                    <div className="form-item">
                        <div className="input-wrap">
                            <i className="input-icon icon-key"></i>
                            <div className="input-box">
                                <input type="text" placeholder="请输入验证码"/>
                            </div>
                        </div>
                    </div>

                    {/* 登录 */}
                    <div className="form-item">
                        <button className="login-btn">登录</button>
                    </div>
                </div>
            </div>
        )
    }

    inputFocus(e){
        setTimeout(()=>{
            e.currentTarget.scrollIntoViewIfNeeded();
        }, 400)
    }
}

export default Login