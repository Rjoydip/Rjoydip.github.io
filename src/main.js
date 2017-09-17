"use strict";

import Vue from 'vue';
import App from './App.vue';

/**
 *  Vue instance 
 */
new Vue({
  el: '#app',
  data: {
    about: require('./db/about.json'),
    contacts: require('./db/contacts.json'),
    footer: require('./db/footer.json'),
    intro: require('./db/intro.json'),
    quotes: require('./db/quotes.json'),
    socials: require('./db/socials.json'),
    timelines: require('./db/timelines.json'),
    skils: require('./db/skils.json')
  },
  render: h => h(App)
})