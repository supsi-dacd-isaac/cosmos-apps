// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import SupsiDacdIsaacCosmosAppsSupsidacdisaacTsdbTsdb from './supsi-dacd-isaac/cosmos-apps/supsidacdisaac.tsdb.tsdb'


export default { 
  SupsiDacdIsaacCosmosAppsSupsidacdisaacTsdbTsdb: load(SupsiDacdIsaacCosmosAppsSupsidacdisaacTsdbTsdb, 'supsidacdisaac.tsdb.tsdb'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
