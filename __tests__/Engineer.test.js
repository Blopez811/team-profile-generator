const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    
    const ben = new Engineer('ben', '1', 'ben@gmail.com', 'blopezgithub')
    expect(ben.name).toEqual(expect.any(String))
    expect(ben.Id).toEqual(expect.any(String));
    expect(ben.email).toEqual(expect.any(String));
    expect(ben.gitHub).toEqual(expect.any(String));
})