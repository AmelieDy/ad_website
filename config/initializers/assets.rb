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
                                                "network.png",
                                                "mountain.png",
                                                "mountain.jpg",
                                                "minimal.jpg",
                                                "home-1.jpg",
                                                "minimal3.jpg",
                                                "support.png",
                                                "layers.png",
                                                "menu.png",
                                                "in.png",
                                                "soundcloud.png",
                                                "shift.png",
                                                "img_cv_big.jpg",
                                                "detail.png",
                                                "uniq.png",
                                                "responsive.png",
                                                "evolution.png",
                                                "support.png",
                                                "git.png",
                                                "trello.png",
                                                "eye.png",
                                                "paperplane.png",
                                                "user.png",
                                                "slack.png",
                                                "linux.png",
                                                'three-dots.svg'
                                              ]
