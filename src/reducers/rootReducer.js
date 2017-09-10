
var initialState = {
  attendanceRecords: [],
  students: []
};

export default function attendanceReducer(state = initialState, action){

    switch(action.type){
        case 'FETCH_ATTENDANCE_RECORDS':
            return {...state, attendanceRecords: action.payload};

        case 'FETCH_STUDENTS':
            return {...state, students: action.payload};

        default: 
            return state;    
    }

}