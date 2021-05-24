const Employee = require('../lib/Employee.js');

test('check to see if employee object is created', () => {
    const testPerson = new Employee('john', 1, 'doe@gmail.com');
    expect(testPerson).toBe(testPerson);
});