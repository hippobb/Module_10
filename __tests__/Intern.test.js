const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
  const intern = new Intern('name', 1234,123456789,'a@b.com','UT');

  expect(intern.name).toBe('name');
  expect(intern.employee_id).toEqual(expect.any(Number));
  expect(intern.office_num).toEqual(expect.any(Number));
  expect(intern.email).toBe('a@b.com');
  expect(intern.school).toBe('UT');
});
