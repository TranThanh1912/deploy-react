import { useState } from 'react';
import './styles.css';
import imageup from './images/signup-image.jpg';
import { useNavigate } from 'react-router-dom';


function Signup() {
var input = {username:"",email:"",phone:"", password:"",repassword:"",}
   const history = useNavigate();
   const [username,setUsername]= useState('')
   const [email,setEmail]= useState('')
   const [phone ,setPhone]= useState('')
   const [password,setPassword]= useState('')
   const [repassword,setRePassword]= useState('')
   const [pathS,setPaths]= useState('Tôi đã là thành viên')
   const [path,setPath]= useState('')
   const [valErrors,setValErrors]= useState({
    username:'',
    email:'',
    phone:'',
    password:'',
    repassword:'',   
   })
   
   const handleUsernameChange =(e)=>{
        const err=valErrors
        if(err.username) delete err.username
        var  str =e.target.value
        if(str===""||str===undefined||str===null){
            err.username = 'Không được để trống';
        }
        else {
            var re = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/gm
            var bool = re.test(str)
            if (!bool) {
              err.username = 'Tên không hợp lệ';
            }
        }
        setUsername(str)
        setValErrors(err)   
   }
   
    const handleEmailchange = (e) =>{
        const err = valErrors;
        if(err.email) delete err.email;
        const str =e.target.value;
        if(str === undefined||str === ''||str===null){
            err.email = 'Không được để trống email';
        }
        else{
            var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        var bool = re.test(str)
        if (!bool) {
            err.email = 'Email không hợp lệ';
        }
        }
        setEmail(str)
        setValErrors(err)
   }  
   const handlePhoneChange =(e)=>{
        const err= valErrors;
        if(err.phone) delete err.phone;
        var str =e.target.value;
        if(str === undefined||str ===null||str===""){
           err.phone="Không để trống số điện thoại !"
        }
        else {
            var re = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/
            var bool = re.test(str)
            if (!bool) {
                err.phone = 'Số điện thoại không hợp lệ';
            }
        }
            setPhone(e.target.value)
            setValErrors(err)
        }  
   const handlePassWordChange =(e)=>{
        var err=valErrors;
        if(err.password) delete err.password;
        var str =e.target.value;
        if(str === undefined||str === ''||str===null){
            err.password="không được để trống mật khẩu !"
        }
        else{
            var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#_])[A-Za-z\d@$!%*?&]{8,}$/g
            var bool = re.test(str)
            if (!bool) {
                err.password = 'Mật khẩu cần tối thiểu 8 kí tự, 1 kí tự in hoa, 1 kí tự in thường và 1 kí tự đặc biệt';
            }
            if(str !== repassword){
                err.repassword = 'Mật khẩu xác nhận không chính xác'
            }
        }
        setPassword(str)
        setValErrors(err)
    }
    const handleRePassWordChange = (e) => {
        var err = valErrors;
        if(err.repassword) delete err.repassword;
        var str = e.target.value;
        if(str===undefined||str===null||str===""){
            err.repassword="Không để trống nhập lại mật khẩu";
        }
        else{
            if (str !== password) {
                err.repassword = 'Mật khẩu xác nhận không chính xác';
              }
        }
        setRePassword(str)
        setValErrors(err)
    }
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(repassword);
    console.log(valErrors);
    console.log(Object.keys(valErrors).length);
    console.log(input)

    const handelSubmit=(e)=>{
        
        if(Object.keys(valErrors).length===0){
           
            input.username= username;
            input.email=email ;
            input.phone= phone;
            input.password=password ;
            input.repassword=repassword;
            localStorage.setItem('input',JSON.stringify(input))
           
            history('\Signupcomfirm');
           
        }
        else{
            e.preventDefault();
        }
    }
    const handle =(e)=>{
        e.preventDefault();
        setPaths("Bạn chưa có tài khoản");

    }
     
    
    return (

        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form  action='Signupcomfirm'  className="register-form" id="register-form">
                                <div className="box">
                                    <div className="form-group">
                                        <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="username" id="name" placeholder="Your Name"   value={username} onChange={handleUsernameChange }  />
                                    </div>
                                    <p >{valErrors.username}</p> 
                                </div>
                                <div className="box">
                                    <div className="form-group">
                                        <label for="email"><i className="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Your Email"  value={email} onChange={handleEmailchange}/>
                                    </div>
                                    <p>{valErrors.email}</p>
                                </div>
                                <div className="box">
                                    <div className="form-group">
                                        <label for="phone"><i className="zmdi zmdi-phone"></i></label>
                                        <input type="number" name="phone" id="phone" placeholder="Your phone"  value={phone} onChange={handlePhoneChange}/>
                                    </div>
                                    <p>{valErrors.phone}</p>
                                </div>
                                <div className="box">
                                    <div className="form-group">
                                        <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password" value={password} onChange={handlePassWordChange}  />
                                    </div>
                                    <p>{valErrors.password}</p>
                                </div>
                                <div className="box">
                                    <div className="form-group">
                                        <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" value={repassword} onChange={handleRePassWordChange} />
                                    </div>
                                    <p>{valErrors.repassword}</p>
                                </div>
                                <div className="box">
                                    <div className="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term"  />
                                        <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="form-group form-button">
                                         <button onClick={handelSubmit}  className="form-submit">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={imageup} alt="sing up image"/></figure>
                            <a href=""  onClick={handle}  className="signup-image-link" >{pathS}</a>
                        </div>
                    </div>
                </div>
            </section>
    </div>
    
    );
}
export default Signup;