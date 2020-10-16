import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/components/App/App';
import * as serviceWorker from './serviceWorker';
import { CommentListProvider } from './context/CommentListContext'
import { CommentProvider } from './context/CommentContext'
import { PostListProvider } from './context/PostListContext'
import { PostProvider } from './context/PostContext'
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <PostListProvider>
      <PostProvider>
        <CommentListProvider>
          <CommentProvider>
            <App />
          </CommentProvider>
        </CommentListProvider>
      </PostProvider>
    </PostListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
