import { BrowserRouter } from "react-router-dom";
// import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import StudentRecords from "../Components/form/studentRecord";
import StudentRecordTables from "../Components/table/studentRecordTables";
import CRUD from "../Components/crud/CRUD";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={StudentRecords} />
        <Route path="/studentRecordTables" Component={StudentRecordTables} />
        <Route path="/crud" Component={CRUD} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
