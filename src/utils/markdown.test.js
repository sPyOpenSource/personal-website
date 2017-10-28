var markdown = require('../utils/markdown');

test('toHTML', () => {
  expect(markdown.toHTML('1')).toBe('<p>1</p>');
})

test('toHTML', () => {
  expect(markdown.toHTML('<script>alert("test");</script>')).toBe('<p>&lt;script&gt;alert(&quot;test&quot;);&lt;/script&gt;</p>');
})

test('toHTML', () => {
  expect(markdown.toHTML('[[Community]]')).toBe('<p>[[Community]]</p>');
})

test('toHTML', () => {
  expect(markdown.toHTML('### Header 3'))
  .toBe('<h3>Header 3</h3>');
})

test('toHTML', () => {
  expect(markdown.toHTML('---')).toBe('<hr/>');
})

test('toHTML', () => {
  expect(markdown.toHTML('Some of these words *are emphasized*.')).toBe('<p>Some of these words <em>are emphasized</em>.</p>');
})
