import React from 'react';
import HOC  from './HOC';
import {Table} from 'react-bootstrap'

const TeacherList = ({data}) => {

    let renderedData = data.map((d)=>{
        return (         
                        <tr key ={d._id}>
                        <td>{d.name}</td>
                        <td>{d.branch}</td>
                        <td>{d.designation}</td>
                        
                        </tr>         
        )


    })
    return (
        <div>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>

                    {renderedData}
                    </tbody>
            </Table>
        </div>
    );
};
const HocTeacherList = HOC(TeacherList,"teachers")
export default HocTeacherList;