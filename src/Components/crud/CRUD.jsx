import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import {
  Button,
  ButtonWrapper,
  Card,
  CrudText,
  CrudTextWrapper,
  DetailWrapper,
} from "./crudStyles";
import { data } from "jquery";

const CRUD = () => {
  const [dataList, setDataList] = useState(
    JSON.parse(localStorage.getItem("studentList")) || []
  );

  const [flag, setFlag] = useState(false);


  const [input, setInput] = useState({
    lName: "",
    fName: "",
    dateOfbirth: "",
    email: "",
    phoneNumber: "",
    address: "",
    state: "",
    course: "",
    department: "",
  });

  useEffect(() => {
    const list = dataList;
    localStorage.setItem("studentList", JSON.stringify(list));
  }, [dataList]);

  const handleDelete = (id) => {
    const filteredList = dataList.filter((item) => item.id !== id);
    setDataList(filteredList);
  };

  const handleUpdate = (id) => {
    if (!flag) {
      setFlag(!flag);

      dataList.map((item) => {
        if (item.id == id) {
          item.edit = true;
          input.fName = item.fName;
          input.lName = item.lName;
          input.dateOfbirth = item.dateOfbirth;
          input.address = item.address;
          input.state = item.state;
          input.email = item.email;
          input.course = item.course;
          input.phoneNumber = item.phoneNumber;
          input.department = item.department;
        

          setInput(input);
        }

        return item;
      });
      setDataList(dataList);
    } else {
      setFlag(!flag);
      const list = dataList;
      list.map((item) => {
        if (item.id == id) {
          item.edit = false;
          item.fName = input.fName;
          item.lName = input.lName;
          item.dateOfbirth = input.dateOfbirth;
          item.address = input.address;
          item.state = input.state;
          item.email = input.email;
          item.course = input.course;
          item.phoneNumber = input.phoneNumber;
          item.department = input.department;
          
        }
        return item;
      });

      setDataList(list);

      localStorage.setItem("studentList", JSON.stringify(list));
    }
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };


  
  const showList = () => {
    return dataList.map((item) => {
      return (
        <Card key={item.id}>
          <DetailWrapper>
            <span>First Name: </span>
            {item.edit ? (
              <div>
                <input
                  type="text"
                  name="fName"
                  value={input.fName}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <p>{item.fName}</p>
            )}
          </DetailWrapper>

          <DetailWrapper>
            <span>Last Name: </span>
            {item.edit ? (
              <input
                type="text"
                name="lName"
                value={input.lName}
                onChange={handleChange}
              />
            ) : (
              <p>{item.lName}</p>
            )}
          </DetailWrapper>

          <DetailWrapper>
            <span>DOB:</span>
            {item.edit ? (
              <input
                type="date"
                name="dateOfbirth"
                value={input.dateOfbirth}
                onChange={handleChange}
              />
            ) : (
              <p>{item.dateOfbirth}</p>
            )}
          </DetailWrapper>

          <DetailWrapper>
            <span>Phone Number:</span>
            {item.edit ? (
              <input
                type="tel"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={handleChange}
              />
            ) : (
              <p>{item.phoneNumber}</p>
            )}
          </DetailWrapper>

          <DetailWrapper>
            <span>Email: </span>
            {item.edit ? (
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
              />
            ) : (
              <p>{item.email}</p>
            )}
          </DetailWrapper>

          <DetailWrapper>
            <span>Address: </span>
            {item.edit ? (
              <input
                type="text"
                name="address"
                value={input.address}
                onChange={handleChange}
              />
            ) : (
              <p>{item.address}</p>
            )}
          </DetailWrapper>

          <DetailWrapper>
            <span>State</span>
            {item.edit ? (
              <select
                name="state"
                id="state"
                value={input.state}
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
              </select>
            ) : (
              <p>{item.state}</p>
            )}
          </DetailWrapper>

          <DetailWrapper>
            <span>Course: </span>
            {item.edit ? (
              <select
                name="course"
                id="course"
                value={input.address}
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
              </select>
            ) : (
              <p>{item.course}</p>
            )}
          </DetailWrapper>

          <DetailWrapper>
            <span>Department: </span>
            {item.edit ? (
              <select
                name="department"
                id="department"
                onChange={handleChange}
                value={input.department}
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
              </select>
            ) : (
              <p>{item.department}</p>
            )}
          </DetailWrapper>
          

          

          <ButtonWrapper>
            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
            <Button onClick={() => handleUpdate(item.id)}>
              {flag ? "Update" : "Edit"}
            </Button>
          </ButtonWrapper>
        </Card>
      );
    });
  };
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <CrudTextWrapper>
        <CrudText>
          <p>Student CRUD</p>
        </CrudText>

        <Button onClick={() => navigate("/")}>Create New Record</Button>
      </CrudTextWrapper>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {showList()}
      </div>
    </div>
  );
};

export default CRUD;
