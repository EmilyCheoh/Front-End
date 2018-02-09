# Challenge 4 - HTML, CSS, & JavaScript

For this challenge you will demonstrate your HTML, CSS, and JavaScript skills by building a full-screen image gallery for the UW Athletic department. The gallery will feature images from the UW Football season, and those images will be displayed in a carousel.

## Resources

* <a href="https://canvas.uw.edu/courses/1118281/assignments/3820996" target="_blank">JavaScript Reading (10/11)</a>
* <a href="https://canvas.uw.edu/courses/1118281/assignments/3820997" target="_blank">JavaScript Reading (10/16)</a>

## Setup

### Update your challenge repo

Please perform the following steps in your challenges repo (on your personal machine) to update your repo and pull down the latest starter code.

1. First, verify you have no uncommitted changes: `git status`
2. Switch back to your `master` branch: `git checkout master`
3. Pull the latest code into your `master` branch: `git pull origin master`
4. Only if you have not done so on your current computer already, you will need to connect your challenges repo to the main challenges repo. To do so, perform this command (you only need to perform this command once for each computer): `git remote add upstream https://github.com/info343a-au17/challenges.git`
5. Create a new branch for this challenge: `git checkout -b challenge4`
6. Now update your repo with the new starter code for this challenge. To do so, perform this command (you will need to perform this command once each week when a new challenge is posted): `git pull upstream master`
7. If you receive a permissions error, please check your email for an invite to the organization, and accept the invite. If you cannot find the invite, please contact the teaching team immediately.
8. If you encounter a merge conflict, you will need to resolve the merge conflict before you can start. Please contact the teaching team if you need help.
9. You can now push this new branch to Github: `git push -u origin challenge4`

You are now ready to start working on the challenge. Just like the previous challenges, all work should be committed to a feature branch, and then you will open a pull request from that branch into master. You will also merge your code from your feature branch into the `gh-pages` branch to host your work on Github Pages.

### Create a Branch

Create a new branch on your personal computer named `challenge4` and switch to it. All commits for this challenge should be done on this branch. You will create a pull request to merge those back into master at the end of the challenge.

## Image Gallery Instructions

For this assignment you will create a full-screen carousel, displaying images from the UW Football season.

**Slide 1**
![](https://i.imgur.com/XusJ2ng.png)

**Slide 2**
![](https://i.imgur.com/y4FPC9e.png)

**Slide 3**
![](https://i.imgur.com/Wa26d68.png)

**Slide 4**
![](https://i.imgur.com/G0EPwfs.png)

**Mobile**

![](https://i.imgur.com/qj6h1kv.png)


### Requirements

#### A. Slide size

![](https://i.imgur.com/YwdjXzx.gif)

1.  The image gallery must take `100%` of the `height` and `width` of the browser window, regardless of the size of the browser, and should dynamically resize as you grow/shrink the browser.
2. The user **should not have the ability to scroll any part of the page**, and the scroll bars must not be visible.
3. For this assignment, "desktop" is considering above `768px` and "mobile" is considered equal to or below `768px`.

#### B. Slide contents

1. The images for each slide are provided in the `img` folder. The slides should be displayed in the following order: California, Colorado, Fresno State, Oregon State.
2. Each image should cover the entire space of the browser window, and should be positioned such that they are centered horizonally and are aligned vertically to the top of the screen.
3. Each slide should have a large heading labeling each picture, which should slide with image as the carousel changes between images.
4. The slide headings should use the `Roboto Slab` font, with a weight of `900`, and be `60px` on desktop and `24px` on mobile.
5. They should be positioned in the bottom right of each slide. On mobile, they should be closer to the sides, as you have less space.
6. The headings should not overlap the arrows or dots.
7. The UW logo should remain fixed in the top left corner of the browser for all slides, and should not move when transitioning between slides. On mobile devices, it should be about `50%` of its normal size.

#### C. Navigation

**Arrows**

![](https://i.imgur.com/sbemt0P.gif)

**Dots**

![](https://i.imgur.com/mnhslCl.gif)

1. To switch between slides, user should be able to click the left and right arrow buttons. These are positioned on their respective sides of the screen, `50%` from the `top` of the page.
2. When the user is viewing the first slide, the left arrow should not be visible. When the user is viewing the last slide, the right arrow should not be visible.
3. When the arrows are not being used, they should be semi-transparent. When a user hovers and/or clicks on them, they should have full `opacity`, and the user's <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor" target="_blank">cursor</a> should change to the same cursor used for links.
4. There should be four dots at the bottom of the paage, one for each slide. When a user is viewing a particular slide, the dot for that slide should have its full `opacity` (including when the page first loads). Otherwise, they should be semi-transparent.
5. The dots must always be centered at the bottom of the screen, and be slightly smaller on mobile browsers.
6. The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition" target="_blank">transition</a> between slides should should animate the horizontal position (the animation shown above lasted 1 second).

#### D. Extra Credit

1. **Clickable dots** (5 points): Make the dots at the bottom of the page clickable, e.g. clicking the second dot transitions to the second slide, regardless of which slide you are currently on. The dots should have the same hover effect as the arrows.
2. **Circular carousel** (5 points): Enable the user to go directly from the last slide in the gallery to first slide by clicking the right arrow, and from the first slide in the gallery to the last slide by clicking the left arrow. For full credit, the slides must animate in the expected direction for each arrow, i.e. clicking the right arrow on the last slide must transition to the first slide from right to left, and vice versa.
3. **Keyboard navigation** (5 points): Enable the user to navigate the slide show with their keyboard by using the left and right arrow keys.

### Third-party libraries

While you may use the CSS from Bootstrap, you may not use Bootstrap's JavaScript, or any other third-party JavaScript library such as jQuery or any carousel libaries.

### Validate your code

Use the <a href="https://validator.w3.org/#validate_by_upload" target="_blank">HTML Validation Service</a> to validate your HTML and fix any errors or warnings that are reported. The report should contain specific instructions and/or links that will help you fix the problems.

Also use the [CSS Validation Service](http://jigsaw.w3.org/css-validator/#validate_by_upload) to validate your CSS and fix any errors or warnings that are reported.

**We will run your HTML and CSS through these validators and you will lose points if any errors/warning are reported!**

### Commit your files

Whenever you complete some work that you want to commit, add all your changed files to your local git repo, commit the changes, and push your `challenge4` branch to GitHub. Include a sensible commit message so that other developers (including us) can understand what changed in this commit.

### Publish to GitHub Pages

To publish your page to the web, create a new branch in your repo named `gh-pages`, and merge all commits you've made to the `challenge4` branch into the `gh-pages` branch. Then push this new `gh-pages` branch to GitHub. After the push is complete, you should be able to see your page at the following URL, replacing `your-github-username` with your GitHub user name.

`https://info343a-au17.github.io/challenges-your-github-username/challenge4/`

You can do this directly on your personal computer before pushing to Github, i.e. you do not need to use a pull request to merge your code in the `gh-pages` branch.

### Open pull request

On GitHub, create a new pull request to merge your commits from the `challenge4` branch to the `master` branch, but do not complete the merge yourself. Your grader will complete the merge after grading and adding in-line comments to your pull-request code.

In the pull request description, please briefly describe your page and provide a link to your page publish on Github Pages.

### Submit Your Solution

Submit a link to your GitHub pull request to complete this assignment. We will use the pull request to review your code, and we will also check the functionality your published site, so make sure your GitHub pages site is working correctly.

