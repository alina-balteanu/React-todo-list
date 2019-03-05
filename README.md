
Todo list made with React, using Axios

Initially I used MockApi instead of JSONPlaceholder for storing the data, which worked really well -except for the fact that anyone editing the todo items in the app would update the actual list in MockApi and who knows what texts the next viewer would have seen :) 

So I changed the URLs used by Axios to JSONPlaceholder, but with some caveats: 
-JSONPlaceholder only allows 1 new item to be added (for which it gives key 201, and any new items get the same key, thus react not unique key errors ensue;
-the marked completed items aren't saved to the JSONPlaceholder list, since it doesn't allow PUT
-and pretty much any edited text or deleted item is not remembered in the JSONPlaceholder list

That being said, if you replace all the axios used URLs (in App.js) with a list of your choice (array of objects with title, completed and id properties), then the app works as intended, PUTing all the updated items in the list (titles and marked completed), DELETing items from the list, POSTing new items to the list. So yeah, it works. Just change the URLs if you want to try it out.

You can see it in action here https://codepen.io/alina-balteanu/pen/xBRgNO

![](https://res.cloudinary.com/dshmwg7vw/image/upload/v1551817466/project6.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
