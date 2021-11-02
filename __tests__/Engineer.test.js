const Engineer = require('../lib/Engineer.js');

test('check type of response', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object')
});

test('can set name', () => {
    const github = "rjr2";
    const engineer = new Engineer("ryan", "id", "email", github);
    expect(engineer.github).toBe(github);
});

test('can get github', () => {
    const github = "rjr2";
    const engineer = new Engineer("ryan", "id", "email", github);
    expect(engineer.getGithub()).toBe(github);
});