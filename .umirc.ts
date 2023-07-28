import Routes from './src/routes';
import { defineConfig } from '@umijs/max';

const getIp = () => {
  const fs = require('fs');
  const path = require('path');
  const dotenv = require('dotenv'); // 解析.env.*文件为键值对，并写入环境变量。
  const resolve = (dir: string) => path.join(__dirname, dir);
  const env = dotenv.parse(fs.readFileSync(resolve(`./.env`)));
  const version_env = process.env.VERSION_ENV;
  return env[`${version_env}_ip`];
};

export default defineConfig({
  proxy: {
    '/api': {
      target: getIp(),
      changeOrigin: true,
      // pathRewrite: { '^/api': '' },
    },
  },
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'en-US',
    antd: false,
    baseSeparator: '-',
    baseNavigator: false,
    useLocalStorage: true,
  },
  theme: {
    '@layout-body-background': '#F4F7FB',
    '@primary-color': '#0F9096',
    '@font-family': 'Arial, "Pingfang SC", "Microsoft YaHei", sans-serif',
    '@btn-default-color': '#0D7F85',
    '@btn-default-bg': '#F9FFFF',
    '@btn-default-border': '#86C4C7',
    '@btn-padding-base': '0 10px',
    '@btn-height-base': '33px',
    '@btn-disable-color': '#A5A5A5',
    '@btn-disable-bg': '#E9E9E9',
    '@btn-disable-border': '#E9E9E9',
    '@border-radius-base': '2px',
    '@border-color-base': '#ADB4C2',
    '@tabs-card-height': '50px',
    '@tabs-bar-margin': '0',
    '@tabs-title-font-size': '18px',
    '@tabs-horizontal-margin': '0 0 0 50px',
    '@tabs-horizontal-padding': '11px 0',
    '@table-header-bg': '#EEF5F9',
    '@table-header-color': '#0D5273',
    '@table-row-hover-bg': '#E5F9F5',
    '@table-padding-vertical': '8px',
    '@font-size-base': '16px',
    '@input-placeholder-color': '#7F8694',
    '@disabled-color': '#7F8694',
    '@drawer-header-padding': '9px 18px',
    '@drawer-body-padding': '15px',
    '@radio-size': '18px',
    '@radio-button-checked-bg': '#F6FFFD',
    '@radio-button-active-color': '#0D7F85',
    '@input-height-base': '33px',
    '@modal-body-padding': '0',
    '@modal-header-bg': '#F2F2F2',
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  dva: {},
  // layout: {},
  routes: Routes,
  npmClient: 'yarn',
  devtool: 'source-map',
  //mock: false
});
