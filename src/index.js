import React from 'react'
import ReactDOM from 'react-dom'

function Cartoon(props){
  return <h1>Welcome to {props.name} Mall.</h1>
}

// class Cartoon extends React.Component{
//   render(){
//     return <h1>Welcome to {this.props.name} Mall.</h1>
//   }
// }

function Show(){
  return <div>
    <Cartoon name='wax' />
    <Cartoon name='bug' />
  </div>
}

ReactDOM.render(
  <Show />
  ,
  document.getElementById('root')
);
