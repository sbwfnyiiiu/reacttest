import React from 'react'
import ReactDOM from 'react-dom'

setInterval(function(){
  ReactDOM.render(
    <h1>{new Date().toLocaleTimeString()}</h1>,
      document.getElementById('root')
  );
},1000);
