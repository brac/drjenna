import React from 'react'
import Instagram from './instagram'
import ReactDOM from "react-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Instagram />, div);
  ReactDOM.unmountComponentAtNode(div);
});
