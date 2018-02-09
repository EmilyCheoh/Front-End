# Challenge 7 - React

For this challenge, you will combine your knowledge of HTML, CSS, JavaScript, and React to build a simple weather application.

## Resources

* <a href="https://openweathermap.org/" target="_blank">Open Weather Map</a>
    * <a href="https://openweathermap.org/current" target="_blank">Current Weather API</a>
    * <a href="https://openweathermap.org/weather-conditions" target="_blank">Weather Conditions</a>
* <a href="https://reactjs.org/" target="_blank">React</a>
* Review:
    * <a href="https://canvas.uw.edu/courses/1118281/assignments/3820984" target="_blank">React Introduction</a>
    * <a href="https://canvas.uw.edu/courses/1118281/assignments/3820985" target="_blank">React Continued</a>
* <a href="https://developers.google.com/web/updates/2015/03/introduction-to-fetch" target="_blank">fetch</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API" target="_blank">localStorage</a>

## Setup

### Update your challenge repo

Please perform the following steps in your challenges repo (on your personal machine) to update your repo and pull down the latest starter code.

1. First, verify you have no uncommitted changes: `git status`
2. Switch back to your `master` branch: `git checkout master`
3. Pull the latest code into your `master` branch: `git pull origin master`
4. Only if you have not done so on your current computer already, you will need to connect your challenges repo to the main challenges repo. To do so, perform this command (you only need to perform this command once for each computer): `git remote add upstream https://github.com/info343a-au17/challenges.git`
5. Create a new branch for this challenge: `git checkout -b challenge7`
6. Now update your repo with the new starter code for this challenge. To do so, perform this command (you will need to perform this command once each week when a new challenge is posted): `git pull upstream master`
7. If you receive a permissions error, please check your email for an invite to the organization, and accept the invite. If you cannot find the invite, please contact the teaching team immediately.
8. If you encounter a merge conflict, you will need to resolve the merge conflict before you can start. Please contact the teaching team if you need help.
9. You can now push this new branch to Github: `git push origin challenge7`

### Open Weather Map API Key

To obtain an API key for Open Weather Map, perform the following steps:

1. Go to <a href="https://openweathermap.org/" target="_blank">https://openweathermap.org/</a>
2. Click Sign Up.
3. You will be presented with a modal to provide your company name and purpose. You can put "University of Washington" and select the Education option.
4. To generate an API key, go to the <a href="https://home.openweathermap.org/api_keys" target="_blank">API Keys</a> tab.
5. You will need to include this API key with each request you make to their API.
6. Documentation on the current weather API can be found at <a href="http://openweathermap.org/current" target="_blank">http://openweathermap.org/current</a>

### Development Instructions

1. Update your repo with the new starter code (see above).
2. Change directories into your `challenge7` folder: `cd challenge7`
3. Install the project dependencies by running: `npm install`
4. Obtain an API key from Open Weather Map (see above).
5. In your `challenge7` folder, open the `package.json` file. In order to be able to properly publish to Github Pages, you must update the `homepage` url to use your `challenges-` repo name instead of `challenges-jasonnutter`. So if your challenges repo is named `challenges-uwnetid`, the `homepage` property should be updated to `"homepage": "https://info343a-au17.github.io/challenges-uwnetid/challenge7"`
6. To run your app locally, `cd challenges7` and run `npm start`
7. To run lint, run `npm run lint`
8. To publish your app to Github Pages, run `npm run deploy` (you need to do this every time you want to update your app on Github Pages). You do not need to manually merge your `challenge7` branch into `gh-pages`, as `npm run deploy` will do that for you.

### Project files and folders

* `build`: Folder contains files generated from running `npm run build`. You should not edit any files in this folder.
* `node_modules`: Folder contains project dependencies downloaded from running `npm install`. You should not edit any files in this folder.
* `public`: Folder contains static files that you want to use <a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#using-the-public-folder" target="_blank">outside the module system</a>.
* `src`: Folder contains JavaScript modules, React Components, and CSS files for your app.
* `.eslintc.json`: Configuration file for `eslint`. You should not edit this file.
* `.npmrc`: Configuration file for `npm`. You should not edit this file.
* `package-lock.json`: Lock file for `npm`. You should not manually edit this file (`npm` will automatically edit this file).
* `package.json`: Manifest file for `npm`. Contains list of dependencies and scripts to use with `npm run`. If you add `npm` modules to your project using `npm install`, `npm` will automatically edit this file.

## Requirements

For this assignment, the overall look and feel of your application is up to you, however, the functionality must satisfy the following requirements:

**A. Look / Feel**

1. Your application must work correctly on both small and large screens (from 320px to 1200px, at least).
2. It should be styled with more than just the default browser styling. It is recommended to use a CSS Framework such as Bootstrap, <a href="https://getmdl.io/" target="_blank">Material Design Lite</a>, or <a href="http://foundation.zurb.com/" target="_blank">Foundation</a>.
3. Regardless of which CSS Framework you use, your app must have a consistent and appealing look and feel.

