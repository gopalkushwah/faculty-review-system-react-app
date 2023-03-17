import React from 'react';
import HOC  from './HOC';
import {Table} from 'react-bootstrap'

const StudentList = ({data}) => {

    let renderedData = data.map((d)=>{
        return (         
                        <tr key ={d._id}>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.phone}</td>
                        <td>{d.branch}</td>
                        <td>{d.rollno}</td>
                        <td>{d.classin}</td>
                        
                        </tr>         
        )


    })

    return (
        <div style={{width: '100%',margin : '0 auto'}}>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Branch</th>
                        <th>Roll number</th>
                        <th>Class</th>
                        </tr>
                    </thead>
                    <tbody>

                    {renderedData}
                    </tbody>
            </Table>
        </div>
    );
};
const HocStudentList = HOC(StudentList,"students")
export default HocStudentList;