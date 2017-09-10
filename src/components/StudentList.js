import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const StudentList = (props) => {

    function studentListItems(){
        return props.students.map((student, i) => {
            return(
                <ListGroupItem key={i} onClick={() => props.selectStudent(student.id)}>
                    {student.firstName} {student.lastName}
                </ListGroupItem>    
            );
        });
    }

    function studentListGroup(){
        return(
            <ListGroup>
                {studentListItems()}
            </ListGroup>
        );
    }

    return(
        <div>
            {studentListGroup()}
        </div>
    );

}

export default StudentList;