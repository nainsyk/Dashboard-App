import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/slices/widgetSlice';

const AddWidgetModal = ({ categoryId, onClose }) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');

  const handleAddWidget = () => {
    if (!widgetName || !widgetContent) {
      alert('Please fill in both the widget name and content.');
      return;
    }

    const newWidget = {
      id: Math.random().toString(36).substring(2, 9),
      name: widgetName,
      type: 'text',
      data: widgetContent,
      categoryId: categoryId,
    };

    dispatch(addWidget({ categoryId, widget: newWidget }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-bold mb-4">Add New Widget</h3>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <textarea
          placeholder="Widget Content"
          value={widgetContent}
          onChange={(e) => setWidgetContent(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <button
          onClick={handleAddWidget}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Widget
        </button>
        <button
          onClick={onClose}
          className="w-full mt-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
