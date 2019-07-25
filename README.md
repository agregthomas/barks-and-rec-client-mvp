  # **Barks-and-Rec**

  Survey Says is a web application that allows users to log in, create/update/delete surveys, take surveys,
  and view the results of surveys.


  **Technologies Used**
  ===

  Back-End
  ---
  - ![node](https://icongr.am/devicon/nodejs-original.svg) Node
  - ![express](https://icongr.am/devicon/express-original.svg) Express
  - ![mongo](https://icongr.am/devicon/mongodb-original-wordmark.svg) MongoDB
  - ![mongoose](https://pm1.narvii.com/6325/27c78e40ca616a10b0dc546b5a91b532596217b4_128.jpg) Mongoose


  Front-End
  ---
  - ![javascript](https://icongr.am/devicon/javascript-original.svg) Javascript
  - ![react](https://icongr.am/devicon/react-original.svg) React


  Styling
  ---
  - ![html](https://icongr.am/devicon/html5-original.svg) HTML
  - ![css](https://icongr.am/devicon/css3-original.svg) CSS
  - ![sass](https://icongr.am/devicon/sass-original.svg) Sass
  - ![Material-UI](https://d2.alternativeto.net/dist/icons/material-ui_125634.png?width=128&height=128&mode=crop&upscale=false) Material-UI


  Links
  ---
  * Front-End Repo: https://github.com/agregthomas/barks-and-rec-client-mvp
  * Back-End Repo: https://github.com/agregthomas/barks-and-rec-server-mvp
  * Deployed Front-End: https://agregthomas.github.io/barks-and-rec-client-mvp
  * Deployed Back-End: https://floating-ocean-75150.herokuapp.com/


  ## Installation

  1. Fork and clone this repository.
  2. Install dependencies using npm install.
  3. This application leans heavily on Material-UI and Notistack for Snackbar management. It does not, however, use Material-UI icons. Should you like to add this please `npm install @material-ui/icons`.
  4. `git add.` and `git commit` your changes.
  5. Spin up a local environment with `npm start`.
    1. NOTE: by default the application will be hosted on port 7165. Should you like to change this, you may do so by changing the hard-coding in scripts/start.js ln:43.

  User Stories
  ---
  ### Authorization
  * As a new user, I can sign up for the application using an email and password.
  * As a signed up user, I can use my credentials to sign in to the application.
  * As a signed in user, I can change my password.
  * As a signed in user, I can sign out.


  ### Dog Create/Edit
  * As a signed in user, I can get all dogs.
  * As a signed in user, I can create a new dog.
  * As a signed in user, I can change the name and breed of a dog.
  * As a signed in user, I can remove dogs I have created.


  Wireframe
  ---
  ### Main Page
  ![mainpage](./photos/mainpage.jpg)

  ### Dog Profile
  ![dogpage](./photos/dogpage.jpg)

  ### Edit/Create Form
  ![dogform](./photos/dogform.jpg)

  Entity Relationship Diagram
  ------
  ### Basic ERD
  ![erd1](./photos/erd.jpg)


  API Paths & Methods
  ------
  ### Authentication

  | Method | URL
  |--------|------------------------
  | POST   | `/sign-up`
  | POST   | `/sign-in`
  | PATCH  | `/change-password/`
  | DELETE | `/sign-out/`

  ### Dogs

  | Method   | URL
  |--------|------------------------
  | POST   | `/create-dog`
  | GET    | `/dogs`
  | GET    | `/dogs/:id`
  | PATCH  | `/dogs/:id`
  | DELETE | `/dogs/:id`


  Planning
  ------

#### BRAINSTORM ####
I knew from the start of the course I wanted to write an application having something to do with dogs. Joking with a few classmates, we cooked up an idea for a site that would allow you to register your pup and be matched with other dog-lovers looking for a play date! Thus, Barks and Rec was born.

#### GOALS ####
1. Create a resource for CRUDing Dog Profiles.
  - Integrate with a third-party datastore to allow for storage of dog avatars.
2. Create a resource for traking local meet-up spots (i.e. Parks, dog-friendly venues, etc.).
  - Integrate with a third-party API capable of parsing geolocation data.
  - Categorize by neighborhood.


  Process
  ------
  * Refactoring the Express Template to sit on a PostgreSQL database instead of MongoDB.
    - Explored using an ORM (Knex.js being the most popular). Ultimately used SQL queries with Node's pg package.
    - Introduced pg-patch middleware for dynamically constructing PATCH requests.
  * Refactoring Auth on the front-end to conform to the new data standard.
  * Research and implement Google Maps API.


  Problem-Solving Strategy
  ------

  * Utilized online resources such as StackOverflow to investigate ways to resolve issues
  * Extensive research on best-practices for implementing SQL with Node, including connection pooling, Promisified queries, and building programmatic queries.
  * Utilized a Chrome React Extension allowing state to be traceable through the console.
  * Submitted inquiries to the General Assembly Project Issue queue to request assistance from instructors

Back-to-Life, Back-to-Reactality
----
If the above sounds ambitious for a four-day project, you are far more perceptive than I dear reader. The best laid plans of mice and men as they say...

Of the above-mentioned features, only the ability to CRUD on dogs has been implemented.

  Plans for Future Improvements
  ------
  * Finish refactoring the template to sit on top of a PSQL database. Tasks remaining:
    - Finish boilerplate Auth.
    - Implement pg-patch library to allow for dynamic construction of UPDATE queries.
    - Research Knex.js and possibly refactor with ORM best practices for a more "modern" feel.
  * Create resources for persisting Dog-friendly Locations and for users to schedule Play Dates.
    - Possibility for gamifying users' participation (e.g. if your dog has been on 5+ play dates it gets a "Good Boy Award").
    - Enhance Location resource with geoloc data and render it with Google Maps API.
  - Update Dog resource with image upload to allow for creation of Avatars.
  - More fun with Material-UI!
