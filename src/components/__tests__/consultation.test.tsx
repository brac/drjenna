import React from 'react'
import Consultation from '../consultation'
import ReactDOM from "react-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Consultation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
