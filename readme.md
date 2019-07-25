![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# pwa-install

Current version: v0.0.4 alpha

`pwa-install` is a [web component](https://meowni.ca/posts/web-components-with-otters/) built with [Stencil](https://stenciljs.com) that brings an awesome "install" experience to your Progressive Web App! It is still early for this component, but expect lots of improvements soon!


### What does it look like? 
![An image of what the component looks like](pwa-install.png?raw=true "pwa-install")

## Using this component

### Things to know:
- pwa-install uses the `beforeinstallprompt` event described [in these docs](https://developers.google.com/web/fundamentals/app-install-banners/) to know when the browser has said your PWA is installable. It will not show the install button until this event has fired. This can be worked around by using the `forceshow` prop described below.
- pwa-install currently takes advantage of these parts of the [w3c manifest spec](https://www.w3.org/TR/appmanifest/): name, categories, description, screenshots

## Install
### Script tag

- Put these two script tags in the head of your index.html: 
```html
  <script type="module" src="https://unpkg.com/pwa-install/dist/pwa-install/pwa-install.esm.js"></script>
  <script nomodule="" src="https://unpkg.com/pwa-install/dist/pwa-install/pwa-install.js"></script>
```
- Then you can use the element `<pwa-install></pwa-install>` anywhere in your template, JSX, html etc. An example of using this component can be found here: https://glitch.com/~pwa-install-example


## API
### Properties

| Property       | Attribute      | Description | Type      | Default     |
| -------------- | -------------- | ----------- | --------- | ----------- |
| `forceshow`    | `forceshow`    | Will always show install button            | `boolean` | `undefined` |
| `iconpath`     | `iconpath`     |  path to app icon           | `string`  | `undefined` |
| `manifestpath` | `manifestpath` |  path to your web manifest        | `string`  | `undefined` |
