const internClass = require('../lib/intern.js');

test('Intern includes name', () => {
  var newIntern = new internClass.Intern('test_name', 'test_id', 'test_email', 'test_school')
  expect(newIntern.getName).toMatch('test_name')
});

test('Intern includes id', () => {
  var newIntern = new internClass.Intern('test_name', 'test_id', 'test_email', 'test_school')
  expect(newIntern.getId).toMatch('test_id')
});

test('Intern includes email', () => {
  var newIntern = new internClass.Intern('test_name', 'test_id', 'test_email', 'test_school')
  expect(newIntern.getEmail).toMatch('test_email')
});

test('Intern includes school info', () => {
  var newIntern = new internClass.Intern('test_name', 'test_id', 'test_email', 'test_school')
  expect(newIntern.getSchool).toMatch('test_school')
});

test('Intern includes intern as role', () => {
  var newIntern = new internClass.Intern('test_name', 'test_id', 'test_email', 'test_school')
  expect(newIntern.getRole).toMatch(/Intern/);

});
