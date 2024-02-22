import { useEffect, useState } from "react";
import { v4 } from "uuid";
import {
  validateDateOfBirth,
  validateName,
  validatePhoneNumber,
  validateEmailAddress,
  validateStudentAddress,
  validateDropDowns,
} from "../../utils/utils";

import Header from "../header/Header";
import {
  Input,
  Label,
  InputFieldWrapper,
  GenderWrapper,
  Paragraph,
  TextArea,
  Select,
  Span,
  FromWrapper,
  MainWrapper,
  Button,
  PhoneDiv,
} from "./studentRecordStyles";

const StudentRecords = () => {
  const [studentList, setStudentList] = useState([]);

  //student state
  const [student, setStudent] = useState({
    fName: "",
    lName: "",
    gender: "",
    dateOfbirth: "",
    phoneNumber: 0,
    email: "",
    address: "",
    state: "",
    course: "",
    department: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  //error state
  const [error, setError] = useState({
    fName: false,
    lName: false,
    gender: false,
    dateOfbirth: false,
    phoneNumber: false,
    email: false,
    address: false,
    state: false,
    course: false,
    department: false,
  });

  //---------------------------------handle blur function-------------------------------------
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name == "fName" || name == "lName") {
      if (!validateName(value)) {
        setError({ ...error, [name]: true });
      } else {
        setError({ ...error, [name]: false });
      }
    }

    if (name == "dateOfbirth") {
      if (!validateDateOfBirth(value)) {
        setError({ ...error, [name]: true });
      } else {
        setError({ ...error, [name]: false });
      }
    }

    if (name == "phoneNumber") {
      if (!validatePhoneNumber(value)) {
        setError({ ...error, [name]: true });
      } else {
        setError({ ...error, [name]: false });
      }
    }

    if (name == "email") {
      if (!validateEmailAddress(value)) {
        setError({ ...error, [name]: true });
      } else {
        setError({ ...error, [name]: false });
      }
    }

    if (name == "address") {
      if (!validateStudentAddress(value)) {
        setError({ ...error, [name]: true });
      } else {
        setError({ ...error, [name]: false });
      }
    }

    if (name == "state" || name == "course" || name == "department") {
      if (!validateDropDowns(value)) {
        setError({ ...error, [name]: true });
      } else {
        setError({ ...error, [name]: false });
      }
      if (name == "department") {
        for (let value of Object.values(error)) {
          if (value) {
            setIsButtonDisabled(true);
            return;
          }
        }
        setIsButtonDisabled(false);
      }
    }
  };

  //------------------------------------handleChange function---------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { ...student, id: v4(), edit: false };
    setStudentList([...studentList, obj]);
    e.target.reset();
    setIsButtonDisabled(true);
  };

  useEffect(() => {
    if (localStorage.getItem("studentList")) {
      if (studentList.length) {
        const localStorageStudentList = JSON.parse(
          localStorage.getItem("studentList")
        );
        localStorageStudentList.push(studentList[studentList.length - 1]);
        localStorage.setItem(
          "studentList",
          JSON.stringify(localStorageStudentList)
        );
      }
    } else if (studentList.length) {
      localStorage.setItem("studentList", JSON.stringify(studentList));
    }
  }, [studentList]);

  console.log("studnet list", studentList);

  //----------------------------------------return-----------------------------------------------
  return (
    <div>
      <div>
        <Header />

        <MainWrapper>
          <FromWrapper>
            <form
              action=""
              name="studentForm"
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "",
              }}
            >
              <InputFieldWrapper>
                <Label htmlFor="fName">First Name</Label>
                <Input
                  type="text"
                  name="fName"
                  id="fName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </InputFieldWrapper>
              {error.fName ? <Span>Please Enter Valid First Name</Span> : ""}

              <InputFieldWrapper>
                <Label htmlFor="lName">Last Name</Label>
                <Input
                  type="text"
                  name="lName"
                  id="lName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </InputFieldWrapper>
              {error.lName ? <Span>Please Enter Valid Last Name</Span> : ""}

              <GenderWrapper>
                <Paragraph>Gender</Paragraph>

                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />
                <Label htmlFor="male">Male</Label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />
                <Label htmlFor="male">Female</Label>
              </GenderWrapper>

              <InputFieldWrapper>
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  type="date"
                  name="dateOfbirth"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputFieldWrapper>
              {error.dateOfbirth ? <Span>Please Enter Valid Date</Span> : ""}

              <InputFieldWrapper>
                
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputFieldWrapper>
              {error.phoneNumber ? (
                <Span>Please Enter Valid Phone Number</Span>
              ) : (
                ""
              )}
              <InputFieldWrapper>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@example.com"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </InputFieldWrapper>
              {error.email ? <Span>Please Enter Valid Email Address</Span> : ""}

              <InputFieldWrapper>
                <Label htmlFor="address">Address</Label>
                <TextArea
                  name="address"
                  id="address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                ></TextArea>
              </InputFieldWrapper>
              {error.address ? <Span>Please Enter valid Address</Span> : ""}

              <InputFieldWrapper>
                <Label htmlFor="state">State</Label>
                <Select
                  name="state"
                  id="state"
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <option hidden selected>
                    {" "}
                    Select State
                  </option>
                  <option value="andhra-pradesh">Andhra Pradesh</option>
                  <option value="arunachal-pradesh">Arunachal Pradesh</option>
                  <option value="assam">Assam</option>
                  <option value="andaman-and-nicobar-islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="chandigarh">Chandigarh</option>
                  <option value="chhattisgarh">Chhattisgarh</option>
                  <option value="dadra-and-nagar-haveli-and-daman-and-diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="delhi">Delhi</option>
                  <option value="goa">Goa</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="haryana">Haryana</option>
                  <option value="himachal-pradesh">Himachal Pradesh</option>
                  <option value="jharkhand">Jharkhand</option>
                  <option value="jammu-and-kashmir">Jammu and Kashmir</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="kerala">Kerala</option>
                  <option value="ladakh">Ladakh</option>
                  <option value="madhya-pradesh">Madhya Pradesh</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="manipur">Manipur</option>
                  <option value="meghalaya">Meghalaya</option>
                  <option value="mizoram">Mizoram</option>
                  <option value="nagaland">Nagaland</option>
                  <option value="odisha">Odisha</option>
                  <option value="punjab">Punjab</option>
                  <option value="puducherry">Puducherry</option>
                  <option value="rajasthan">Rajasthan</option>
                  <option value="sikkim">Sikkim</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="telangana">Telangana</option>
                  <option value="tripura">Tripura</option>
                  <option value="uttar-pradesh">Uttar Pradesh</option>
                  <option value="uttarakhand">Uttarakhand</option>
                  <option value="west-bengal">West Bengal</option>
                </Select>
              </InputFieldWrapper>
              {error.state ? <Span>Please Select State</Span> : ""}

              <InputFieldWrapper>
                <Label htmlFor="course">Course</Label>
                <Select
                  name="course"
                  id="course"
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <option hidden selected>
                    {" "}
                    Select Course
                  </option>
                  <option value="Bsc">Bachelors of Science</option>
                  <option value="Msc">Master of Science</option>
                  <option value="Ba">Bachelors of Arts</option>
                  <option value="Ma">Master of Arts</option>
                  <option value="Bcom">Bachelors of Commerce</option>
                  <option value="Mcom">Master of Commerce</option>
                  <option value="Bca">Bachelors of Computer Application</option>
                  <option value="Mca">Masters of Computer Application</option>
                  <option value="Btech">Btech</option>
                  <option value="Mtech">Mtech</option>
                </Select>
              </InputFieldWrapper>
              {error.course ? <Span>Please Select Course</Span> : ""}

              <InputFieldWrapper>
                <Label htmlFor="department">Department</Label>
                <Select
                  name="department"
                  id="department"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option hidden selected>
                    {" "}
                    Select Department
                  </option>
                  <option value="department-of-commerce-&-management">
                    Department of Commerce & Management
                  </option>
                  <option value="department-of-science">
                    Department of Science
                  </option>
                  <option value="department-of-fine-arts">
                    Department of Fine Arts
                  </option>

                  <option value="department-of-civil-engineering">
                    Department of Civil Engineering
                  </option>
                  <option value="department-of-electrical-engineering">
                    Department of Electrical Engineering
                  </option>
                  <option value="department-of-mechanical-engineering">
                    Department of Mechanical Engineering
                  </option>
                </Select>
              </InputFieldWrapper>
              {error.department ? <Span>Please Select Department</Span> : ""}

           

              <Button disabled={isButtonDisabled} type="submit">
                Submit
              </Button>
            </form>
          </FromWrapper>
        </MainWrapper>
      </div>
    </div>
  );
};

export default StudentRecords;
