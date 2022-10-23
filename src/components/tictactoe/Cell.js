import React from "react";

// const Cell = (props) => {
//   return (
//     <div className="game-cell" onClick={props.onClick}>
//       {props.value}
//     </div>
//   );
// };
// có thể dùng destructuring object ở đây
const Cell = ({ value, onClick, className }) => {
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
