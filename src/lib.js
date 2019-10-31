import { Transformer } from '@parcel/plugin';
import remark from 'remark';
import html from 'remark-html';

export function compile(markdown) {
  return new Promise((resolve, reject) => {
    remark()
      .use(html)
      .process(markdown, (err, file) => {
        if (err) return reject(err);
        resolve(String(file));
      });
  });
}

export default new Transformer({
  // async getConfig({ asset }) {
  //   const config = {};
  //   return config;
  // },

  // async parse({ asset }) {
  //   const ast = {};
  //   return ast;
  // },

  async transform({ asset }) {
    const content = await asset.getCode();
    const html = await compile(content);
    asset.type = 'html';
    asset.setCode(html);
    return [asset];
  }

  // async generate({ asset }) {
  //   const code = {},
  //     map = {};
  //   return { code, map };
  // }
});
