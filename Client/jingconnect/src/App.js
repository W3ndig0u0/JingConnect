
import React from 'react';
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';
import Header from './components/Header/header.js';

const App = () => {
  return (
    <div>
      <>
      <Header/>
      <Posts/>
      <Form/>
      </>
    </div>
  )
}

export default App;