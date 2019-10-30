import { Transformer } from '@parcel/plugin';

export default new Transformer({
  async getConfig({ asset }) {
    const config = {};
    return config;
  },

  async parse({ asset }) {
    const ast = {};
    return ast;
  },

  async transform({ asset }) {
    const assets = {};
    return [assets];
  },

  async generate({ asset }) {
    const code = {},
      map = {};
    return { code, map };
  }
});
