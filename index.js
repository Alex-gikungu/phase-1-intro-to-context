// // Your code here
// function createEmployeeRecord (){



// }





// index.js

function createEmployeeRecord(employeeData) {
    var employeeRecord = {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  
    return employeeRecord;
  }
  
  function createEmployeeRecords(employeesData) {
    return employeesData.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employeeRecord, dateTimeString) {
    var [date, hour] = dateTimeString.split(' ');
  
    employeeRecord.timeInEvents.push({
      type: 'TimeIn',
      date: date,
      hour: parseInt(hour, 10)
    });
  
    return employeeRecord;
  }
  
  function createTimeOutEvent(employeeRecord, dateTimeString) {
    var [date, hour] = dateTimeString.split(' ');
  
    employeeRecord.timeOutEvents.push({
      type: 'TimeOut',
      date: date,
      hour: parseInt(hour, 10)
    });
  
    return employeeRecord;
  }
  
  function hoursWorkedOnDate(employeeRecord, date) {
    var timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    var timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
  
    var hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
  
    return hoursWorked;
  }
