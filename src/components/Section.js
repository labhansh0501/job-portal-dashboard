import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button className="text-blue-500">+Add</button>
      </div>
      <div className="mt-2">
        {children}
      </div>
    </div>
  );
};

export default Section;
