// 后台API URI前端
export const apiPrefix = document.head.dataset.api || '';
// iframe 请求根路径
export const xlightning = document.head.dataset.xlightning || '';
// 系统名称
export const sysName = "TEST";
// 登录页名称
export const loginName = "数据平台";
// 页面脚注版权信息
export const footerText = " V1.0.0 2018 © by mpw.";
// 菜单权限
export const menuPermission = false;
//分页
export const pageSize = 10;
// 默认首页
export const defaultMenu = {
    pathname: '/sys/chartView',
    state: {
        key: 'chartView',
        pathtitles: ['echarts组件'],
    }
};
// iframe默认地址
export const iframeInfo = {
    title: '交易',
    pathtitles: ['汇总数据', '交易'],
    key: 'summryData_transaction',
    url: `http://www.baidu.com`
};
