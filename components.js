// Components
var Home = Vue.extend({
    template: '#home-content'
})

var Work = Vue.extend({
    template:
            '<div class="pages-content">' +
                '<h2>Jive Software (6/15 - 7/16)</h2>' +
                '<br />' +
                '<p>Contributed to jivesoftware.com -> a heavily cusomized WP site using custom post types, custom fields, and more!</p>' +
                '<br />' +
                '<br />' +
                '<h2>Empirical UX (2/15 - 6/15)</h2>' +
                '<br />' +
                '<p>Built UI components and interactions using AngularJS for data-intensive apps used by Intel and Jaguar. Used services and dependency injection to share data models.</p>' +
                '<br />' +
                '<br />' +
                '<h2>WebLively (8/14 - 2/15)</h2>' +
                '<br />' +
                '<p>Responsible for converting key areas of the application to responsive layouts. Designed and implemented modernizing style updates with input from stakeholders. Worked with lead dev on UX strategy.</p>' +
                '<a v-link="{ path: \'/\' }" class="hvr-shutter-in-horizontal page-button">Home</a>' +
             '</div>'
})

var Skills = Vue.extend({
    template:
            '<div class="pages-content">' +
                '<h2>Oh it\'s\ a long list... but some of the most pertinant things that I have a solid understanding of:</h2>' +
                '<br />' +
                '<ul><li>Wordpress (and custom fields, types)</li><li>PHP, OOP PHP</li><li>JS, AJAX</li> <li>AngularJS, VueJS</li><li>Sass</li><li>Grunt</li></ul>' +
                '<a v-link="{ path: \'/\' }" class="hvr-shutter-in-horizontal page-button">Home</a>' +
             '</div>'
})

var Projects = Vue.extend({
    template:
            '<div class="pages-content">' +
                '<h2>Angular</h2>' +
                '<hr>' +
                '<a href="" class="project-link">Comic Shopper</a>' +
                '<h2 class="pad-top">general Front-End</h2>' +
                '<hr>' +
                '<a href="" class="project-link">Sans</a>' +
                '<br />' +
                '<a href="" class="project-link">Cinnamon</a>' +
                '<h2 class="pad-top">Ruby/Rails</h2>' +
                '<hr>' +
                '<a href="" class="project-link">Board</a>' +
                '<br />' +
                '<a href="" class="project-link">Travel Photos</a>' +
                '<br />' +
                '<a v-link="{ path: \'/\' }" class="hvr-shutter-in-horizontal page-button">Home</a>' +
            '</div>'
})


var App = Vue.extend({})
var router = new VueRouter({
    hashbang: false
})


// define routes
router.map({
    '/': {
        component: Home
    },
    '/work': {
        component: Work
    },
    '/skills': {
        component: Skills
    },
    '/projects': {
        component: Projects
    }
})

router.start(App, '#app')
