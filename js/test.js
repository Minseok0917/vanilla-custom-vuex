


export default function defineStore(defineOptions){
	const clone = {
		state:{},
		getters:{},
		mutations:{},
		actions:{}
	};
	const defaultOptions = {
		...clone,
		...defineOptions
	};
	const memory = {
		state:{...defaultOptions.state},
		getters:{},
	};

	/*
		state process 
	*/
	const stateKeys = Object.keys(defaultOptions.state);
	stateKeys.forEach( key => Object.defineProperty(defaultOptions.state,key,{
		get:()=>{
			return memory.state[key];
		},
		set:(newValue)=>{
			memory.state.key = newValue;
		}
	}));	
	/*
		getter process 	
	*/
	const getterKeys = Object.keys(defaultOptions.getters);
	getterKeys.forEach( key => memory.getters[key] = defaultOptions.getters[key](defaultOptions.state) );
	getterKeys.forEach( key => Object.defineProperty(defaultOptions.getters,key,{
		get:()=>{
			return memory.getters[key];
		},
	}));
	/*
		mutaions process
	*/
	const mutationsKeys = Object.keys(defaultOptions.mutations);
	mutationsKeys.forEach( key => Object.defineProperty(defaultOptions.mutations,key,{
		get:(newValue)=>{
			// defaultOptions.mutations[key](defaultOptions.state,newValue);
			// getterKeys.forEach( key => memory.getters[key] = defaultOptions.getters[key](defaultOptions.state) );
		}
	}))

	return defaultOptions;
}





/*

data
getter : mutaions 이 바뀌면 새로 로드


getter[user/getName]




*/