# Challenge 5 - JavaScript & AJAX

For this challenge you will demonstrate your JavaScript skills by building a replica of the <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">NASA APOD</a> site using their <a href="https://api.nasa.gov/api.html#apod" target="_blank">public API</a>.

## Resources

* <a href="https://api.nasa.gov/index.html#apply-for-an-api-key" target="_blank">NASA API Key</a>
* <a href="https://api.nasa.gov/api.html#apod" target="_blank">APOD API</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date" target="_blank">MDN: Date Picker</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress" target="_blank">MDN: progress Element</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Creating_an_image_from_scratch" target="_blank">MDN: Images</a>

## Setup

### Update your challenge repo

Please perform the following steps in your challenges repo (on your personal machine) to update your repo and pull down the latest starter code.

1. First, verify you have no uncommitted changes: `git status`
2. Switch back to your `master` branch: `git checkout master`
3. Pull the latest code into your `master` branch: `git pull origin master`
4. Only if you have not done so on your current computer already, you will need to connect your challenges repo to the main challenges repo. To do so, perform this command (you only need to perform this command once for each computer): `git remote add upstream https://github.com/info343a-au17/challenges.git`
5. Create a new branch for this challenge: `git checkout -b challenge5`
6. Now update your repo with the new starter code for this challenge. To do so, perform this command (you will need to perform this command once each week when a new challenge is posted): `git pull upstream master`
7. If you receive a permissions error, please check your email for an invite to the organization, and accept the invite. If you cannot find the invite, please contact the teaching team immediately.
8. If you encounter a merge conflict, you will need to resolve the merge conflict before you can start. Please contact the teaching team if you need help.
9. You can now push this new branch to Github: `git push -u origin challenge5`

You are now ready to start working on the challenge. Just like the previous challenges, all work should be committed to a feature branch, and then you will open a pull request from that branch into master. You will also merge your code from your feature branch into the `gh-pages` branch to host your work on Github Pages.

### Create a Branch

Create a new branch on your personal computer named `challenge5` and switch to it. All commits for this challenge should be done on this branch. You will create a pull request to merge those back into master at the end of the challenge.

## Instructions

For this assignment, you will build an interactive version of the NASA APOD site, allowing users to change the date using a date picker.

![](https://i.imgur.com/t8etSse.png)

![](https://i.imgur.com/Z4DF6i4.gif)

![](https://i.imgur.com/6ypq4jr.png)

### API Key

In order to use NASA's APIs, <a href="https://api.nasa.gov/index.html#apply-for-an-api-key" target="_blank">**you must sign up for an API Key**</a>, which you will include as a query parameter each time you make a request:

**Example URL:**
`https://api.nasa.gov/planetary/apod?api_key=MY_API_KEY&date=2017-09-13`

**Example Response:**
```json
{
  "copyright": "George Varouhakis",
  "date": "2017-09-13",
  "explanation": "Nebulas are perhaps as famous for being identified with familiar shapes as perhaps cats are for getting into trouble.  Still, no known cat could have created the vast Cat's Paw Nebula visible in Scorpius.  At 5,500 light years distant, Cat's Paw is an emission nebula with a red color that originates from an abundance of ionized hydrogen atoms.  Alternatively known as the Bear Claw Nebula or NGC 6334, stars nearly ten times the mass of our Sun have been born there in only the past few million years. Pictured here is  a deep field image of the  Cat's Paw Nebula in light emitted by hydrogen, oxygen, and sulfur.",
  "hdurl": "https://apod.nasa.gov/apod/image/1709/ngc6334_Varouhakis_1200.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "NGC 6334: The Cat's Paw Nebula",
  "url": "https://apod.nasa.gov/apod/image/1709/ngc6334_Varouhakis_960.jpg"
}
```

### Requirements

#### A. Today's Image

1. When the page loads, it must display today's picture, title, and explanation from the APOD API.
2. A user should not be able to select a date from the date picker that is in the future.
3. The currently selected date in the date picker should be initially set to today's date.

### B. Changing the Date

1. When the user selects a different date, the page should load the APOD image, title, and explanation for the selected day day.
2. While the page is downloading the new data, a `progress` bar should be shown on the page. It should be visible until the image has completed loading (or until an error message is displayed).
3. While the page is downloading the new data, the date picker should be disabled until API request has completed.
4. If there is an error downloading the new data, an error message should be displayed.

### C. Styling

1. Overall styling of the page is up to you, but the page should be formatted and styled with more than just the default browser styling.

### D. Libraries

1. For this assignment, you may not use a third-party library (such as jQuery) to make your AJAX requests.
2. You may use the `fetch` API instead of `XMLHttpRequest`.

### E. Extra Credit

1. **Styling** (10 points): Make your page look out of this world.

### Validate your code

Use the <a href="https://validator.w3.org/#validate_by_upload" target="_blank">HTML Validation Service</a> to validate your HTML and fix any errors or warnings that are reported. The report should contain specific instructions and/or links that will help you fix the problems.

Also use the [CSS Validation Service](http://jigsaw.w3.org/css-validator/#validate_by_upload) to validate your CSS and fix any errors or warnings that are reported.

**We will run your HTML and CSS through these validators and you will lose points if any errors/warning are reported!**

### Commit your files

Whenever you complete some work that you want to commit, add all your changed files to your local git repo, commit the changes, and push your `challenge5` branch to GitHub. Include a sensible commit message so that other developers (including us) can understand what changed in this commit.

### Publish to GitHub Pages

To publish your page to the web, create a new branch in your repo named `gh-pages`, and merge all commits you've made to the `challenge5` branch into the `gh-pages` branch. Then push this new `gh-pages` branch to GitHub. After the push is complete, you should be able to see your page at the following URL, replacing `your-github-username` with your GitHub user name.

`https://info343a-au17.github.io/challenges-your-github-username/challenge5/`

You can do this directly on your personal computer before pushing to Github, i.e. you do not need to use a pull request to merge your code in the `gh-pages` branch.

### Open pull request

On GitHub, create a new pull request to merge your commits from the `challenge5` branch to the `master` branch, but do not complete the merge yourself. Your grader will complete the merge after grading and adding in-line comments to your pull-request code.

In the pull request description, please briefly describe your page and provide a link to your page publish on Github Pages.

### Submit Your Solution

Submit a link to your GitHub pull request to complete this assignment. We will use the pull request to review your code, and we will also check the functionality your published site, so make sure your GitHub pages site is working correctly.
