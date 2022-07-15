const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
  const manager = new Manager('name', 1234,123456789,'a@b.com');

  expect(manager.name).toBe('name');
  expect(manager.employee_id).toEqual(expect.any(Number));
  expect(manager.office_num).toEqual(expect.any(Number));
  expect(manager.email).toBe('a@b.com');
});
