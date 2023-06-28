import React from 'react';
import './Login.scss';
//import { GoogleLogin } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faFacebook, faGoogle, faWindows } from "@fortawesome/free-brands-svg-icons";
import './Login.scss';

const Login = (props) => {

    {/*const handleGoogleLoginSuccess = (response) => {
          // Handle successful login with Google
          console.log(response);
        };
      
        const handleGoogleLoginFailure = (error) => {
          // Handle failed login with Google
          console.error(error);
        };*/}

    return (  //return 下面只能有一个div
        <div>
            <div>
                <h1 class="login">Log in</h1>
                <form action="" method="post">
                    <div>
                        <p>Email:<input type="email" id="email" name="email" required placeholder='johndoe@abc.com' autofocus></input></p>
                    </div>
                    <div>
                        <p>Password:<input type="password" id="pwd" name="pwd" required placeholder="8 digit length" autofocus></input></p>
                    </div>
                    <div className="restPassword">
                        <p>Forget password? Reset <a href="/reset"> here </a></p>
                    </div>
                    <div className="login">
                        <input input type="submit" value="Login" href="/myAccount"></input>
                    </div>
                </form>
            </div>

            <h2>OR</h2>
            <div class="exlink">
                <div>
                    <p><FontAwesomeIcon icon={faGoogle} style={{ color: "#ff0000", }} />  Login with your Google account</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faWindows} style={{ color: "#68a8d9", }} />  Login with your Google account </p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faFacebook} style={{ color: "#00508a", }} />  Login with your Microsoft account </p>
                </div>
            </div>
            {/* <FontAwesomeIcon icon={solid("google")} style={{color: "#ff0000",}} /> */}
        </div>

    )
};

export default Login;