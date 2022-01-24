const engineerClass = require('../lib/engineer.js');

test('Engineer includes github info', () => {
  var newEngineer = new engineerClass.Engineer('test_github')
  expect(newEngineer.getGithub).toMatch('test_github')
});

test('Engineer includes engineer as role', () => {
  var newEngineer = new engineerClass.Engineer('test_github')
  expect(newEngineer.getRole).toMatch(/engineer/);
});
