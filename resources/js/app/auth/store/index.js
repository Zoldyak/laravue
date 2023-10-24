import state from "./state"
import * as mutations from "./mutations"

import * as actions from "./mutations"
import * as getters from "./getters"

export default 
    {
        namespaced:true,
        state,
        mutations,
        actions,
        getters,
}
