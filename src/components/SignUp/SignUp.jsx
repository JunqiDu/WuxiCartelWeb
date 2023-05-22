import React from 'react';
import './SignUp.scss';

const SignUp = (props) => {
  return (
    <div className='form'>
    <h1>Sign Up</h1>
    <form action="">
      <div className='personalInformation'>
        <h2>Personal</h2>
        <div><p>First name:</p>*<input type="text" id="fname" name="fname" required placeholder='John' autofocus></input><br></br></div>
        <div><p>Last name:</p>*<input type="text" id="lname" name="lname" required placeholder='Doe' autofocus></input><br></br></div>
        <div><p>Email:</p>*<input type="email" id="email" name="email" required placeholder='johndoe@abc.com' autofocus></input><br></br></div>
        <div><p>Phone number:</p>*<input type="tel" id="phone" name="phone" required placeholder='1XXXXXXXXXX' autofocus></input><br></br></div>
        <div><p>Password:</p>*<input type="password" id="pwd" name="pwd" required placeholder="8 digit length" autofocus></input><br></br></div>
        <div><p>Address:</p>*<input type="text" id="addr" name="addr" required placeholder='123 ABC Road' autofocus></input><br></br></div>
        <div><p>City:</p>*<input type="text" id="city" name="city" required placeholder='Guangzhou' autofocus></input><br></br></div>
        <div><p>Province:</p>*<input type="text" id="province" name="province" required placeholder='Guang Dong' autofocus></input><br></br></div>
        <div><p>Postcode:</p>*<input type="text" id="pcode" name="pcode" required placeholder='510000'autofocus></input><br></br></div>
      </div>
      <div className='paymentInformation'>  
        <h2>Payment</h2>
        <div><p>Name on Card:</p>*<input type="text" id="cardname" name="cardname" required placeholder="JonDoe" autofocus></input><br></br></div>
        <div><p>Card Number:</p>*<input type="text" id="cardnumber" name="cardnumber" required placeholder='456123789' autofocus></input><br></br></div>
        <div><p>Expiry Date:</p>*<span class="expiration">
            <input type="text" name="month" placeholder="MM" maxlength="2" size="2" />
            <span>/</span>
            <input type="text" name="year" placeholder="YY" maxlength="2" size="2" />
            </span></div>
      </div>
      <div className="agreement">
        <input type="checkbox" id="agreement" name="agreement"></input>
        <p>I agree with the <a href="" >privacy policy</a></p>
      </div>
        <div className="signUp">
            <input type="submit" value="Sign Up" href="/"></input>
        </div>
        
      
    </form>
    </div>
  )
};

export default SignUp;