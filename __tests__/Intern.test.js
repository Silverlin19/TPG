const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

test('create Intern object', () => {
    const school = "FAMU";
    const testPerson = new Intern('john', 1, 'doe@gmail.com', school);
    expect(testPerson.school).toBe(school);
});