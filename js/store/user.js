import defineStore from '../core/store.js';

const defaultState = () => ({
	users:[],
	idx:0
});

const addUser = (() => {
	let idx = 0;
	return () => ({
		idx:idx,
		name:`user${idx++}`
	});
})();

const users = defineStore({
	state:defaultState(),
	getters:{
		getUsers:(state)=>state.users,
		getUser:(state)=>{
			const idx = state.idx;
			return state.users.find(({idx:uidx}) => uidx === idx );
		}
	},
	mutations:{
		addUser:(state,user)=>{
			state.users = [...state.users,user]
		},
		setIdx:(state,uidx)=> state.idx = uidx,
	},
	actions:{
		reset:({state})=>{
			console.log(state);
			state = defaultState();
		}
	}
});


(async()=>{
	console.log(users.getters['getUsers']);
	users.commit('addUser',addUser())
	users.commit('addUser',addUser())
	console.log(users.getters['getUser']);
	users.commit('setIdx',1);
	console.log(users.getters['getUser']);
	console.log(users.getters['getUsers']);
	await users.dispatch('reset');
	console.log(users.getters['getUsers']);
})();