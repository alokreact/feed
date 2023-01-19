import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CategoryProivder } from './Context/category_context';
import { CourseProivder } from './Context/course_context';

import { FilterProivder } from './Context/filter_context';
import { CartProivder } from './Context/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <CourseProivder>
      <CategoryProivder>
        <FilterProivder>
          <CartProivder>
            <App />
          </CartProivder>
        </FilterProivder>
      </CategoryProivder>
     </CourseProivder>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
