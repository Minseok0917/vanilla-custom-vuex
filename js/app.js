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


console.log(a.getters['getName']);
a.mutations['setName']('규량');
console.log(a.getters['getName']);