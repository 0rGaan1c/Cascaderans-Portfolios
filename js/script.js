const getDataFromJSON = async () => {
  try {
    const response = await fetch("../data/data.json");
    const responseData = await response.json();
    const data = responseData.data;

    const name = document.getElementById("name");
    name.innerText = data[0].name;

    const twitterLink = document.getElementById("twitter-link");
    twitterLink.href = data[0].socials.twitter;

    const githubLink = document.getElementById("github-link");
    githubLink.href = data[0].socials.github;

    const profileImage = document.getElementById("profile-img");
    profileImage.src = data[0].profilePicture;

    const aboutMe = document.getElementById("about-me");
    aboutMe.innerText = data[0].bio;

    const projectsHeading = document.getElementsByClassName("project-heading");
    const projectsDesc = document.getElementsByClassName("project-desc");
    const projectsCodeLink =
      document.getElementsByClassName("project-code-link");
    const projectsLiveLink =
      document.getElementsByClassName("project-live-link");

    for (let i = 0; i < projectsHeading.length; ++i) {
      projectsHeading[i].innerText = data[0].projects[i].projectName;
      projectsDesc[i].innerText = data[0].projects[i].projectDescription;
      projectsCodeLink[i].href = data[0].projects[i].projectCodeURL;
      projectsLiveLink[i].href = data[0].projects[i].projectDemoURL;
    }
  } catch (err) {
    console.error(err);
  }
};

getDataFromJSON();
