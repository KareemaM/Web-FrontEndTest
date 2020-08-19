const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };
  
const isEmpty = (string) => {
if (string.trim() === '') return true;
else return false;
};

exports.validateSignupData = (data) => {
    let errors = {};

    if (isEmpty(data.email)) {
        errors.email = '-Invalid Email Address';
    } else if (!isEmail(data.email)) {
        errors.email = '-Invalid Email Address';
    }
    if(data.password !== data.cpassword)
        errors.mpassword = "Passwords don't match"
    if (isEmpty(data.password)) errors.password = '-Invalid Password';
    if (isEmpty(data.firstname)) errors.firstname = '-Invalid First Name';
    if (isEmpty(data.lastname)) errors.lastname = '-Invalid Last Name';
    if (isEmpty(data.country)) errors.country = '-Invalid Country';
    if (isEmpty(data.phone)) errors.phone = '-Invalid Phone Number';
    if (isEmpty(data.zip)) errors.card = '-Invalid Zip/Postal Code';
    if (isEmpty(data.month)) errors.birth = '-Invalid Birthdate';
    if (isEmpty(data.day)) errors.birth = '-Invalid Birthdate';
    if (isEmpty(data.year)) errors.birth = '-Invalid Birthdate';
    if (!data.check1) errors.check1 = '-You must sccept the terms & conditions and privacy policy';

    return {
            valid: Object.keys(errors).length === 0 ? true : false,
            errors
        };
};