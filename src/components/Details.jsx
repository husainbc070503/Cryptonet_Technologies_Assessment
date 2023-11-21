import React from "react";
import Group from "./Group";

const Details = ({ details }) => {
  const { fname, lname, gender, phone, address } = details;

  return (
    <div className="details-div">
      <div className="name">
        <Group title="First Name" text={fname} />
        <Group title="Last Name" text={lname} />
      </div>
      <Group title="Gender" text={gender} />
      <Group title="Phone" text={phone} />
      <div className="group">
        <table>
          <tbody>
            <tr>
              <th className="title">Address: </th>
              <td className="addr">{address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
