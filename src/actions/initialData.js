
var data = {
    attendanceRecords : [
    {id: 1, date: '10-7-2016', records: [
        {id: 1, student_id: 7, arrived: true, arrivedAt:   
        '10:00am'}, 
        {id: 2, student_id: 8, arrived: false, arrivedAt:   
        null}]},
    {id: 2, date: '10-8-2016', records: [
        {id: 3, student_id: 7, arrived: true, arrivedAt:   
        '10:20am'}, 
        {id: 2, student_id: 8, arrived: true, arrivedAt:   
        '9:00am'},]},
    ],


    students : [
    {id: 7, firstName: "Sophie", lastName: "DeBenedetto"},   
    {id: 8, firstName: "Doctor", lastName: "Who"}, 
    {id: 9, firstName: "Amy", lastName: "Pond"}
    ]
};

export default data;