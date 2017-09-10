import React from 'react';

const AttendanceRecordShow = (props) => {

    function studentInfo(){
        if(props.student){
            return(
                <p>
                    Record for: {props.student.firstName} {props.student.lastName}
                </p>
            );
        }
    }

    function recordInfo(){
        if(props.record){
            if(props.record.arrived){
                return <p>Arrived at: {props.record.arrivedAt}</p>
            }else{
                return <p>Absent or late</p>
            }
        }
    }

    return (
        <div className="col-sm-12 text-left">
            {studentInfo()}
            {recordInfo()}
            <p>
                {props.day.toDateString()}
            </p>
        </div>
    );

}

export default AttendanceRecordShow;