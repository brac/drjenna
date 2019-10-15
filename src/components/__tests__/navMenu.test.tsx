import React from 'react'
import NavMenu from '../navMenu'
import ReactDOM from "react-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
