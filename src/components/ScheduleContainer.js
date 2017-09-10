import React from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchAttendanceRecords from '../actions/attendanceActions';
import AttendanceRecordShow from './AttendanceRecordShow';
import StudentContainer from './StudentContainer';
import 'react-day-picker/lib/style.css';

class ScheduleContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedStudent: null,
            selectedRecord: null,
            selectedDay: new Date()
        };
        this.selectStudent = this.selectStudent.bind(this);
        this.selectDay = this.selectDay.bind(this);
    }

    componentDidMount(){
        if(this.props.attendanceRecords.length == 0){
            this.props.actions.fetchAttendanceRecords();;
        }
    }

    selectDay(day){
        if(this.state.selectedStudent){
            const recordsBySelectedDate 
            = this.props.attendanceRecords.find(recordsByDate => {
                const date = new Date(recordsByDate.date);
                return date.toDateString() == day.toDateString();
            });
            if(recordsBySelectedDate !== undefined){
                const record = recordsBySelectedDate.records.find(record => {
                    return record.student_id == this.state.selectedStudent.id;
                });
                this.setState({selectedRecord: record, selectedDay: day});
            }else{
                this.setState({selectedDay: day, selectedRecord: null});
            }
        }else{
            this.setState({selectedDay: day});
        }
    }

    selectStudent(id){
        const student = this.props.students.find(student => {
            return student.id == id;
        });
        var that = this;
        const recordsBySelectedDate = this.props.attendanceRecords.find(record => {
            var date = new Date(record.date);
            return date.toDateString() == that.state.selectedDay.toDateString();
        });

        if(recordsBySelectedDate !== undefined){
            const record = recordsBySelectedDate.records.find(r => {
                return r.student_id == id;
            });
            this.setState({selectedRecord: record, selectedStudent: student});
        }
    }

    render(){
        return (
            <div>
                <StudentContainer 
                selectStudent={this.selectStudent} 
                attendanceRecords={this.props.attendanceRecords} />
                <DayPicker locale='us'
                selectedDays={day => DateUtils.isSameDay(new Date())}
                onDayClick={this.selectDay}/>
                <AttendanceRecordShow
                day={this.state.selectedDay}
                student={this.state.selectedStudent}
                record={this.state.selectedRecord}/>
            </div>
        );
    }

}

function mapStateToProps(state, ownProps){
    return {attendanceRecords: state.attendanceRecords, students: state.students};
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators({fetchAttendanceRecords}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);