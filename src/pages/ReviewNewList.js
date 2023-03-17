import React from 'react';
import HOC  from './HOC';
import {Table} from 'react-bootstrap'

const ReviewNewList = ({data}) => {

    let renderedData = data.map((d)=>{
        return (         
                        <tr key ={d._id}>
                        <td>{d.teacherid}</td>
                        <td>{d.reviewby}</td>
                        <td>{d.description}</td>
                        <td>{d.reviewdate}</td>
                      
                        
                        </tr>         
        )


    })
    return (
        <div>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>teacher name</th>
                        <th>review by</th>
                        <th>description</th>
                        <th>date</th>
                        
                        </tr>
                    </thead>
                    <tbody>

                    {renderedData}
                    </tbody>
            </Table>
        </div>
    );
};
const HocReviewNewList = HOC(ReviewNewList,"reviews")
export default HocReviewNewList;