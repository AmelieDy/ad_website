# -*- encoding: utf-8 -*-
# stub: capistrano-unicorn-nginx 2.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "capistrano-unicorn-nginx".freeze
  s.version = "2.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Bruno Sutic".freeze]
  s.date = "2014-08-05"
  s.description = "Capistrano tasks for automatic  and sensible unicorn + nginx configuraion.\nEnables zero downtime deployments of Rails applications. Configs can be\ncopied to the application using generators and easily customized.\nWorks *only* with Capistrano 3+. For Capistrano 2 try version 0.0.8 of this\ngem: http://rubygems.org/gems/capistrano-nginx-unicorn\n".freeze
  s.email = ["bruno.sutic@gmail.com".freeze]
  s.homepage = "https://github.com/bruno-/capistrano-unicorn-nginx".freeze
  s.rubygems_version = "3.1.2".freeze
  s.summary = "Capistrano tasks for automatic and sensible unicorn + nginx configuraion.".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<capistrano>.freeze, [">= 3.1"])
    s.add_runtime_dependency(%q<sshkit>.freeze, [">= 1.2.0"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
  else
    s.add_dependency(%q<capistrano>.freeze, [">= 3.1"])
    s.add_dependency(%q<sshkit>.freeze, [">= 1.2.0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
  end
end
