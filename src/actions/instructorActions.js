import data from './initialData';

const FETCH_STUDENTS = 'FETCH_STUDENTS';

export default function fetchStudents(){
    return {
        type: FETCH_STUDENTS,
        payload: data.students
    }
}


