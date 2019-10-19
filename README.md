## JavaSript中打印彩色日志小插件 

更加醒目的进行log日志的控制台输出

####安装
```
npm install myloggerjs
or
yarn add myloggerjs
```

####基本使用
```
import logjs from 'myloggerjs';
colortext->必填参数;
commontext->可选参数
logjs.info('colortext', 'commontext');
logjs.success('colortext', 'commontext');
logjs.warn('colortext', 'commontext');
logjs.error('colortext', 'commontext');
```

####配置项
```
// 可对默认四种输出模式进行覆盖也可额外自定义新增方法
logjs.config({
    info: {
        bgcolor: '#ff3600', // 可对默认值进行改写
        color: '#666' // 可对默认值进行改写
    },
    myNewFuncName: {
        bgcolor: '#1E90FF', // 背景色:不填则默认值#000
        color: '#fff' // 文字色:不填则默认值#fff
    },
});
```

####各方法对应默认值配置参数
```
{
    info: {
        bgcolor: '#1E90FF',
        color: '#fff'
    },
    success: {
        bgcolor: '#3CB371',
        color: '#fff'
    },
    warn: {
        bgcolor: '#FF8C00',
        color: '#fff'
    },
    error: {
        bgcolor: '#f00',
        color: '#fff'
    }
}
```
####使用后输出控制台效果如图
![result](data:image/png;base64,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 "result")

####源码&官网地址
[访问 myloggerjs 源码&官网地址](https://github.com/rexhang/myloggerjs "myloggerjs")
