
const Manager = require('../lib/Manager.js');

test('check type of response', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object')
});

test('can set name', () => {
    const officeNumber = "13";
    const manager = new Manager("ryan", "id", "email", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});

test('can get github', () => {
    const officeNumber = "13";
    const manager = new Manager("ryan", "id", "email", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});