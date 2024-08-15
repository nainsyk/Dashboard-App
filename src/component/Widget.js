import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/slices/widgetSlice';


const Widget = ({ widget }) => {
  console.log(widget.imageSrc);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId: widget.categoryId, widgetId: widget.id }));
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg relative">
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
      >
        ×
      </button>
      <h3 className="text-lg font-bold">{widget.name}</h3>
      <img src={widget.imageSrc} alt='no-image'/>
      <div className="mt-2">
        {widget.type === 'donut' && (
          <p>Total: {widget.data.total}, Connected: {widget.data.connected}, Not Connected: {widget.data.notConnected}</p>
        )}
        {widget.type === 'pie' && (
          <ul>
            <li>Failed: {widget.data.failed}</li>
            <li>Warning: {widget.data.warning}</li>
            <li>Not Available: {widget.data.notAvailable}</li>
            <li>Passed: {widget.data.passed}</li>
          </ul>
        )}
        {widget.type === 'text' && (
          <p>{widget.data}</p>
        )}
      </div>
    </div>
  );
};

export default Widget;
