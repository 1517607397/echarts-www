const path = require('path');
const config = require('./common');

config.host = 'https://echarts.tencent.codeon.cn';

config.cdnPayRootMap = {
    // Expensive!!! use it carefully.
    // zh: 'https://echarts-www.cdn.bcebos.com', // origin: 'https://echarts-www.bj.bcebos.com'
    // zh: 'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site',
    zh: 'https://echarts.tencent.codeon.cn',
    en: 'https://echarts.tencent.codeon.cn'
};
config.cdnFreeRootMap = {
    // 'echarts.cdn.apache.org' have been configured for zh (?)
    // zh: 'https://echarts.cdn.apache.org',
    // zh: 'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site',
    zh: 'https://echarts.tencent.codeon.cn',
    en: 'https://echarts.tencent.codeon.cn'
};
config.galleryPath = 'https://echarts.tencent.codeon.cn/examples/';
config.releaseDestDir = path.resolve(__dirname, '../../echarts-website');

module.exports = config;
