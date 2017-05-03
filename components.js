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
            statement_two : "I have experience building engaging, responsive interfaces on the web using a whole slew of web technologies. I strive to create simple, clean, and accessible solutions for end users.",
            statement_three : "Thanks for coming by!"
        };
    }
})

var Work = Vue.extend({
    template: '#work',
    data: function() {
        return {
            one : {
                place : "Wieden + Kennedy",
                duties : "Contributed heavily to multiple applications and sites. Developed architecture and utility within codebases that used frameworks such as Angular2 and BackboneJS. Used Javascript and complex CSS styling to deliver user experiences that represented the capabilities of the top ad agency in the country."
            },
            two : {
                place: "Jive Software",
                duties : "Worked on jivesoftware.com and other Jive properties while consistently incorporating new ideas via the Marketing department. Coded in heavily customized Wordpress builds that utilized custom post types, child themes, custom fields (ACF). Wrote PHP loops, functions, ternary expressions and conditional statements in creating templates from scratch, feeding data and generating logic. Wrote Javascript functions and data storage objects to facilitate translation of Marketo form fields to various foreign languages depending on visitor's geographic location."
            },
            three : {
                place: "Empirical UX",
                duties: "Built UI components and interactions using AngularJS for data-intensive apps used by Intel and Jaguar. Used services and dependency injection to share data models. Migrated several areas of code from jQuery to Angular. Made calls to Intel back-end codebase using http service. Used existing Angular directives to loop through data to build out UI. Created custom directives that corresponded to specific areas of the application and its respective data."
            },
            four : {
                place : "WebLively",
                duties: "Responsible for converting landing pages to responsive, mobile-friendly designs. Used Bootstrap grid and custom media queries. Coded in Less and compiled to CSS. Designed and implemented modernizing style updates with input from stakeholders. Worked in CodeIgniter codebase writing both PHP and JS. Acted with CEO to construct overall UX strategy."
            },
            five : {
                place: "Unigo Group",
                duties: "Co-created and maintained corporate blog following brand guidelines using Foundation 5 and Wordpress. Used Sass to add features and modify styling in Unigo.com code-base. Designed email template mock-ups in collaboration with marketing department. Gained further exposure to .Net, Visual Studio, version control, agile development, and task management tools (Jira, etc.)."
            },
            six: {
                place: "Switchboard",
                duties: "Helped to create internal metrics dashboard using front-end MVC framework with dynamic data populated through RESTful API calls. Constructed Rails application to serve FAQs to users, incorporating a CMS-style interface for non-technical admins. Utilized Javascript to create scrolling and show/hide functionality. Pushed other new site features such as Javascript tool-tips, site-wide alerts, contextual pop-ups and email preview functionality to code-base."
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
