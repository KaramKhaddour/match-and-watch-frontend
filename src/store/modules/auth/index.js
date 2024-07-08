import mutations from './mutations';
import getters from './getters';
import actions from './actions';
export default {
    namespaced:true,
    state(){
        return {
           token:'kkkkkkkkkkkkkk',
           email:'',
           userId:'',
           refreshToken:'',
           expiresIn:'',
        };
    },
    mutations,
    getters,
    actions,
};