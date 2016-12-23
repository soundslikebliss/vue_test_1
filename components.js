// Components
var About = Vue.extend({
    template: '<div class="pages-content">' +
                    '<br />' +
                    '<h2>My Deal</h2>' +
                    '<hr>' +
                    '<br />' +
                    '<p>I\'\m David Adams and I\'\m a Front-End Web Developer.</p>' +
                    '<br />' +
                    '<p>I have experience building engaging, responsive interfaces on the web using a whole slew of web technologies. I strive to create simple, clean, and accessible solutions for end users.</p>' +
                    '<br />' +
                    '<br />' +
                    '<p>Thanks for coming by!</p>' +
                    '<a v-link="{ path: \'/\' }" class="hvr-shutter-in-horizontal page-button">Home</a>' +
                '</div>'


})

var Home = Vue.extend({
    template: '#home-content'
})

var Work = Vue.extend({
    template:
            '<div class="pages-content">' +
                '<br />' +
                '<h2>Wieden and Kennedy</h2>' +
                '<br />' +
                '<p>Contributed heavily to multiple applications and sites. Developed architecture and utility within codebases that used frameworks such as Angular2 with Typescript and BackboneJS. Used Javascript and complex CSS styling to deliver user experiences that represented the capabilities of one of the top ad agencies in the country.</p>' +
                '<br />' +
                '<br />' +
                '<h2>Jive Software</h2>' +
                '<br />' +
                '<p>Worked on jivesoftware.com and other Jive properties while consistently incorporating new ideas via the Marketing department. Coded in heavily customized Wordpress builds that utilized custom post types, child themes, custom fields (ACF). Wrote PHP loops, functions, ternary expressions and conditional statements in creating templates from scratch, feeding data and generating logic. Wrote Javascript functions and data storage objects to facilitate translation of Marketo form fields to various foreign languages depending on visitor\'\s geographic location.</p>' +
                '<br />' +
                '<br />' +
                '<h2>Empirical UX</h2>' +
                '<br />' +
                '<p>Built UI components and interactions using AngularJS for data-intensive apps used by Intel and Jaguar. Used services and dependency injection to share data models. Migrated several areas of code from jQuery to Angular. Made calls to Intel back-end codebase using http service. Used existing Angular directives to loop through data to build out UI. Created custom directives that corresponded to specific areas of the application and its respective data.</p>' +
                '<br />' +
                '<br />' +
                '<h2>WebLively</h2>' +
                '<br />' +
                '<p>Responsible for converting landing pages to responsive, mobile-friendly designs. Used Bootstrap grid and custom media queries. Coded in Less and compiled to CSS. Designed and implemented modernizing style updates with input from stakeholders. Worked in CodeIgniter codebase writing both PHP and JS. Acted with CEO to construct overall UX strategy.</p>' +
                '<br />' +
                '<br />' +
                '<h2>Unigo Group</h2>' +
                '<br />' +
                '<p>Co-created and maintained ​corporate blog​ following brand guidelines using Foundation 5 and Wordpress. Used Sass to add features and modify styling in Unigo.com code-base. Designed email template mock-ups in collaboration with marketing department. Gained further exposure to .Net, Visual Studio, version control, agile development, and task management tools (Jira, etc.). </p>' +
                '<br />' +
                '<br />' +
                '<h2>Switchboard</h2>' +
                '<br />' +
                '<p>Helped to create internal metrics dashboard using front-end MVC framework with dynamic data populated through RESTful API calls. ​ Constructed Rails application to serve FAQs to users, incorporating a CMS-style interface for non-technical admins.​ Utilized Javascript to create scrolling and show/hide functionality. ​ Pushed other new site features such as ​Javascript tool-tips, site-wide alerts, ​contextual pop-ups and email preview functionality to code-base.</p>' +
                '<a v-link="{ path: \'/\' }" class="hvr-shutter-in-horizontal page-button">Home</a>' +
             '</div>'
})

var Skills = Vue.extend({
    template:
            '<div class="pages-content">' +
                '<br />' +
                '<h2>Oh it\'s\ a long list... but some of the most pertinent things that I have a solid understanding of:</h2>' +
                '<br />' +
                '<ul><li>JS, JQuery, AJAX</li> <li>AngularJS, VueJS,  React</li><li>HTML, CSS, Sass</li><li>Grunt, Gulp</li><li>Wordpress (and custom fields, types, themes)</li><li>PHP, OOP PHP, Ruby, Rails, SQL</li><li>UX Wireframing in Balsamiq and Gliffy, Photoshop</li></ul>' +
                '<a v-link="{ path: \'/\' }" class="hvr-shutter-in-horizontal page-button">Home</a>' +
             '</div>'
})

var Samples = Vue.extend({
    template:
            '<div class="pages-content">' +
                '<br />' +
                '<h3>Delta Airlines / Seattle Seahawks</h3>' +
                '<hr>' +
                '<br />' +
                '<a href="https://www.12status.com/" target="_blank">Delta 12Status</a>' +
                '<br />' +
                '<br />' +
                '<br />' +
                '<br />' +
                '<h3>Powerade</h3>' +
                '<hr>' +
                '<br />' +
                '<a href="http://www.us.powerade.com/" target="_blank">Power Through</a>' +
                '<br />' +
                '<br />' +
                '<br />' +
                '<br />' +
                '<h3>KFC</h3>' +
                '<hr>' +
                '<br />' +
                '<a href="https://www.nashvillehotrecord.com/" target="_blank">Nashville Hot</a>' +
                '<br />' +
                '<br />' +
                '<br />' +
                '<a v-link="{ path: \'/\' }" class="hvr-shutter-in-horizontal page-button">Home</a>' +
            '</div>'
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
