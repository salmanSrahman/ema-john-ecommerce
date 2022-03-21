import React from "react";

const Feature = ({ feature }) => {
  const { description, value } = feature;
  return (
    <div>
      {feature?.description ? (
        <li>
          {description} : {value}
        </li>
      ) : (
        <h6 className="text-danger">No Features Added</h6>
      )}
    </div>
  );
};

export default Feature;
