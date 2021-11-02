const Intern = require('../lib/Intern.js');

test('check type of response', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe('object')
});

test('can set name', () => {
    const school = "vcu";
    const intern = new Intern("ryan", "id", "email", school);
    expect(intern.school).toBe(school);
});

test('can get github', () => {
    const school = "vcu";
    const intern = new Intern("ryan", "id", "email", school);
    expect(intern.getSchool()).toBe(school);
});