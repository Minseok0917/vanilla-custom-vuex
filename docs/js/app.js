import userStore from './store/user.js';




const userInit = async ()=>{
	console.log(userStore.getters['getCount']);
	userStore.commit('setCount',5);
	console.log(userStore.getters['getCount']);
	console.log(await userStore.dispatch('timeout'));
};

userInit();
