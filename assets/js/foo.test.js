import foo from './foo';

it('runs', () => {
  expect(true).toBe(true);
});

it('works', () => {
  expect(foo).toEqual('bar');
});
