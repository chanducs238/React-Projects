import React from 'react';
import Child1  from './Child1';


// class Child extends React.Component {
//     render(){
//         return (<div><p>{this.props.name}</p></div>)
//     }
// }


function Child (props) {
    return <Child1 name={props.name} />
}

export default Child;


// componentDidMount