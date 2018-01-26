import React from 'react'
import ReactDOM from 'react-dom'

let sitename = 'CAICENT'
let obj = {
  fname : 'Lee',
  lname : 'ChuanMiao',
}
const element = <h1>Welcome to { sitename }</h1>

function cartoon(name,show){
  return <div>
    <h1 className="hello">Welcom to {name}</h1>
    <h2>Show time is {show}</h2>
  </div>
}
ReactDOM.render(
  cartoon('xxx','2018'),
    document.getElementById('root')
);
