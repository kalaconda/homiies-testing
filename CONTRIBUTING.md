<h1>How to Pull, Push to Repo, and Commit Messages</h1>
<p>Follow the directions of the links for whichever program you are using, wether it's <b>Sourcetree or Github Desktop.</b> Also take in account the type of operating
system you are using <b>(Mac or Windows).</b></p>
<h2> Forking </h2>
<p>You're going to want to fork the repo before doing anything else in Github browser (This process is the same for everyone).</p>

![fork](https://user-images.githubusercontent.com/55995794/95892960-4838df00-0d55-11eb-97c2-1b950821274a.png)
<p>Follow steps <b> 1, 2, & 3</b></p>
https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo

<br></br>

<h2> Cloning </h2>
<p><b>⚠Make sure to follow the resources that apply to your operating system and choice of repository management.⚠</b></p>

<h3>Windows/Sourcetree</h3>
<p><b>(Skip to 0:13)</b> https://www.youtube.com/watch?v=5K4gong_lA0</p>
<h3>Windows/Github Desktop</h3>
<p><b>(Skip to 0:16-2:10)</b> https://www.youtube.com/watch?v=ukJEPyKubzA</p>
<h3>Mac/Sourcetree</h3>
<p><b>(Skip to 0:12)</b> https://www.youtube.com/watch?v=QGp_3H2AcAY</p>
<h3>Mac/Github Desktop</h3>
<p><b>(Skip to 1:30)</b> https://www.youtube.com/watch?v=z4H14lQk0Pg</p>

<br></br>

<h2> Creating a Branch </h2>
<p>🛑 I insist that everyone does this to better organize the pull requests you make. 🛑 This allows you to make changes without directly affecting the master repo. 
<p><b>⚠Make sure to follow the resources that apply to your operating system and choice of repository management.⚠</b></p>

<h3>Windows/Mac Sourcetree</h3>
<p><b>(Skip to 2:36-3:55)</b> https://www.youtube.com/watch?v=DYStzH7L6EQ</p>

<br></br>

<h2> Pulling Changes from Repo </h2>
<p>🛑 It is crucial you do this from the <b>cloned repo, <i>not</i> the forked repo. 🛑</b> Remember to do this <b>before</b> making any changes to files. By making a pull, you are grabbing the latest changes from the repo. There will be conflicts merging if you decide to make edits before making a pull. </p> 
<p><b>⚠Make sure to follow the resources that apply to your operating system and choice of repository management.⚠</b></p>

<h3>Windows/Mac Sourcetree</h3>

<p><b>Step 1)</b> Click where it says pull at the top.</p>

<p><b>Step 2)</b> "Pull from remote:" should always say origin/main, "Remote branch to pull:" should always say origin/main, and where it says "Pull into local branch:" should say the branch you are working on. In my case the local branch I am working on is "mikayla-develop". Make sure the branch you are working on is your created branch name. "Commit merged changes immediately" should always be checked.</p>

![kdmjlkf](https://user-images.githubusercontent.com/55995794/97088441-ddae5b80-15fe-11eb-86d0-01a353130b0d.png)

<p><b>Step 3)</b> Click "pull" and the latest changes from the repo should be in your local folder on your desktop. Make sure to double check.</p>

<h3>Windows/Github Desktop</h3>
<p><b>(Skip to 4:03-4:27)</b> https://www.youtube.com/watch?v=ukJEPyKubzA&t=194s</p>

<h3>Mac/Github Desktop</h3>
<p>https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop
</br>
git pull is a convenient shortcut for completing both git fetch and git merge in the same command:
</br>
$ git pull remotename branchname
# Grabs online updates and merges them with your local work
</br>
Because pull performs a merge on the retrieved changes, you should ensure that your local work is committed before running the pull command. If you run into a merge conflict you cannot resolve, or if you decide to quit the merge, you can use git merge --abort to take the branch back to where it was in before you pulled.
</p>
<img width="1072" alt=" " src="https://user-images.githubusercontent.com/55853699/98494405-ed3ac080-220a-11eb-956d-5b7fcc3784cd.png">


<br></br>

<h2>Committing Changes and Pushing them to the repo</h2>
<p> Once you have pulled the latest changes from the repo, any changes you make in your local folder will allow you to make a commit in your repository management system (Sourcetree or Github). After committing your changes, you will be able to push them to the repo by making a pull request. 🛑 Please keep in mind that <b> pulling from the repo is not the same as a pull request </b> 🛑 To make a pull request, you are <b> pushing </b> to the repo. </p>

<p><b>⚠Make sure to follow the resources that apply to your operating system and choice of repository management.⚠</b></p>

<h3>Windows/Mac Sourcetree</h3>

<p><b>Commiting: (Skip to 4:55-5:19)</b> https://www.youtube.com/watch?v=FIabco-p_nY&t=320s</p>
<p><b>Pushing (Pull Request): (Skip to 5:41-6:10)</b> https://www.youtube.com/watch?v=FIabco-p_nY&t=320s</p>

<h3>Windows/Mac Github Desktop</h3>

<p><b>(Skip to 6:05-6:43)</b> https://www.youtube.com/watch?v=FIabco-p_nY</p>

<h2>Commit Guide</h2>
<p> To organize your commits within your team, commit files seperately if you are making individual edits to multiple files. </p>

<p><b> Example: </b></p>

![commitguide](https://user-images.githubusercontent.com/55995794/97827706-0e436480-1c93-11eb-8f55-b9439125d096.png)

<h3>A good way of organizing your commits: https://gitmoji.carloscuesta.me/</h3>

<p><b> How to use Emoji Keyboard on Mac: </b> Cmd + Ctrl + Space </p>

<p><b> How to use Emoji Keyboard on Windows: </b> Windows key + Period </p>

