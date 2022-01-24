const internClass = require('../lib/intern.js');

test('Intern includes school info', () => {
  var newIntern = new internClass.Intern('test_school')
  expect(newIntern.getSchool).toMatch('test_school')
});

test('Intern includes intern as role', () => {
  var newIntern = new internClass.Intern('test_school')
  expect(newIntern.getRole).toMatch(/Intern/);

});
