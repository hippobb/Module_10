const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
  const engineer = new Engineer('name', 1234,123456789,'a@b.com','github');

  expect(engineer.name).toBe('name');
  expect(engineer.employee_id).toEqual(expect.any(Number));
  expect(engineer.office_num).toEqual(expect.any(Number));
  expect(engineer.email).toBe('a@b.com');
  expect(engineer.Github).toBe('github');
});
