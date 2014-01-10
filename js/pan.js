var PAN = (function(module){
	module.clickIt = function(resultObject){
		resultObject.prepend(Date() + '<br/>');
	};
	return module;
}(PAN || {}));