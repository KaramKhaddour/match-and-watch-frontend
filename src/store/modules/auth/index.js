import mutations from './mutations';
import getters from './getters';
import actions from './actions';
export default {
    namespaced:true,
    state(){
        return {
           authenticated:0,
           access_token:'',
           expires_in:0,
           refresh_token:'',
           refresh_token_expires_in:0,
        };
    },
    mutations,
    getters,
    actions,
};