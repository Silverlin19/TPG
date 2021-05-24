const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

test('create Engineer object', () => {
    const testHub = "testHub";
    const testPerson = new Engineer('john', 1, 'doe@gmail.com', testHub);
    expect(testPerson.github).toBe(testHub);
});