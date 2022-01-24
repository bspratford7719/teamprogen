const managerClass = require('../lib/manager.js');

test('Manager includes office number', () => {
  var newManager = new managerClass.Manager('test_officenumber')
  expect(newManager.getofficeNumber).toMatch('test_officenumber')
});

test('Manager includes manager as role', () => {
  var newManager = new managerClass.Manager('test_officenumber')
  expect(newManager.getRole).toMatch(/Manager/);

});
