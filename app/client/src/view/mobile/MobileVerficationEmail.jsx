// This page show us the verifivation by email,
//emailed the code to user and the user submit the code

import React,{useState} from 'react';
import { MobileButton } from "../../components/mobile-component/button/MobileButton.jsx";
import { Input } from "../../components/input/Input";
//error handling
import { Error } from '../ErrorHandling.js';


export default function MobileVerficationEmail() {
   // This hook, use for input class name when the client input the wrong data
   const [className, setClassName] = useState('input');
  
   // This hook use for save input data
   const [code, setCode] = useState({});
 
   // This hook use for check errors of input
   const [formErr, setFormErr] = useState({
     code_valid_Massage: '',
   });
 
   // This arrow function use for put data in our save data hook
   const handleInput = event => {
     event.preventDefault();
     const { name, value } = event.target;
     setCode({
       ...code,
       [name]: value,
     });
   };
 
   // This arrow function use for check errors in input
   const handleSubmit = async event => {
     event.preventDefault();
     const code_valid = await Error.VerificationCodeHandler(code['Code']);
 
     setFormErr({
       ...formErr,
       code_valid_Massage: code_valid.massage,
     });
     if (code_valid.massage != '') {
       setClassName('wrong-input');
     } else {
       setClassName('input');
     }
   };
 
  return (
    <div className='tradino'>
      <h1 className='tradino-title'>Tradino</h1>
      <div className="mb-verifyemail-content">
        <span className="mb-verificition-header">Verification email</span>
        <span className="mb-verificition-note">Please enter the code sent to</span>
        <span className="mb-verificition-note">Ali.Tavasolian@gmail.com</span>
        <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-verificition-input">
        <Input
            name="Code"
            placeholder="Example: 1234"
            type="text"
            handleChange={handleInput}
            className={className}
            error={formErr['code_valid_Massage']}
          />
        </div>
        <p className="mb-resend-code"> Resend code</p>
        <div className="mb-signup-button">
          <MobileButton className="mb-green-btn" name="Verify" />
        </div>
        </form>
      </div>
    </div>
  );
}
