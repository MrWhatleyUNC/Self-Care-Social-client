import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CommentListItem from './CommentListItem';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CommentListItem />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});