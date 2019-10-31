import plugin, { compile } from '../lib';
import { CONFIG } from '@parcel/plugin';

describe('plugin export interface', () => {
  it('exposes the correct methods', () => {
    expect(plugin[CONFIG]).toMatchObject({
      // getConfig: expect.any(Function),
      // parse: expect.any(Function),
      transform: expect.any(Function)
      // generate: expect.any(Function)
    });
  });

  it('compiles markdown to html', async () => {
    const html = await compile('## hello world');
    expect(html).toContain('<h2>hello world</h2>');
  });
});
