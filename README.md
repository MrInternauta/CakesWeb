# Pasteleria

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Angular Module Loading: Eager, Lazy and Preloading

Eager loading is loading modules before application starts. Lazy loading is loading modules on demand. Preloading is loading modules in background just after application starts. In lazy loading and preloading, modules are loaded asynchronously.

- Eager loading: To load a feature module eagerly, we need to import it into application module using imports metadata of @NgModule decorator. Eager loading is useful in small size applications. In eager loading, all the feature modules will be loaded before the application starts. Hence the subsequent request to the application will be faster.
- Lazy loading: To load a feature module lazily, we need to load it using loadChildren property in route configuration and that feature module must not be imported in application module. Lazy loading is useful when the application size is growing. In lazy loading, feature module will be loaded on demand and hence application start will be faster.
- Preloading: To preload a feature module, we need to load it using loadChildren property and configure preloadingStrategy property in RouterModule.forRoot. That feature module must not be imported in application module. When we assign Angular PreloadAllModules strategy to preloadingStrategy property, then all feature modules configured with loadChildren, are preloaded. To preload selective modules, we need to use custom preloading strategy. We should preload only those features which will be visited by users just after application start and rest feature modules can be loaded lazily. In this way we can improve the performance of our bigger size application.

## Angular Forms Guide - Template Driven and Reactive Forms
<https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/>
