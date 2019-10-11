import React from 'react'
import Facebook from './facebook'
import ReactDOM from "react-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Facebook />, div);
  ReactDOM.unmountComponentAtNode(div);
});
