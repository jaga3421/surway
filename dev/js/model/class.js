SURWAY.model.clsElement = function(elem){
	var _id=elem.id,
		_type=elem.type,
		_name=elem.name;

	var _getType = function(){
		return _type;
	}
	var _getId = function(){
		return _id;
	}
	var _getName = function(){
		return _name;
	}

    return {
    	getType: _getType,
    	getId:_getId,
    	getName:_getName
    }   
};