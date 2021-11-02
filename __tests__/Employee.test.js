const Employee = require('../lib/Employee.js');

test('check type of response', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object')
});

test('can set name', () => {
    const name = "ryan";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('can set id', () => {
    const id = "1234";
    const employee = new Employee("ryan", id);
    expect(employee.id).toBe(id);
});

test('can get name', () => {
    const name = "ryan";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});