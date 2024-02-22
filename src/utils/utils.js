export const validateName = (value) => {


    if (!value) {
        return false;
    }
    else if (!/^[A-Z \n a-z]+$/.test(value)) {
        return false;
    }
    else {
        return true;
    }
}
//^0{3}123\d{6}$

export const validateDateOfBirth = (dateOfBirth) => {

    const inputDate = new Date(dateOfBirth)
    const currentDate = new Date()
    if (!dateOfBirth) {
        return false
    }
    else if (inputDate > currentDate) {
        return false
    }
    else {
        return true;
    }
}

// export const validateGender = (gender)=>{
//     if(gender == ""){
//         return false
//     }else{
//         return true
//     }
// }

export const validatePhoneNumber = (phoneNumber) => {

    if (!phoneNumber) {
        return false;
    }
    else if (!/^\d{10}$/.test(phoneNumber)) {
        return false
    }
    else {
        return true;
    }
}

export const validateEmailAddress = (emailAddress) => {

    if (!emailAddress) {
        return false;
    }
    else if (!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(emailAddress)) {
        return false;
    }
    else {
        return true
    }
}

export const validateStudentAddress = (studentAddress) => {

    console.log("student address", studentAddress)
    if (!studentAddress) {
        return false
    }
    else {
        return true
    }
}

export const validateDropDowns = (dropDownValue) => {

    console.log("Dropdown Value", dropDownValue)

    dropDownValue = dropDownValue.toLowerCase()

    if (dropDownValue === "select course" || dropDownValue === "select state" || dropDownValue === "select department") {
        return false
    }
    else {
        return true
    }
}

