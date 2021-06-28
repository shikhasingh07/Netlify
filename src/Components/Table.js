import React from "react";
import "../index.css";
export const Table = (props) => {
  const { pincode, district, name, fee, statename, Vaccine, Age, Slots } =
    props;
  return (
    <>
      <table className="table   table-hover mb-0 table-hover " id="main-table">
        <tbody className="main-table">
          <tr>
            <td className="w-10">{pincode}</td>
            <td className="w-10">{district}</td>
            <td className="w-10">{name}</td>
            <td className="w-10">{fee}</td>
            <td className="w-10">{statename}</td>
            <td className="w-10">{Vaccine}</td>
            <td className="w-10">{Age}</td>
            <td className="w-10">{Slots}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Table;
