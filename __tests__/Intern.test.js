const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    
    const ben = new Intern('ben', '1', 'ben@gmail.com', 'school')
    expect(ben.name).toEqual(expect.any(String))
    expect(ben.Id).toEqual(expect.any(String));
    expect(ben.email).toEqual(expect.any(String));
    expect(ben.school).toEqual(expect.any(String));
})