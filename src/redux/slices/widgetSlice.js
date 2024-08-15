import { createSlice } from '@reduxjs/toolkit';
import image1 from  '../../assets/card1Image.png';
import image2 from '../../assets/card2Image.png';
import image3 from '../../assets/card3Image.png';
import image4 from '../../assets/card4Image.png';
import image5 from '../../assets/card4Image.png'

const initialState = {
  categories: [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 1,
          name: 'Cloud Accounts',
          imageSrc: image1,  
          categoryId: 1,
        },
        {
          id: 2,
          name: 'Cloud Account Risk Assessment',
          imageSrc: image2, 
          categoryId: 1,
        },
      ],
    },
    {
      id: 2,
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 3,
          name: 'Top 5 Namespace Specific Alerts',
          imageSrc: image3,  
          categoryId: 2,
        },
        {
          id: 4,
          name: 'Workload Alerts',
          imageSrc: image3,   
          categoryId: 2,
        },
      ],
    },
    {
      id: 3,
      name: 'Registry Scan',
      widgets: [
        {
          id: 5,
          name: 'Image Risk Assessment',
          imageSrc: image4,  
          categoryId: 3,
        },
        {
          id: 6,
          name: 'Image Security Issues',
          imageSrc: image5,  
          categoryId: 3,
        },
      ],
    },
  ],
  availableWidgets: [],
  searchTerm: '',
};

const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    filterWidgets: (state) => {
      if (state.searchTerm) {
        state.availableWidgets = state.categories.flatMap(cat =>
          cat.widgets.filter(widget =>
            widget.name.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        );
      } else {
        state.availableWidgets = [];
      }
    },
  },
});

export const { addWidget, removeWidget, setSearchTerm, filterWidgets } = widgetSlice.actions;
export default widgetSlice.reducer;


