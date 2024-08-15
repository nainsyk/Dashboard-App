import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { GoChevronDown } from "react-icons/go";
import { TbBellRinging } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';
import { setSearchTerm, filterWidgets } from '../redux/slices/widgetSlice';

const Dashboard = () => {
  const categories = useSelector((state) => state.widgets.categories);
  const availableWidgets = useSelector((state) => state.widgets.availableWidgets);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [value, setValue] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(value));
    dispatch(filterWidgets());
    setIsSearchActive(true);
  };

  const handleClearSearch = () => {
    setValue('');
    dispatch(setSearchTerm(''));
    dispatch(filterWidgets());
    setIsSearchActive(false);
  };

  const handleAddWidget = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowModal(true);
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center bg-white p-2 shadow-md mb-6">
        <div className="flex flex-col md:flex-row px-4 md:px-8 items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <div className="text-gray-500">
            <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block mx-1 md:mx-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-700 font-semibold">Dashboard V2</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto mt-2 md:mt-0">
          <div className="relative flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0">
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-8 text-sm px-2 md:px-4 py-2 rounded-lg border border-gray-300 bg-blue-50 w-full md:w-80"
              value={value}
              onChange={handleChangeInput}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <HiOutlineMagnifyingGlass className="w-5 h-7 text-gray-400" />
            </div>
            <button
              onClick={isSearchActive ? handleClearSearch : handleSearch}
              className="bg-indigo-600 text-white px-2 md:px-4 py-2 rounded-lg ml-2 w-full md:w-auto"
            >
              {isSearchActive ? 'Clear Search' : 'Search'}
            </button>
          </div>
          <div className="flex flex-row items-center justify-between w-full md:w-auto space-x-2">
            <button className="bg-white p-2 rounded-full hover:bg-gray-100">
              <GoChevronDown className="h-6 w-6 text-gray-700" />
            </button>
            <button className="bg-white p-2 rounded-full hover:bg-gray-100">
              <TbBellRinging className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="p-4 md:p-6">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">CNAPP Dashboard</h1>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <button
              onClick={() => handleAddWidget(null)}
              className="bg-white border rounded-md px-3 py-2"
            >
              Add Widget +
            </button>
            <button className="bg-white border rounded-md px-2 py-2">
              <FaArrowsRotate />
            </button>
            <button className="bg-white border rounded-md px-2 py-2">
              <BsThreeDotsVertical />
            </button>
            <div className="relative">
              <button className="bg-white border border-blue-900 text-blue-900 font-bold px-4 py-2 rounded-md flex items-center">
                <BiTimeFive className="w-5 h-5 mr-2 text-blue-900" />
                Last 2 days
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 8.293a1 1 0 011.414 0L12 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        {categories.map((category) => (
          <div key={category.id} className="mb-8">
            <h2 className="text-lg md:text-xl font-semibold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.widgets.map((widget) => (
                <Widget key={widget.id} widget={widget} />
              ))}
              <button
                onClick={() => handleAddWidget(category.id)}
                className="bg-white p-4 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-300"
              >
                + Add Widget
              </button>
            </div>
          </div>
        ))}

        {/* Search Results Section */}
        <div className="mt-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {availableWidgets.length > 0 ? (
              availableWidgets.map((widget) => (
                <Widget key={widget.id} widget={widget} />
              ))
            ) : (
              <p>No widgets found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Add Widget Modal */}
      {showModal && (
        <AddWidgetModal
          categoryId={selectedCategory}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
