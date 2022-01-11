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
		// const cacheAddGetters = (key) => cache.getters[key] = getters[key](state);
		// getterKeys.forEach(cacheAddGetters);
	}
	init();
	return defaultOptions;
}