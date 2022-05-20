# Beyond The Binary

### This is the webpage for the event

Check it out: [Here](https://hackerabad.hackclub.com/btb)

Table of contents
=================

- [Beyond The Binary](#beyond-the-binary)
    - [This is the webpage for the event](#this-is-the-webpage-for-the-event)
- [Table of contents](#table-of-contents)
- [contribution-guideline](#contribution-guideline)
- [Inspiration](#inspiration)
- [How we built it](#how-we-built-it)
- [Challenges we ran into](#challenges-we-ran-into)
- [Accomplishments that we're proud of](#accomplishments-that-were-proud-of)
- [What we learned](#what-we-learned)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# contribution-guideline

1. Fork the project
![forking the project](/assets/contribute.png)

2. Once you are in your fork the url should look something like
`https://github.com/<YOUR-USERNAME>/beyond-the-binary/`

3. Go to preferred folder in your computer and paste the following command (Github is [deprecating](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/) the HTTPS option, so go with it only if you don't have SSH setup - you can set up ssh authentication by following [these](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) steps.)
   - HTTPS  
   `git clone https://github.com/<YOUR-USERNAME>/beyond-the-binary.git`
   - SSH  
   `git clone git@github.com:<YOUR-USERNAME>/beyond-the-binary.git`

4. Now enter the folder by running the following command
`cd beyond-the-binary/api`

5. Now you are in the `/api` folder

6. Now do ahead and create a new branch and move to the branch
`git checkout -b fix-issue-<ISSUE-NUMBER>`

7. Now run `npm i` and once it's done do your fixes and changes.  You'll need to set up `npm` and `node`, here's a [guide](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac) for the same.

8. After done you can now push this changes. for doing that follow the following command chain
   - `git status` (Shows the changed files)
   - `git add .` (Will add all the files to staging area)
   - `git commit -m "feat/docs/fix: :emoji-name: <EXPLAIN-YOUR_CHANGES>"`
   - `git push origin fix-issue-<ISSUE-NUMBER>`

9. After this go to your forked GitHub repository and go to `Pull Request` section. Now you might be able to see a pop up saying **Pull Request**. Click on the popup and you will be redirected to pull request page

10. Now fill in the form template of the pull request

11. Click on **Submit**

12. Hurray! You just did your contribution to this project 🎉

# Inspiration
The aim of this show is to embrace two factors from the title
Making a career in tech is not only limited to code (beyond the binary code)
Tech communities encouraging folks of diverse backgrounds to get involved (hence beyond binary again)
What it does
A simple website to host our event.

# How we built it
![hi](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/862/102/datas/original.png)
HTML CSS and pinch of Javascript

# Challenges we ran into
![](/assets/fix.png)

Most of the team members were new to this.
We tried our best to keep it mobile friendly (upto a resolution).

# Accomplishments that we're proud of
Making a working website and getting it deployed on time

# What we learned
Team work, delegation, async work and of course fixing CSS 💀
