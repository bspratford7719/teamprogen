const managerClass = require('../lib/manager.js');

test('Manager includes name', () => {
  var newManager = new managerClass.Manager('test_name', 'test_id', 'test_email', 'test_officenumber')
  expect(newManager.getName).toMatch('test_name')
});

test('Manager includes id', () => {
  var newManager = new managerClass.Manager('test_name', 'test_id', 'test_email', 'test_officenumber')
  expect(newManager.getId).toMatch('test_id')
});

test('Manager includes email', () => {
  var newManager = new managerClass.Manager('test_name', 'test_id', 'test_email', 'test_officenumber')
  expect(newManager.getEmail).toMatch('test_email')
});

test('Manager includes office number', () => {
  var newManager = new managerClass.Manager('test_name', 'test_id', 'test_email', 'test_officenumber')
  expect(newManager.getofficeNumber).toMatch('test_officenumber')
});

test('Manager includes manager as role', () => {
  var newManager = new managerClass.Manager('test_name', 'test_id', 'test_email', 'test_officenumber')
  expect(newManager.getRole).toMatch(/Manager/);

});
