/**
 * @author Rexhang(GuHang)
 * @date 2019/10/18 21:30
 * @Description: logjs
 */
const myloggerjsClass = function() {
	this.defaultOpts = {
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
	};
	this.filterJsonType = function(vars){
		return typeof vars === 'object'?window.JSON.stringify(vars):vars;
	};
};
myloggerjsClass.prototype = {
	info: function(){},
	success: function(){},
	warn: function(){},
	error: function(){},
	init: function(userConfig){
		const opts = Object.assign({}, this.defaultOpts, userConfig?userConfig:{});
		const filterJsonType = this.filterJsonType;
		for (let funcName in opts) {
			this[funcName] = function(logTextColor, logText){
				const opt = opts[funcName];
				const bgcolor = opt.bgcolor?opt.bgcolor:'#000';
				const color = opt.color?opt.color:'#fff';
				const _logTextColor = logTextColor?filterJsonType(logTextColor):'logTextColor is not defined';
				console.log('%c '+_logTextColor, 'background: '+bgcolor+';color: '+ color +'', logText?filterJsonType(logText):'');
			};
		}
	},
	config: function(userConfig){
		this.init(userConfig);
	}
};

const myloggerjs = new myloggerjsClass();

myloggerjs.init();

module.exports = myloggerjs;