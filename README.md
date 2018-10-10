# Semantic Test App
- REKIK Wassim
- wassim.rekik@insat.u-carthage.tn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Husky : for git hooks

When doing javascript development it is common to have linting and test tasks in your package.json file.
It is easy to forget to run these common tasks before pushing code and this can result in a broken build (if using continues integration) or the next developer will see the issues when pulling down the latest code.
A way to work around this problem is to use git hooks that will allow you to hook into the git workflow to run tasks. Git hooks are not easy to share across a development team as git hooks are located in the .git/hooks folder.
Luckily a npm package called [Husky](https://github.com/typicode/husky) can help solve this issue. Husky describes itself as “Git hooks made easy”. After using it I must agree that it does indeed do just that!
Husky provide "precommit" and "prepush" in script package.json where we can run command before commiting or pushing.

## CommitLint : Commit message test

[Commitlint](https://github.com/marionebl/commitlint) is template for our commit message subject(scope): message... description.

## Travis Ci : Continious integration service

[Travis CI](https://travis-ci.org/) is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.
When Travis CI has been activated for a given repository, GitHub will notify it whenever new commits are pushed to that repository or a pull request is submitted. It can also be configured to only run for specific branches, or branches whose names match a specific pattern. Travis CI will then check out the relevant branch and run the commands specified in .travis.yml, which usually build the software and run any automated tests. When that process has completed, Travis notifies the developer(s) in the way it has been configured to do so—for example, by sending an email containing the test results (showing success or failure), or by posting a message on an IRC channel. In the case of pull requests, the pull request will be annotated with the outcome and a link to the build log, using a GitHub integration.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Codacy : code quality review

[Codacy](https://www.codacy.com) : Check code style, security, duplication, complexity and coverage on every change while tracking code quality throughout your sprints.
