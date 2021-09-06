const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    
    const ben = new Employee('ben', '1', 'ben@gmail.com')
    expect(ben.name).toEqual(expect.any(String))
    expect(ben.Id).toEqual(expect.any(String));
    expect(ben.email).toEqual(expect.any(String));
})