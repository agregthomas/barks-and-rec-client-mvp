[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# react-auth-template

A front-end framework template for starting projects with a recent version of
either the [Rails API Template](https://git.generalassemb.ly/ga-wdi-boston/rails-api-template)
or the [Express API Template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template).

## Installation

1. [Download](../../archive/master.zip) this template.
1. Unzip and rename the template directory (`unzip ~/Downloads/react-auth-template-master.zip`).
1. Move into the new project and `git init`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace `ga-wdi-boston.react-auth-template` in `package.json` with your
   projects name.
1. Replace the `"homepage"` field in `package.json` with your (public) Github
   account name and repository name.
1. Install dependencies with `npm install`.
2. Install Material-UI
  1. For core components `npm install @material-ui/core`.
  2. For icons `npm install @material-ui/icons`.
  3. For Snackbar management `npm install notistack`.
1. `git add` and `git commit` your changes.
1. Create a new repository on [github.com](https://github.com),
    _not GitHub Enterprise_.
1. Name the new repository with the same name used on Step 6.
1. Follow the instructions on your new repository's setup page. For details on
   how to push to Github, refer to the section on Github entitled "…or push an existing
   repository from the command line." Further documentation can be found [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).
1. Run the development server with `npm start`.

## Deployment

Before deploying, you first need to make sure the `homepage` key in your
`package.json` is pointing to the correct value. It should be the url of your
deployed application.

To deploy you should first make sure you are on the `master` branch with a
clean working directory, then you can run `npm run deploy` and wait to see if
it runs successfully.

## About

This template is derived from GA Boston's [react-template](https://git.generalassemb.ly/ga-wdi-boston/react-template).
Most of the development dependencies, such as linters, SCSS compiler, Webpack
config, NPM scripts, etc in this repo come from there.

It includes all the components and routes needed to sign up, sign in, change
passwords, and sign out of an API built with either template linked above, with
no need for modification.

**NOTE**: You should customize the included components to suit you app! They're
provided as a guide and a bare minimum of functionality and style. Consider
changing the provided SCSS styles, modifying the auth code, improving the flash
messages, etc.

## Structure

Currently, the top-level `App` component stores the currently authenticated
user in state, as well as data related to the flash messages. `App` renders the
`Header` component, and a list of routes, each of which render a component from
`src/auth/components`. The `auth` directory has two non-component files, `api`
and `messages`, which contain all the needed `fetch` calls, and messages to
display when API calls succeed or fail, respectively.

We recommend following this pattern in your app. For instance, if you are making
an app that keeps track of books, you might want a `books` directory next to
`auth`, which contains its own `api` and `messages` files, as well as a
`components` directory.

## Features

### `<AuthenticatedRoute />`

This template contains a handy component for creating routes that require a
user to be authenticated before visiting. This component lives in
`src/auth/components/AuthenticatedRoute.js` and is already required in `App`.
It's a thin wrapper around React Router's `<Route />` component. The only
difference is that it expects a prop called `user`, and if that prop is falsy,
it will render a `<Redirect />` that takes the user to `/`. **If you want to use
it, you must pass it the currently authenticated as a prop!**

It supports both the `component=` and `render=` attributes, but like `<Route />`
it will not forward props to the component if you use `component=`.

### Flash Messages

The `App` component has a rudimentary version of flash messages. To use it,
pass `this.flash` into a subcomponent of `App` as a prop and call it from there.
It expects two arguments: a message to display, and a message type, which is one
of `'flash-success'`, `'flash-warning'`, and `'flash-error'` which make the
message green, yellow, and red, respectively. You must pass one of these types.
You can add more types by adding more CSS rules in `App.scss`.

In the auth components, flash messages are used in conjunction with the
 `auth/messages` file to select from a list of predefined success/failure
 messages. To undertand how to do this, look at the definition of `flash` in
 `App.js`, the `signUp` method in `auth/components/SignUp.js`, and the
 `auth/messages.js` file.

 To change the duration of the message, replace `2000` with a value of your
 choice (in milliseconds) in the `flash` method definition in `App.js`.

 ### `src/apiConfig.js`

 Just like in
[browser-template](https://git.generalassemb.ly/ga-wdi-boston/browser-template),
this file will determine whether you're in a production or development
environment and choose an API URL accordingly. Don't forget to replace the
`production` URL with your deployed API's URL.

# react-auth-template + material-ui

<img src="https://material-ui.com/static/images/material-ui-logo.svg" width="150" align="right">

[Material-UI](https://material-ui.com/) is a React component library that implements Google's Material Design.  This popular collection of pre-built components is downloaded more than 1 million times a week!

This repo contains an example implementation of Material-UI components within the GA react-auth-template.  The details of how the components are used in the context of this template are explained below along with the steps for setting up your project to use the Material-UI Library.

- [Getting Started](#getting-started)
- [Refactoring Bootstrap Alerts with Material-UI Snackbars](#refactoring-bootstrap-alerts-with-material-ui-snackbars)

## Getting Started

To use Material-UI in your project, you'll need to install it with npm; optionally, load the Roboto font and Material Icons; and, remove Bootstrap from your project.

### Step 1: Install Material-UI

In the Terminal, cd into your project directory and run:

```bash
npm install @material-ui/core
```

### Step 2: Add Roboto Font and Material Icons

Material-UI was designed with the Roboto font and Material Icons, both of which are available via the Google Fonts Content Delivery Network (CDN). To add these, find the `index.html` file in the `public` folder of your project, and add the following as the **first** link tag within the `<head>`.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Roboto:300,400,500" />
```
> **Note**: Ordinarily we don't make any changes to the index.html, but we prefer to use a CDN for fonts because it will be less likely that your users will have to download the font files if we don't host them ourselves.  Moreover, if the fonts do need to be downloaded by the user, it will be much faster from a CDN.

### Step 3: Remove Bootstrap

Some of the Bootstrap styles can collide with the Material-UI styles, so we'll remove it from the project.  Open your project in Atom, then follow the steps below to remove Bootstrap:

1. In the `src` directory, go to `index.js` and delete the Boostrap stylesheet import statement:

```js
// Remove this:
import 'bootstrap/dist/css/bootstrap.min.css'
```
2. In `App.js`, remove the Boostrap Alert component import statement:

```js
// Remove this:
import Alert from 'react-bootstrap/Alert'
```

3. We're going to refactor the Bootstrap alerts using the Material-UI Snackbar component, so you no longer need the code that refers to the Alert component in the render statement of the `App.js` file:

```js
// Remove this code:
  {alerts.map((alert, index) => (
    <Alert key={index} dismissible variant={alert.type}>
      <Alert.Heading>
        {alert.message}
      </Alert.Heading>
    </Alert>
  ))}
```
4. You should also remove the `alert` property **from the component state** and the reference to it **in the render function**.

5. You won't need the alert class field function any more either, so remove it from the App component class:

```js
//  Remove this code:
alert = (message, type) => {
  this.setState({ alerts: [...this.state.alerts, { message, type }] })
}
```

6. Lastly, you can remove Bootstrap from your project entirely by running `npm uninstall bootstrap` in the Terminal.

### Step 4: Test Your Project and Commit Changes

At this point, your project should launch when run with the `npm start` command, albeit without the alerts. Confirm that all of the authentication functionality still works. Once tested, add and commit your changes.

## Refactoring Bootstrap Alerts with Material-UI Snackbars

To make things simple, we'll be using the [notistack](https://github.com/iamhosseindhv/notistack) package to manage the open and close state of individual snackbars.

### Step 1: Install notistack

To install notistack, run `npm install notistack` in the project directory from the Terminal.

### Step 2: Import the SnackbarProvider

The notistack SnackbarProvider component will provide a wrapper for your project components that handles the state of all of the snackbars throughout your project.  Add the following import statement to the App.js file:

```js
import { SnackbarProvider } from 'notistack'
```

### Step 3: Add and Configure the SnackbarProvider

Inside the render function of App.js, wrap the contents of the entire render with `<SnackbarProvider> ... </SnackbarProvider>`.  Since you now have the SnackbarProvider component serving as your parent element, you should also the remove the unneeded `<React.Fragment> ... </React.Fragment>` wrapper.

Another feature of notistack is that it will automatically handle stacking the snackbars, if multiple snackbars are open at the same time.  The SnackbarProvider takes a prop to allow us to control how many snackbars should be allowed to stack on the page.  Add the prop `maxSnack={3}` to the SnackbarProvider so that no more than three snackbars are displayed at any given time.

### Step 4: Replace Alerts in the Components

The SnackbarProvider is a Higher Order Component (HOC) that allows us to add snackbars to any component by calling the `enqueueSnackbar()` method that is passed as a prop to all of the children routes of the provider.

#### Import withSnackbar

Open the `SignUp.js` file and add the following import statement:

```js
import { withSnackbar } from 'notistack'
```

#### Wrap the component in the HOC

Often, HOCs are added to react components by wrapping the exported component in a method.  We've seen this with the react-dom-router `withRouter()` method.  The `withSnackbar` is used the same way.  In this case, we already have `withRouter()` being used, but there's no problem with passing everything to `withSnackbar()`:

```js
export default withSnackbar(withRouter(SignUp))
```

#### Use enqueueSnackbar to produce the snackbar message on Sign Up

Inside the SignUp class field function, remove `alert` from the destructured props and replace it with `enqueueSnackbar`:

```js
const { enqueueSnackbar, history, setUser } = this.props
```

Conveniently, the `enqueueSnackbar()` method behaves almost exactly like the custom alert method that's already built into the template.  There are two small changes to make for both the success and failure messages.  First, replace `alert` with `enqueueSnackbar`.  Second, change the second argument, which determines the type of message, to an object with a key of `variant`:

```js
.then(() => enqueueSnackbar(messages.SignUpSuccess, { variant: 'success' }))
```

>**Note**: The variant type for failure messages using the Bootstrap alert would be **'danger'** but for Material-UI it is **'error'**.

### Step 4: Test and Commit Changes

Make sure your sign up component works, then add and commit your changes.  Update all of the remaining authentication components in the same way. :tada:

##
