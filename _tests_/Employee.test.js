const employeeClass = require('../lib/employee.js');

test('Employee includes name', () => {
    var newEmployee = new employeeClass.Employee('test_name', 'test_id', 'test_email')
    expect(newEmployee.getName).toMatch('test_name')
});

test('Employee includes id', () => {
    var newEmployee = new employeeClass.Employee('test_name', 'test_id', 'test_email')
    expect(newEmployee.getId).toMatch('test_id')
});

test('Employee includes email', () => {
    var newEmployee = new employeeClass.Employee('test_name', 'test_id', 'test_email')
    expect(newEmployee.getEmail).toMatch('test_email')
});

test('Employee includes role', () => {
    var newEmployee = new employeeClass.Employee('test_name', 'test_id', 'test_email')
    expect(newEmployee.getRole).toMatch(/employee/);
});
