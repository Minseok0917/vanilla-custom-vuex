# vanilla-store-managment

### getters
(state)

### mutations
(state,payload)

### actions 
({state,getters,commit,dispatch})

```javascript
// store/user
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
```

``` javascript
// app.js
import userStore from './store/user.js';

const userInit = async ()=>{
	console.log(userStore.getters['getCount']); // 0 
	userStore.commit('setCount',5);
	console.log(userStore.getters['getCount']); // 5
	console.log(await userStore.dispatch('timeout')); // 10
};

userInit();
```