// Components
var Home = Vue.extend({
    template:
            '<table>' +
                '<tr>' +
                    '<td>' +
                        '<a v-link="{ path: \'/\' }" class="hvr-shutter-in-horizontal">Here</a>' +
                    '</td>' +
                    '<td>' +
                        '<a v-link="{ path: \'/work\' }" class="hvr-shutter-in-horizontal">Workin\'\ It</a>' +
                    '</td>' +
                    '<td>' +
                        '<div class="face">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<a v-link="{ path: \'/skills\' }" class="hvr-shutter-in-horizontal">Skills</a>' +
                    '</td>' +
                    '<td>' +
                        '<a v-link="{ path: \'/projects\' }" class="hvr-shutter-in-horizontal">Projects</a>' +
                    '</td>' +
                '</tr>' +
            '</table>' +

            '<div class="im_a_lawyer">' +
                '<h1>David Adams,</h1>' +
                '<br />' +
                '<h2>Developer</h2>' +
            '</div>'
})

var Work = Vue.extend({
    template:
            '<div class="pages-content">' +
                '<p>Cat ipsum dolor sit amet, meowing non stop for food, scratch the furniture. Chase the pig around the house purr while eating, for kitty power! always hungry for meow all night having their mate disturbing sleeping humans scamper use lap as chair. Cat slap dog in face sleep in the bathroom sink, kitty loves pigs. Chew foot. Sleep on dog bed, force dog to sleep on floor. Hack up furballs chase imaginary bugs destroy couch as revenge thinking longingly about tuna brine, but groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked! or playing with balls of wool rub face on owner. Stare at ceiling asdflkjaertvlkjasntvkjn (sits on keyboard) and hide at bottom of staircase to trip human yet massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Attack dog, run away and pretend to be victim throwup on your pillow step on your keyboard while youre gaming and then turn in a circle . Sweet beast destroy couch, and leave hair everywhere, yet lie on your belly and purr when you are asleep, but sleep on keyboard, or dream about hunting birds chew on cable. </p>' +
                '<a v-link="{ path: \'/\' }" class="hvr-shutter-in-horizontal page-button">Home</a>' +
             '</div>'
})

var Skills = Vue.extend({
    template:
            '<div class="pages-content">' +
                '<p>Cat ipsum dolor sit amet, meowing non stop for food, scratch the furniture. Chase the pig around the house purr while eating, for kitty power! always hungry for meow all night having their mate disturbing sleeping humans scamper use lap as chair. Cat slap dog in face sleep in the bathroom sink, kitty loves pigs. Chew foot. Sleep on dog bed, force dog to sleep on floor. Hack up furballs chase imaginary bugs destroy couch as revenge thinking longingly about tuna brine, but groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked! or playing with balls of wool rub face on owner. Stare at ceiling asdflkjaertvlkjasntvkjn (sits on keyboard) and hide at bottom of staircase to trip human yet massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Attack dog, run away and pretend to be victim throwup on your pillow step on your keyboard while youre gaming and then turn in a circle . Sweet beast destroy couch, and leave hair everywhere, yet lie on your belly and purr when you are asleep, but sleep on keyboard, or dream about hunting birds chew on cable. </p>' +
                '<a v-link="{ path: \'/\' }" class="hvr-shutter-in-horizontal page-button">Home</a>' +
             '</div>'
})

var Projects = Vue.extend({
    template:
            '<div class="pages-content">' +
                '<p>Cat ipsum dolor sit amet, meowing non stop for food, scratch the furniture. Chase the pig around the house purr while eating, for kitty power! always hungry for meow all night having their mate disturbing sleeping humans scamper use lap as chair. Cat slap dog in face sleep in the bathroom sink, kitty loves pigs. Chew foot. Sleep on dog bed, force dog to sleep on floor. Hack up furballs chase imaginary bugs destroy couch as revenge thinking longingly about tuna brine, but groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked! or playing with balls of wool rub face on owner. Stare at ceiling asdflkjaertvlkjasntvkjn (sits on keyboard) and hide at bottom of staircase to trip human yet massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Attack dog, run away and pretend to be victim throwup on your pillow step on your keyboard while youre gaming and then turn in a circle . Sweet beast destroy couch, and leave hair everywhere, yet lie on your belly and purr when you are asleep, but sleep on keyboard, or dream about hunting birds chew on cable. </p>' +
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
