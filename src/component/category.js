import React from 'react';
import Widget from './Widget';

const Category = ({ category, onAddWidget }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
      <div className="grid grid-cols-2 gap-4">
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} />
        ))}
        <div
          className="flex items-center justify-center bg-white p-4 shadow-lg rounded-lg cursor-pointer"
          onClick={onAddWidget}
        >
          <p className="text-blue-600">+ Add Widget</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
