import { useState } from 'react';
import './styles.css';
import imageup from './images/signup-image.jpg';
import {regex,mediumRegex,enoughRegex} from './Regex';

function Signup() {
    var input = {name:"",email:"", pass:"",repass:"",}
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [pass,setPass] =useState('')
    const [repass,setRepass] =useState('')
    const [path,setPath] =useState('Signup')
    input.name = name;
    input.email = email;
    input.pass=pass;
    input.repass=repass;
    const handleSubmit = () => {
        
         if(!name=="" &&(!email==""&&regex.test(email) )&&(!pass==""&&mediumRegex.test(pass)&& true==enoughRegex.test(pass))&&!repass=="")
             {localStorage.setItem('input',JSON.stringify(input))
              setPath('Signupcomfirm')
            }   
    }
    
    return (

        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form action={path}  className="register-form" id="register-form">
                                <div className="form-group">
                                    <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="username" id="name" placeholder="Your Name"   value={name} onChange={(e)=>setName(e.target.value)}  />
                                </div>
                                <div className="form-group">
                                    <label for="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                    
                                </div>
                                <div className="form-group">
                                    <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)}  />
                                </div>
                                <div className="form-group">
                                    <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" value={repass} onChange={(e)=>setRepass(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <button onClick={handleSubmit}  className="form-submit" >Register</button>
                                    
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={imageup} alt="sing up image"/></figure>
                            <a href="Signin" className="signup-image-link">I am already member</a>
                            
                        </div>
                    </div>
                </div>
            </section>
    </div>
    
    );
}
export default Signup;