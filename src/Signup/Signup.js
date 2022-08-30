import { useState } from 'react';
import './styles.css';
import imageup from './images/signup-image.jpg';
import {regex,mediumRegex,enoughRegex} from './Regex';
import {Link}from 'react-router-dom';

function Signup() {
    var input = {name:"",email:"", pass:"",repass:"",}
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [pass,setPass] =useState('')
    const [repass,setRepass] =useState('')
    //
    const [path,setPath] =useState('Signup')
    //
    const [checkN,setCheckN] =useState('');
    const [checkE,setCheckE] =useState('');
    const [checkP,setCheckP] =useState('');
    const [checkR,setCheckR] =useState('');
    //
    const[colorN,setColorN]=useState({color:'red'});
    const[colorE,setColorE]=useState({color:'red'});
    const[colorP,setColorP]=useState({color:'red'});
    const[colorR,setColorR]=useState({color:'red'});

       
        
    
    input.name = name;
    input.email = email;
    input.pass=pass;
    input.repass=repass;
    const handleSubmit = (e) => {
       
             if(!name ==""&&!email ==""&&regex.test(email)&&!pass ==""&&mediumRegex.test(pass)&& true==enoughRegex.test(pass)&&!repass ==""&&repass===pass)
             {localStorage.setItem('input',JSON.stringify(input))
               setPath('Signupcomfirm')  
            } 
            else {
                if(name===""){
                    e.preventDefault(); 
                    setCheckN('Invalid Name !');
                    setColorN({color:'red'});
                    console.log(name);
                }
                if(!name==""){
                    e.preventDefault();
                     setCheckN('Valid Name !');
                     setColorN({color:'green'});
                     console.log(name)
                    }
                if(email===""){
                    e.preventDefault();
                     setCheckE('Invalid Email!');
                     setColorE({color:'red'})
                    }
                if(!email ==""&&regex.test(email)){
                    e.preventDefault();
                     setCheckE('Valid Email!');
                     setColorE({color:'green'})
                    }
                // if(!pass ==""&&true==mediumRegex.test(pass)&&true==enoughRegex.test(pass)){
                //     e.preventDefault(); 
                //     setCheckP('Valid Password!');
                //     setColorP({color:'green'})
                //     console.log(pass);
                // } 
                // if((false==mediumRegex.test(pass)||false==enoughRegex.test(pass))){
                //     e.preventDefault();
                //      setCheckP('Invalid Password!');
                //      setColorP({color:'red'})
                //}
                console.log(pass);
                console.log(mediumRegex.test(pass));
                console.log(enoughRegex.test(pass));
                if(pass==""){
                    e.preventDefault();
                     setCheckP('Invalid Password!');
                     setColorP({color:'red'})
                    } 
                if(repass===""){
                    e.preventDefault();
                     setCheckR('Invalid Re-Password!');
                     setColorR({color:'red'})
                    }
                if(!repass ==""&&repass===pass){
                    e.preventDefault();
                     setCheckR('Valid Re-Password!');
                     setColorR({color:'green'})
                    }
            }
    }
    
     
    
    return (

        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form  action={path} className="register-form" id="register-form">
                                <div className="box">
                                    <div className="form-group">
                                        <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="username" id="name" placeholder="Your Name"   value={name} onChange={(e)=>setName(e.target.value) }  />
                                    </div>
                                    <p style={colorN}>{checkN}</p>
                                </div>
                                <div className="box">
                                    <div className="form-group">
                                        <label for="email"><i className="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Your Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                    <p style={colorE}>{checkE}</p>
                                </div>
                                <div className="box">
                                    <div className="form-group">
                                        <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)}  />
                                    </div>
                                    <p style={colorP} >{checkP}</p>
                                </div>
                                <div className="box">
                                    <div className="form-group">
                                        <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" value={repass} onChange={(e)=>setRepass(e.target.value)} />
                                    </div>
                                    <p style={colorN} >{checkR}</p>
                                </div>
                                <div className="box">
                                    <div className="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                        <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="form-group form-button">
                                         <button onClick={handleSubmit}  className="form-submit">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={imageup} alt="sing up image"/></figure>
                            <a href=" " className="signup-image-link">I am already member</a>
                            
                        </div>
                    </div>
                </div>
            </section>
    </div>
    
    );
}
export default Signup;