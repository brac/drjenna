import React from 'react'
import LGBTQ from '../lgbtq'
import ReactDOM from "react-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LGBTQ />, div);
  ReactDOM.unmountComponentAtNode(div);
});
