# Homiies - The Home Management App

<p>Living with roommates <b>isn't always easy.</b> Avoid miscommunicated expectations</b> with your roommates, let Homiies <b>balance household responsibilities</b> and keep track of who's doing what.</p>

![homiies-cover](https://user-images.githubusercontent.com/55995794/102566467-9a77e280-40ad-11eb-9e3a-b738e644dabe.png)

<h2> Our Team </h2>
<h3><b> Victoria Stauffer </b></h3>
<p>Primary Role: Project Manager</p>
<p>Secondary Role: Developer</p>
<h3><b> Dolma Sherpa </b></h3>
<p>Primary Role: UI Design Lead</p>
<p>Secondary Role: Project Manager </p>
<h3><b> Anna Leong </b></h3>
<p>Primary Role: UX Design Lead</p>
<p>Secondary Role: IX Designer</p>
<h3><b> Mikayla Lisiy </b></h3>
<p>Primary Role: Dev Lead </p>
<p>Secondary Role: UI Designer </p>
<h3><b> Lindsey Smith </b></h3>
<p>Primary Role: IX Lead</p>
<p>Secondary Role: UX Research</p>

<hr></hr>

<h1> How to run app locally: </h1>

<h3><b>1)</b> Install nodejs (The LTS version) https://nodejs.org/en/ </h3>

<h3><b>2)</b> Once this is installed, in commandline run </h3>

```
node -v
npm -v
```

<h3> both commands should give you a version number which means you successfully installed nodejs </h3>

<h3><b>3)</b> Download the repo by going to clone > download zip (or pulling the latest changes from the repo using your choice of repository management) </h3>

<h3><b>4)</b> In commandline, direct to your project folder </h3>

```
cd yourprojectfolderspath
```

<h3><b>5)</b> In commandline, install node_modules (the node_modules folder will appear at the root of your project) </h3>
  
```
npm install
```

<h3> If you get the following prompt, go ahead and install the needed developer tools </h3>

![djffjks](https://user-images.githubusercontent.com/55995794/105111160-4f773380-5a8e-11eb-8cc8-4a3df436af02.png)

<h3><b>6)</b> In commandline, run </h3>
  
```
npm install -g yarn
```

<h3> If you get this message </h3>
  
``` 
npm WARN checkPermissions Missing write access to /user/local/lib/node_modules 
  
``` 
  
<h3> do this command next, </h3>

```
sudo chown -R $USER /usr/local/lib/node_modules
```

<h3><b>7)</b> It will then ask you for a password, type in the password to your pc </h3>


<h3><b>8)</b> In commandline, run this command again (ignore the error message if any)</h3>

```
npm install -g yarn
```

<h3><b>9)</b> Then in commandline, start up your local server by running</h3>

```
npm start
```

<h3> Your local server will then start up in the browser automatically and you will be prompted with the login screen</h3>
