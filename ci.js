var CircleCI = require('circleci');
var ci = new CircleCI({
  auth: "cf0c0bc7c110987a582be6270ccb588c0df3c002"
});

// ci.getUser().then(function(user){
//   console.log(user.login); // e.g. your Github username 
// });
// ci.getProjects().then(function(projects){
//   for(var i=0; i < projects.length; i++) {
//     console.log(projects[i].reponame); // logs the repo name of each project 
//   }
// });
ci.startBuild({
  username: "potapovDim",
  auth: "cf0c0bc7c110987a582be6270ccb588c0df3c002",
  project: "nubipProject",
  branch: "master"
}).then(function(build){
  console.log(build);
});