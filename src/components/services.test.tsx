import React from 'react'
import Services from './services'
import ReactDOM from "react-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Services />, div);
  ReactDOM.unmountComponentAtNode(div);
});
