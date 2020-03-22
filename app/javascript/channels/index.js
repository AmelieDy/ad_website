// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
//= require wow

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

var wow = new WOW({
                boxClass:     'wow',      // default
                animateClass: 'animated', // default
                offset:       150,        // default
                mobile:       true,       // default
                live:         true        // default
              })
wow.init();
