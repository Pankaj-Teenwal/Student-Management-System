import RenderTable from "./renderTable";
import Header from "../header/Header";
import { TableComponentWrapper, TableWrapper } from "./tableStyles";

const StudentRecordTables = () => {
  const dataList = JSON.parse(localStorage.getItem("studentList")) || [];
  console.log("DataList", dataList);

  const columns = [
    { data: "fName", title: "First Name" },
    { data: "lName", title: "Last Name" },
    { data: "gender", title: "Gender" },
    { data: "dateOfbirth", title: "DOB" },
    { data: "phoneNumber", title: "Mobile" },
    { data: "email", title: "Email" },
    { data: "address", title: "Address" },
    { data: "state", title: "State" },
    { data: "course", title: "Course" },
    { data: "department", title: "Department" },
    // {
    //   title: "Actions",
    //   orderable: false,
    //   render: function (data, type, row) {
    //     console.log("Data:", data, type);
    //     if (type === "display") {
    //       console.log("afsdasdf");
    //       return `<button ${(onclick = handleUpdate())}>Update</button>
    //       <button ${(onclick = handleDelete())}>Delete</button>
    //       </>`;
    //     }
    //     return "Hello World"; // Return non-display data as-is
    //   },
    // },
  ];

  return (
    <TableComponentWrapper>
      <Header />
      <TableWrapper>
        <RenderTable data={dataList} columns={columns} />
      </TableWrapper>
    </TableComponentWrapper>
  );
};

export default StudentRecordTables;
