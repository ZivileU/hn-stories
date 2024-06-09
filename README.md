# React App project

For the project I have used the Typescript template of Create React App (see available scripts bellow).

I have added axios and Tansact ReactQuery libraries for data fetching. ReactQuery helps to manage error handling, caching, refetching in an easy way. It's best utilized in bigger projects, but even in a small project like this one we can use its benefits. I have also added Moment library for data formatting. It's the most widely used library for this task and does the job rather well. I have also added SASS CSS, as required. Together with styled components, it is one of my favorite ways to declare CSS where you have a lot of freedom to declare your CSS rules while using variables, calculations, mixins etc.

I have added a small Jest test to check if the application is rendered.

I am showing 10 randomly picked Hacker Rank stories from top 500. The randomness might not have been a strict requirement, but I thought it would be a fun touch, instead of picking first 10 stories. I am not using a blogal state for this project, since there was no need for it. Normally I would add ReactContext if I needed a shared state throught the app. Also often ReactQuery substitutes the need for global state for fetched data.

NOTE: I have noticed I've missed a requirement to sort the stories by score. Since it seems to be an important one, I have added it on a separate commit. It took me around an hour to come up with a solution and adjust the rest of the app. I had to move the fetching of the story ids one level up to avoid infinite rerendering. Since it has been submited after the dealine, you are welcome to disregard it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
