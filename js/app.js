import test from './test.js';




const a = test({
	state:{
		name:'민석'
	},
	getters:{
		getName:(state)=> state.name
	},
	mutations:{
		setName:(state,payload)=> state.name = payload
	}
});