// Implement a function whose input is a numeric code of an error, the output is a string with a message
//  500 => Server Error
//  401 => Authorization failed
//  402 => Server Error
//  403 => Access denied
//  404 => Not found

//  Use: switch case or object like a map structure

const getErrorMessage = code => {
    let message = '';
    switch (code) {
      case 500:
        message = 'Server Error';
        break;
      case 401:
        message = 'Authorization failed';
        break;
      case 402:
        message = 'Server Error';
        break;
      case 403:
        message = 'Access denied';
        break;
      case 404:
        message = 'Not found';
        break;
      default:
        message = 'Unknown error';
    }
    return message;
  };
  
console.log(getErrorMessage(500)); 
console.log(getErrorMessage(401)); 
console.log(getErrorMessage(404)); 

// map structure:

const errorMessages = {
    500: 'Server Error',
    401: 'Authorization failed',
    402: 'Server Error',
    403: 'Access denied',
    404: 'Not found',
    default: 'Unknown error'
  };
  
  const getErrorMessage2 = code => {
    return errorMessages[code] || errorMessages.default;
  };

console.log(getErrorMessage(402)); 
console.log(getErrorMessage(403)); 
console.log(getErrorMessage(404)); 

  