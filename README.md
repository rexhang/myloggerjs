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
![result](https://rexhang.com/pan/index.php?user/publicLink&fid=1f32fsUpSjVF1hjOdpFU2PcU3dYwmTNJQPjSRx-VUqojmyIWdOnovjL4H4PJZ7baxjKmjPT8tm4CLBnk9OMjN1Ht1v_byzcfo8nBfpKK88aI2pnAILx0yDewj1C80BV3O1OW6LUZM95Ge0jQ&file_name=/20191018221010.png)

####源码&官网地址
[访问 myloggerjs 源码&官网地址](https://github.com/rexhang/myloggerjs "myloggerjs")
