const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    
    const ben = new Manager('ben', '1', 'ben@gmail.com', '555-5555')
    expect(ben.name).toEqual(expect.any(String))
    expect(ben.Id).toEqual(expect.any(String));
    expect(ben.email).toEqual(expect.any(String));
    expect(ben.number).toEqual(expect.any(String));
})