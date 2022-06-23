import { Component } from "react";


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
};

const TableBody = ({data, removeCharacter}) => {
const rows = data.map((row, index) => {
    return (
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
                <button onClick={() => {removeCharacter(index)}}>Delete</button>
            </td>
        </tr>
    )
})
    return (
        <tbody>
            {rows}
        </tbody>
    )

}

class Table extends Component{
    render(){
        const { data, removeCharacter } = this.props;
        return (
            <table>
            <TableHeader />
            <TableBody data={data} removeCharacter={removeCharacter}/>
            </table>
            
        )
    }

}

export default Table;