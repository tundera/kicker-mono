import { test } from '@oclif/test'

describe('hello', () => {
  test
    .stdout()
    .command(['dev']) // the command
    .it('runs dev', (ctx) => {
      expect(ctx.stdout).toBe('hello world')
    })

  test
    .stdout()
    .command(['dev', '--name', 'jeff'])
    .it('runs dev --name jeff', (ctx) => {
      expect(ctx.stdout).toBe('hello jeff')
    })
})
