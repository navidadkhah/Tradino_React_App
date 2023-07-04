// This is error handler js file that help us to handle errors in inputs form

import 'regenerator-runtime/runtime'

const EmailHandling = async name => {
    var error = {
      massage: '',
    };
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name) {
      if (name.match(mailformat)) {
        error.massage = '';
      } else {
        error.massage = 'enter valid email address';
      }
    } else {
      error.massage = 'this field is required';
    }
  
    return error;
};

const PasswordHandling = async name => {
    name += ""
    var error = {
      massage: '',
    };
  
    if (name != 'undefined') {
      if (name == '' || name.length == 0) {
        error.massage = 'this field is required';
      } else if (name.length < 6) { 
        error.massage = 'enter at least 6 characters';
      } else if (name.length >= 128) {  
        error.massage = 'maximum length is 128';
      } else {
        error.massage = '';
      }
    } else {  
      error.massage = 'this field is required';
    }
    
    return error;
};

const ConfirmPasswordHandling = async(password1, password2) => {
  password1 += "";
  password2 += "";

  var error = {
    massage: '',
  };

  if (password2 != 'undefined') {
    if (password2 == '' || password2.length == 0) {
      error.massage = 'this field is required';
    } else if (password1 != password2) { 
      error.massage = 'passwords not match';
     } else {
      error.massage = '';
    }
  } else {  
    error.massage = 'this field is required';
  }
  
  return error;
};
  
const UserNameHandling = async name => {
    name += "";
    var error = {
      massage: '',
    };

    if (name) {
      if (name != 'undefined') {
        if (name == '' || name.length == 0) {
          error.massage = 'this field is required';
        } else if (name.length < 3) {
          error.massage = 'enter at least 3 characters';
        } else if (name.length >= 128) {
          error.massage = 'maximum length is 128';
        } else {
          error.massage = '';
        }
      } else {
        error.massage = 'this field is required';
      }
    } else {
      error.massage = 'this field is required';
    }
  
    return error;
};
  
const VerificationCodeHandler = async code => {
    var error = {
      massage: '',
    };

    if (code) {
      if (code == '' || code.length == 0) {
        error.massage = 'this field is required';
      } else if (code.length != 4) {
        error.massage = 'enter 4 char';
      } else {
        error.massage = '';
      }
    } else {
      error.massage = 'this field is required';
    }
  
    return error;
};
  
  
export const Error = {
    UserNameHandling,
    EmailHandling,
    PasswordHandling,
    ConfirmPasswordHandling,
    VerificationCodeHandler,
};