import state from "../app/store/state"
import * as mutations from "../app/store/mutations"
import * as actions from "../app/store/mutations"
import * as getters from "../app/store/getters"

export default 
    {
        namespaced:true,
        state,
        mutations,
        actions,
        getters,
}
