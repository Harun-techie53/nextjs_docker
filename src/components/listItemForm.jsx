import React from "react";

const ListItem = ({ allStudents }) => {
  return (
    <div className="list-content">
      <ul>
        {allStudents?.map((student) => (
          <li className="list-item">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p>Name: </p>
              <p>{student.name}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p>Address:</p>
              <p>{student.address}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