**B. Hosting**

1. Any data from for your app must be stored in the browser's localStorage.
2. Your page should be hosted on Github Pages. **Important**: To automatically deploy your app to Github Pages, run `npm run deploy`. You must also update the `homepage` property inside of the `package.json` file to be `challenges-{your github user name}` instead of `challenges-jasonnutter`.

**C. Pages**

1. There must be a React component named `App` where users can view the weather information. It should be rendered into the `div` with an id of `root`.

**D. Weather Page**

1. The page must display the name of your weather app at the top of the page and in the title of the browser tab.
2. There must be an input box where a user can search for a location by postal code or city name.
3. When the user submits a location search, your app must retrieve the current weather about that location from the <a href="https://openweathermap.org/current" target="_blank">openweathermap.org API</a>.
4. If the user provides a location that doesn't exist, or the openweathermap.org API returns any other error when searching for the city, you must show an error to the user (e.g. "Invalid location").
5. The page must show **at least** the following information about the weather:
    1. The name of the location (e.g. if the user enters "98115", it must show "Seattle").
    2. The "short" and "long" description of the current weather. (e.g. "<span>Clouds" and </span><span>"</span><span>scattered clouds")</span>
    3. An <a href="https://openweathermap.org/weather-conditions" target="_blank">icon</a> for the current conditions.
    4. The temperature in Fahrenheit (with no decimal places).
    5. A button to Save that location to their saved locations.
6. When the user clicks the button Save the current location, the query the user provided for that location must be saved in a list of locations, and that list of locations must be visible to the user on the page.
7. The current list of saved locations must be saved to the browser's local storage.
8. When the user clicks a previously saved location, the page must show the current weather for that location.
9. The user must have the ability to remove a location from the saved locations list.
10. If the user refreshes their page (or closes their browser and reopens your app), the page must show the previously saved locations.
11. Users should not be able to save queries that are invalid (i.e. an error was returned when searching for the location).
12. When the page first loads, if the user has any saved locations, the page should show the weather for the first location in the list.

**E. Technical Requirements**

1. All HTML elements in your app **must** be written in React. You may not add additional HTML elements to `index.html` directly (other than `script`, `link`, or other `meta` tags).
2. You cannot use any other JS libraries such as jQuery for DOM manipulation or traversal. You may use the jQuery AJAX API instead of `fetch` or `XMLHttpRequest`.
3. You must create separate React components for each main piece of UI (e.g. `WeatherSearch`, `WeatherCurrent`, `WeatherSaved`, etc).
4. Each React component must be written in its own file (1 component per file).
5. Your solution must not contain any errors reported by running `npm run lint`. Warnings are okay, however, it is recommended to fix all warnings as well.

## Screenshots

Below are screenshots of a sample solution that satisfies all of the functional requirements above. You can use this as a starting point, but I recommend trying to make something that looks even better. 

**Initial Page Load (no saved locations)**

![react_weather_1.png](https://canvas.uw.edu/courses/1118281/files/43582409/preview)

**Search Error**

![react_weather_2.png](https://canvas.uw.edu/courses/1118281/files/43582410/preview)

**Weather for Seattle**

![react_weather_3.png](https://canvas.uw.edu/courses/1118281/files/43582411/preview)

**Seattle saved to My Locations**

![react_weather_4.png](https://canvas.uw.edu/courses/1118281/files/43582412/preview)

**New York saved to My Locations**

![react_weather_5.png](https://canvas.uw.edu/courses/1118281/files/43582413/preview)

**98115 saved to My Locations**

![react_weather_7.png](https://canvas.uw.edu/courses/1118281/files/43582408/preview)

**Mobile view**

![react_weather_6.png](https://canvas.uw.edu/courses/1118281/files/43582414/preview)

## How to Submit your Assignment 

All code for this challenge must be committed to the **challenge7** branch in your repo. Push this branch to Github, open a pull request to your **master** branch (do not merge it yourself), and then submit the URL to your pull request on Canvas. In the description of your pull request, please include a link to your app on Github Pages, and please list any extra credit options you completed.

## Extra Credit

* **Firebase** (5 points): Instead of using `localStorage`, store the saved locations on Firebase, using either anonymous authentication or traditional email/password accounts. If you provide functionality for a user to sign up/sign in, that UI must also be written exclusively in React (it can be on a new html page, which redirects the user to the weather page).
* **Styling** (5 points max): Style your app with more than just the default styling for your CSS framework.
* **Additional Data** (5 points max): In addition to the basic weather data, using the OWM API to display more information about the current weather in an informative, useful, and pleasing way.
* **User preferences** (5 points): Provide controls for the user to change their preferences (e.g. changing from temperature imperial units to metric units). These preferences must also persist between sessions.
* **Current location** (5 points): When the page first loads, show the weather data for the user's current location. Alternatively, provide a button the user can click to load the weather data for their current location.
