import React from 'react';


// class Child extends React.Component {
//     render(){
//         return (<div><p>{this.props.name}</p></div>)
//     }
// }


function Child1 (props) {
    return <p>{props.name}</p>
}

export default Child1;


// componentDidMount