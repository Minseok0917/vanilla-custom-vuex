function defineStore(options){
	return{
		getters:{},
		commit(){},
		dispatch(){},
	}
}

const todos = defineStore({
	state:{},
	getters:{},
	mutations:{},
	actions:{},
});


todos.getters['getUsers']
todos.getters['getUser']
todos.commit('setUser',{
	name:'민석'
});
todos.commit('addUser',{
	name:'규량'
});
todos.dispatch('fetchUser');