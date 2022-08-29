import Signin from "./Signup/Signin";
import Signup from "./Signup/Signup"; 
import Signincomfirm from "./Confirm/Siginconfirm";
import Signupcomfirm from "./Confirm/Signupconfirm";
import {  Route,Routes} from "react-router-dom";
function App() {
  return(
    
   <>
      <Routes>
          <Route index element= {<Signup />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Signupcomfirm" element={<Signupcomfirm />} />
          <Route path="Signinconfirm" element={<Signincomfirm />} />
      </Routes>
      
    </>
      
    
  )   
}

export default App;