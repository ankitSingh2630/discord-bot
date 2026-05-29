const validator = require("validator");

const validateSignupData = (req) => {

 const {
   firstName,
   lastName,
   username,
   emailId,
   password
 } = req.body;

 if(!firstName || !lastName ){
    throw new Error("Name required");
 }

 if(!username){
    throw new Error("Username required");
 }
 if(!validator.isEmail(emailId)){
    throw new Error("Invalid email");
 }

 if(!validator.isStrongPassword(password)){
    throw new Error(
      "Weak password"
    );
 }

 return true;
};

module.exports = {
 validateSignupData
};