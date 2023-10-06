import React from 'react';

function Dropdown({ options, name, value, onChange }) {
  return (
    <div>
      <select name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;