// Components
var About = Vue.extend({
    template: '<div class="pages-content">' +
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
                '<h2>Oh it\'s\ a long list... but some of the most pertinent things that I have a solid understanding of:</h2>' +
                '<br />' +
                '<ul><li>JS, JQuery, AJAX</li> <li>AngularJS, VueJS, currently learning ReactJS</li><li>HTML, CSS, Sass</li><li>Grunt</li><li>Wordpress (and custom fields, types, themes)</li><li>PHP, OOP PHP</li><li>UX Wireframing in Balsamiq and Gliffy</li></ul>' +
                '<a v-link="{ path: \'/\' }" class="hvr-shutter-in-horizontal page-button">Home</a>' +
             '</div>'
})

var Projects = Vue.extend({
    template:
            '<div class="pages-content">' +
                '<h2>AngularJS</h2>' +
                '<h3>(single-page application, drag and drop functionality, custom directives (components))</h3>' +
                '<hr>' +
                '<a href="http://comics.pizzapartypdx.com/" class="project-link" target="_blank">Comic Shopper</a>' +
                '<h2 class="pad-top">AJAX, OOP</h2>' +
                '<h3>(external API consumption using AJAX, OOP with PHP)</h3>' +
                '<hr>' +
                '<a href="http://yoda.pizzapartypdx.com/" class="project-link" target="_blank">English to Yoda Translator</a>' +
                '<h2 class="pad-top">General Front-End.</h2>' +
                '<h3>(scroll-to behavior, animations, modals, image carousel, responsiveness)</h3>' +
                '<hr>' +
                '<a href="http://sanssouci.pizzapartypdx.com/" class="project-link" target="_blank">Sans</a>' +
                '<br />' +
                '<a href="http://cinnamon.pizzapartypdx.com/" class="project-link" target="_blank">Cinnamon</a>' +
                '<h2 class="pad-top">Back-End</h2>' +
                '<h3>(Ruby/Rails, persistent data storage (SQL), user authentication)</h3>' +
                '<hr>' +
                '<a href="http://bloggyb.herokuapp.com/posts" class="project-link" target="_blank">Board</a>' +
                '<br />' +
                '<a href="http://ancient-sea-6769.herokuapp.com/" class="project-link" target="_blank">Travel Photos</a>' +
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
    '/projects': {
        component: Projects
    }
})

router.start(App, '#app')
