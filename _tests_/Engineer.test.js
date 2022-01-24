const engineerClass = require('../lib/engineer.js');

test('Engineer includes name', () => {
  var newEngineer = new engineerClass.Engineer('test_name', 'test_id', 'test_email', 'test_github')
  expect(newEngineer.getName).toMatch('test_name')
});

test('Engineer includes id', () => {
  var newEngineer = new engineerClass.Engineer('test_name', 'test_id', 'test_email', 'test_github')
  expect(newEngineer.getId).toMatch('test_id')
});

test('Engineer includes email', () => {
  var newEngineer = new engineerClass.Engineer('test_name', 'test_id', 'test_email', 'test_github')
  expect(newEngineer.getEmail).toMatch('test_email')
});
test('Engineer includes github info', () => {
  var newEngineer = new engineerClass.Engineer('test_name', 'test_id', 'test_email', 'test_github')
  expect(newEngineer.getGithub).toMatch('test_github')
});

test('Engineer includes engineer as role', () => {
  var newEngineer = new engineerClass.Engineer('test_name', 'test_id', 'test_email', 'test_github')
  expect(newEngineer.getRole).toMatch(/engineer/);
});
