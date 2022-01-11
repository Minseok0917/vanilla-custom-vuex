function store(defineOptions){
	const clone = {
		state:{},
		getters:{},
		mutaions:{},
		actions:{},
	};
	const defaultOptions = {
		...clone,
	};
	const cache = {
		state:[...defaultOptions.state],
		getters:{},
		commit(){

		},
		dispatch(){

		}
	};

	function init(){
		const {keys, defineProperty} = Object;
		const {state, getters, mutaions, actions} = defaultOptions;
		const stateKeys = keys(state);
		const getterKeys = keys(getters);
		const initState = (key) => defineProperty(state,key,{
			get(){
				return cache.state[key];
			},
			set(newValue){
				cache.state[key] = newValue;
				return cache.state[key];
			}
		});
		const initGetters = (key) => defineProperty(getters,key,{
			get(){
				return cache.getters[key];
			}
		});
	}
	init();
	return defaultOptions;
}

/*

mutaions 실행 시 getters 재 조회



return 시 나와야 되는 값 

state , getters 
commit , dispatch 



*/