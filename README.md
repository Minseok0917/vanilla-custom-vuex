# vanilla-store-managment

### getters
(state)

### mutations
(state,payload)

### actions 
({state,getters,commit,dispatch})

```javascript
import create from './store.js';

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

useStore.getters['getCount']; // 0
useStore.commit('setCount',5);
useStore.getters['getCount']; // 5
(async()=>{
	await useStore.dispatch('timeout'); // 10
})();

export default useStore;
```