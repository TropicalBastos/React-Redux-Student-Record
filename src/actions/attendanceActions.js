import data from './initialData';

const FETCH_ATTENDANCE_RECORDS = 'FETCH_ATTENDANCE_RECORDS';

export default function fetchAttendanceRecords(){

    return {
        type: FETCH_ATTENDANCE_RECORDS,
        payload: data.attendanceRecords
    };
}
