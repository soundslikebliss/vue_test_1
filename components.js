var data = {
}

// Components
var Home = Vue.extend({
    template: '#home-content'
})

var About = Vue.extend({
    template: '#about',
    data: function() {
        return data;
    }
})

var Work = Vue.extend({
    template: '#work'
})

var Skills = Vue.extend({
    template: '#skills'
})

var Samples = Vue.extend({
    template: '#samples'
})

// instantiate app and router
var App = Vue.extend({})
var router = new VueRouter({
    hashbang: false
})


// define routes
router.map({
    '/': {
        component: Home
    },
    '/about': {
        component: About
    },
    '/work': {
        component: Work
    },
    '/skills': {
        component: Skills
    },
    '/samples': {
        component: Samples
    }
})

router.start(App, '#app')
