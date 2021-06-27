import Vue from 'vue'

Vue.directive('demo', {
    bind: function(el) {
            console.log('bind', el)
    },
    inserted: function(el) {
        console.log('inserted',el)
    },
    updata: function(el) {
        console.log('update', el)
    },
    componentUpdated: function(el) {
        console.log('componentUpdated', el)
    },
    unbind: function(el) {
        console.log('unbind', el)
    }
})