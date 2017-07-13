// Components
var Home = Vue.extend({
    template: '#home-content'
})

var About = Vue.extend({
    template: '#about',
    data: function() {
        return {
            heading : "My Deal",
            statement_one : "I'm David Adams and I'm a Web Developer.",
            statement_two : "I have several years of experience building engaging, responsive interfaces on the web. I strive to create simple, clean, and accessible solutions for end users.",
            statement_three: "When I'm not writing functions or reusable components, I'm usually reading, netflix-binging, shooting hoops, or dreaming of far-off flyfishing excursions.",
            statement_four : "Thanks for coming by!"
        };
    }
})

var Work = Vue.extend({
    template: '#work',
    data: function() {
        return {
            one : {
                place : "Wieden + Kennedy",
                duties : "Developed architecture and utility within codebases that used frameworks such as Angular2 and BackboneJS. Used Javascript and complex CSS styling to deliver user experiences that represented the capabilities of the top ad agency in the country."
            },
            two : {
                place: "Jive Software",
                duties : "Worked on jivesoftware.com and other Jive properties while consistently incorporating new ideas via the Marketing department. Coded in heavily customized Wordpress builds that utilized custom post types, child themes and custom fields (ACF)."
            },
            three : {
                place: "Empirical UX",
                duties: "Built UI components and interactions using AngularJS for data-intensive apps used by Intel and Jaguar. Used services, dependency injection and custom directives. Migrated several areas of code from jQuery to Angular."
            },
            four : {
                place : "WebLively",
                duties: "Responsible for converting landing pages to responsive, mobile-friendly designs. Designed and implemented modernizing style updates with input from stakeholders. Worked in CodeIgniter codebase writing both PHP and JS. Acted with CEO to construct overall UX strategy."
            },
            five : {
                place: "Unigo Group",
                duties: "Co-created and maintained corporate blog following brand guidelines. Designed email template mock-ups in collaboration with marketing department. Gained further exposure to .Net, Visual Studio, version control, agile development, and task management tools (Jira, etc.)."
            },
            six: {
                place: "Switchboard",
                duties: "Helped to create internal metrics dashboard using front-end MVC framework. Constructed Rails application to serve FAQs to users, incorporating a CMS-style interface for non-technical admins. Pushed features such as Javascript tool-tips, site-wide alerts, contextual pop-ups and email preview functionality to code-base."
            }
        }
    }
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


//  footer partial
Vue.partial('footer', '<div class="send-me-mail"><p>Send me mail: russianid1@gmail.com. <br>This is a single page site using Vue and Vue router. Check out the <a href="https://github.com/soundslikebliss/vue_test_1" target="_blank"> code.</p></div>')

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
