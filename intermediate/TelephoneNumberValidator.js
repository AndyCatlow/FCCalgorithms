// Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
  const checker = /^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/gm;
  return checker.test(str);
}

telephoneCheck("55 55-55-555-5");

// regex explanation here: https://www.codegrepper.com/code-examples/javascript/US+telephone+number+validator+javascript

// needs to be false "1 555)555-5555" as only one bracket & "555)-555-5555" & "(555-555-5555" & "(555-555-5555"
// needs to be false "(6054756961)" brackets in wrong place
// false "-1 (757) 622-7382" starts with -1
// false "10 (757) 622-7382" starts with 10 (is false now as too long)
// false "(275)76227382" too many digits after brackets
// false "55 55-55-555-5" hyphens in wrong places

// check bracket position:
// 3 digits in brackets, 7 digits after, 1 can be before
// can start with 1 but not -1 or 10

// try regex testing instead! too many criteria for individual testing
//

// // remove hyphens brackets and spaces and convert string to number
// let num = str.replace(/[- )(]/g,'')
// console.log(parseInt(num))
// // check if number
// if(isNaN(num))
// {console.log("false not a number")}  else
// {    // check if 10 digits
//     num.length === 10 ? console.log("true is 10") :
//       (num.length === 11 ?
//    // check if 11 digits is first digit 1
//         (num[0] == 1 ? console.log("true is 11 and starts with 1") : console.log("false 11 but doesn't start with 1") ) :
//           console.log("false not 10 or 11"))

//   }
