import create from '../core/store.js';

const useStore = create({
	state:{
		count:0,
	},
	getters:{
		getCount:(state)=>state.count
	},
	mutations:{
		setCount:(state,payload)=>(state.count = payload)
	},
	actions:{
		timeout:async function({state,getters,commit}){
			return await new Promise( (res,rej) =>{
				setTimeout(function(){
					commit('setCount',10);
					res(state.count);
				},getters['getCount']*1000);
			})
		}
	}
});


export default useStore;