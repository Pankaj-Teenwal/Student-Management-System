import { useEffect, useRef } from "react";
import DataTables from "datatables.net-dt";

const RenderTable = ({ ...props }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    const dt = new DataTables(tableRef.current, props);
    return () => {
      dt.destroy();
    };
  }, []);

  return <table ref={tableRef} style={{ border: "1px solid black" }}></table>;
};

export default RenderTable;
