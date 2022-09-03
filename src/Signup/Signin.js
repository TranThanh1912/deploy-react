import'./styles.css';
import signin from'./images/signin-image.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin (){
    const history = useNavigate();
    const user= JSON.parse(localStorage.getItem('input'));
    const [username,setUsername]=useState('')
    const [password,setPassword] = useState('');
    const [path,setPath]=useState('Signin')
    const [checkU,setCheckU] = useState('')
    const [checkP,setCheckP] = useState('');
    const [valErrors,setVallErrors]=useState({
        username:"",
        password:"",
    })
    
    console.log(user);  
    const handleUsername = (e)=>{
        var err=valErrors;
        if(err.username) delete err.username;
        var str = e.target.value
        if(str=== undefined||str===null||str===""){
            err.username="Không để trống tên"
        }
        setUsername(str)
        setVallErrors(err)
        setCheckU('')
    }
    const handlePassWord =(e)=>{
        var err=valErrors;
        if(err.password) delete err.password;
        var str = e.target.value;
        if(str=== undefined||str ===null||str===""){
            err.password="Không để trống mật khẩu"
        }   
        setPassword(str)
        setVallErrors(err)
        setCheckP('')
    }
    const check=(e)=>{
            if (user.username===username&&user.password===password){
                setPath("Signincomfirm")
                history('\Signincomfirm')
            }
            if(user.username!==username){
                e.preventDefault();
                setCheckU("Nhập sai tên người dùng")
            }
            if(user.password!==password){
                e.preventDefault();
                setCheckP('Nhập sai mật khẩu !')
                
            }
    }
    console.log(valErrors);
    return(
        <div className="main">
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src={signin} alt="sing up image"/></figure>
                            <a href="Signup" className="signup-image-link">Create an account</a>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign in</h2>
                            <form action={path} className="register-form" id="login-form">
                                <div className="box">
                                    <div className="form-group">
                                        <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="your_name" id="your_name" placeholder="Your Name" value={username} onChange={handleUsername} />
                                    </div> 
                                    <p>{valErrors.username}</p> 
                                    <p>{checkU}</p>
                                </div>
                                <div className='box'>
                                    <div className="form-group">
                                        <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="your_pass" id="your_pass" placeholder="Password" value={password} onChange={handlePassWord}/>
                                    </div>
                                    <p>{valErrors.password}</p>
                                    <p>{checkP}</p>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                    <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                </div>
                                <div className="form-group form-button">
                                    <button className='form-submit' onClick={check}>login</button>
                                </div>
                            </form>
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Signin ;