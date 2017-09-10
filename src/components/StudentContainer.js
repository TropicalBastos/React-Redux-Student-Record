import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchStudents from '../actions/instructorActions';
import StudentList from './StudentList';

class StudentContainer extends React.Component{

    componentDidMount(){
        if(this.props.students.length == 0){
            this.props.actions.fetchStudents();
        }
    }

    render(){
        return(
            <div className='col-lg-4'>
                <h2>Students</h2>
                <StudentList 
                students={this.props.students}
                selectStudent={this.props.selectStudent} />
            </div>
        );
    }

}

function mapStateToProps(state){
    return {students: state.students};
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators({fetchStudents}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);