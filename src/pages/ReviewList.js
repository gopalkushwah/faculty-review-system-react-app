import React from 'react';
import HOC  from './HOC';
import {Card} from 'react-bootstrap'

const ReviewList = ({data}) => {

    let renderedData = data.map((d)=>{
        return (
            <div key={d._id}>
                <Card style={{ width: '100%', margin:'5px',padding:'10px' } }>                   
                    <Card.Body>                        
                        <Card.Text>
                        <span style={{color:'gray'}}>{d.reviewdate}</span> <br></br>{d.description}
                        </Card.Text>
                        <p variant="primary" style={{color:'red'}}> 

                        <span style={{color:'green',float:'right'}}> - Review By : {d.reviewby} </span>
                        Teacher : {d.teacherid}
                        </p>
                    </Card.Body>
                    </Card>
             
            </div>
        )


    })
    return (
        <div>
            {renderedData}
        </div>
    );
};
const HocReviewList = HOC(ReviewList,"reviews")
export default HocReviewList;