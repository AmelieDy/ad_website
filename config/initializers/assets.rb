# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
Rails.application.config.assets.precompile = [
                                                # JS
                                                "application.js",
                                                "website.js",
                                                "resume.js",
                                                # STYLESHEETS
                                                "application.css",
                                                "website.css",
                                                "resume.css",
                                                # IMAGES
                                                # layers
                                                "layers/mountain.jpg",
                                                "layers/minimal.jpg",
                                                "layers/home-1.jpg",
                                                "layers/minimal3.jpg",
                                                "layers/img_cv_big.jpg",
                                                # services
                                                "services/network.png",
                                                "services/detail.png",
                                                "services/uniq.png",
                                                "services/responsive.png",
                                                "services/evolution.png",
                                                "services/support.png",
                                                "services/support.png",
                                                "services/layers.png",
                                                # contact
                                                "contact/paperplane.png",
                                                "contact/in.png",
                                                "contact/soundcloud.png",
                                                "contact/phone.png",
                                                "contact/email.png",
                                                "contact/location.png",
                                                "contact/shift.png",
                                                # other
                                                "mountain.png",
                                                "menu.png",
                                                "contact/git.png",
                                                "trello.png",
                                                "eye.png",
                                                "user.png",
                                                "slack.png",
                                                "linux.png",
                                                'three-dots.svg'
                                              ]
