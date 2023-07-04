// This function will be check response status in special cases like 404, 500 and etc.

const ErorrHandling = async statusCode => {
    if (statusCode == 404 || statusCode == 403)  {
      window.location.href = "/error-404";
    }
  
    else if (statusCode == 401){
      window.location.href = "/sign-in";
    }
  
    else if(statusCode == 500){
      window.location.href = "/error-500";
    }
  
  };
  
  export const Error = {
    ErorrHandling
  };