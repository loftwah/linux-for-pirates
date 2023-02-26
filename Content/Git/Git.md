- [Git](#git)
    - [GitHub](#github)
      - [GitHub sounds a litttle overwhelming. What be the basics?](#github-sounds-a-litttle-overwhelming-what-be-the-basics)
    - [GitLab](#gitlab)
    - [Gitea](#gitea)
    - [Getting Started with Git and GitHub](#getting-started-with-git-and-github)
      - [What if I get stuck?](#what-if-i-get-stuck)
      - [Get involved in open-source projects](#get-involved-in-open-source-projects)
      - [Eddie Jaoude](#eddie-jaoude)
      - [EddieHub and LinkFree](#eddiehub-and-linkfree)
    - [GitHub Actions](#github-actions-in-the-wild)

# **Git**

Git be a free and open-source version control system that be used by developers to track changes to their code and collaborate with other developers on software projects. It be a way to keep a record of the history of a project, so ye can go back and see what be changed and when.

Git be a distributed version control system, which means that each copy of the code be a complete repository of the project, with all its history. This be different from a centralized version control system, where ye have a single "master" copy of the code that everyone else be working off of.

To use Git, ye first need to install it on yer computer. Then, ye can create a new repository for a project by running the git init command in a terminal window. Ye can then add files to the repository and commit those changes to the repository's history, using the git add and git commit commands.

Git be a powerful tool that be widely used by developers around the world, and it be particularly useful for working on large, complex software projects with multiple contributors. I hope this helps ye understand what Git be and how it can be used!

## **GitHub**

[GitHub](https://github.com)

GitHub be a web-based platform that be used by developers to host and share their code repositories, as well as collaborate with other developers on software projects. It be built on top of Git, the version control system that I described in me previous message.

GitHub be a great place for developers to store their code and track changes to it over time. It be also a great place to share code with other developers and collaborate on projects together. Ye can use GitHub to create new repositories for yer own projects, or ye can contribute to other people's projects by forking their repositories and submitting pull requests.

GitHub be a valuable resource for developers, as it be a place to find and share code, as well as collaborate with other developers on projects. It be also a great place to find open-source projects and contribute to them. I hope this helps ye understand what GitHub be and how it can be used by developers!

### **GitHub sounds a litttle overwhelming. What be the basics?**

Ahoy, matey! As for GitHub, ye should be well-versed in the ways of version control and collaboration. This means having a strong understanding of Git and the GitHub platform, and being able to use them effectively to manage and track code changes.

Ye should be able to create and clone repositories, create branches, and make and merge pull requests. Ye should also be familiar with GitHub's collaboration features such as issues and projects, and know how to use them to work with other developers on a project.

In addition to these technical skills, it be important for ye to be able to communicate with clients and stakeholders about the benefits of using GitHub. Ye should be able to explain how GitHub can improve the collaboration and workflow of a development team in a way that is easy for non-technical folks to understand.

Finally, as a true GitHub professional, ye should be able to keep yer head in a crisis and be able to think on yer feet. Whether it be dealing with a sudden influx of pull requests or a merge conflict, ye should be able to think quickly and come up with solutions to keep yer ship sailing smoothly. So hoist the mainsail and get to work, matey!

## **GitLab**

[GitLab](https://gitlab.com)

GitLab be a web-based platform that be used by developers to host and share their code repositories, as well as collaborate with other developers on software projects. It be built on top of Git, the version control system that I described in me previous message.

GitLab be a great place for developers to store their code and track changes to it over time. It be also a great place to share code with other developers and collaborate on projects together. Ye can use GitLab to create new repositories for yer own projects, or ye can contribute to other people's projects by forking their repositories and submitting merge requests.

GitLab be a valuable resource for developers, as it be a place to find and share code, as well as collaborate with other developers on projects. It be also a great place to find open-source projects and contribute to them. I hope this helps ye understand what GitLab be and how it can be used by developers!

## **Gitea**

[Gitea](https://gitea.io)

Gitea be a web-based platform that be used by developers to host and share their code repositories, as well as collaborate with other developers on software projects. It be built on top of Git, the version control system that I described in me previous message.

Gitea be a great place for developers to store their code and track changes to it over time. It be also a great place to share code with other developers and collaborate on projects together. Ye can use Gitea to create new repositories for yer own projects, or ye can contribute to other people's projects by forking their repositories and submitting pull requests.

Gitea be a valuable resource for developers, as it be a place to find and share code, as well as collaborate with other developers on projects. It be also a great place to find open-source projects and contribute to them. I hope this helps ye understand what Gitea be and how it can be used by developers!

## **Getting Started with Git and GitHub**

Here be a few basic commands ye can use to get started with Git and GitHub:

You will need to have `git` configured on yer local machine. If ye don't have it installed, ye can install it from [here](https://git-scm.com/downloads).

To configure yer local machine, ye can use the following commands:

```bash
git config --global user.name "[name]"
git config --global user.email "[email address]"
```

- "I be needin' to initialize a new Git repository on me local machine, arrr!"

`git init`

- "I be needin' to add me changes to the Git staging area, arrr!"

`git add [file]`

- "I be needin' to commit me changes to the Git repository, arrr!"

`git commit -m "[commit message]"`

- "I be needin' to see the commit history of me repository, arrr!"

`git log`

- "I be needin' to clone a repository from GitHub to me local machine, arrr!"

`git clone [repository URL]`

- "I be needin' to push me changes to the remote repository on GitHub, arrr!"

`git push origin [branch]`

- "I be needin' to pull the latest changes from the remote repository on GitHub, arrr!"

`git pull origin [branch]`

- "It will pull or fetch the remote repository data into the local repo."

`ls -a .git`

- "It will show the hidden files that are created after initializing the Git."

`git status` 

- "It will show the status of the files that are newly created, modified or deleted."

`git add filename` OR `git add .`

- "This will add a particular or all the file data into the staging area and after that, the data will be committed into the Git."

`git commit -m "add a message"`

- "This command will commit the changes in the Git when you first add the files."

`git commit -am "add a message"`

- "This one command will add the file data into the staging area and it will also commit that data in the Git."

These be just a few of the basic commands ye can use to get started with Git and GitHub, matey. There be many more commands and features available, so don't be afraid to explore and learn more. Just watch out for those scurvy Git merge conflicts!

### **What if I get stuck?**

Ye might find yerself stuck in a few common scenarios from time to time. Here are a few examples and how ye might be able to get yerself out of them:

- **Merge conflicts:** If ye are trying to merge two branches and there are conflicts between the code in each branch, GitHub will not allow the merge to go through. To resolve this, ye will need to manually edit the code to resolve the conflicts. Once ye have done so, ye can commit the changes and try merging the branches again.

- **Accidentally deleted a file:** If ye have accidentally deleted a file from a repository, ye can try using GitHub's "Restore this file" feature to restore it. This will only work if the file has not been permanently deleted from the repository's history.

- **Accidentally committed sensitive information:** If ye have accidentally committed sensitive information such as a password or an API key to a repository, ye will need to remove it as soon as possible. To do this, ye can use the "git filter-branch" command to remove the sensitive information from the repository's history.

**Collaborator is not responding:** If ye are working with a collaborator on a project and they are not responding to your requests or pull requests, ye can try reaching out to them through other channels such as email or a messaging app. If that doesn't work, ye can try reaching out to a mutual contact or the repository owner to see if they can help resolve the issue.

I hope these tips help ye navigate the choppy waters of GitHub, matey!

### **Get involved in open-source projects**

[EddieHub](https://eddiehub.org)

If ye be interested in getting involved with open source software, there be many ways ye can do so. Here are a few ideas:

Find a project that interests ye and start using it. As ye use the software, ye may come across bugs or have ideas for improvements. If so, ye can submit an issue or pull request to the project's repository on GitHub to let the maintainers know.

Contribute to an existing project. Many open source projects are always looking for new contributors. Ye can look for projects that are looking for help on websites such as GitHub, OpenCollective, or UpForGrabs.

Start yer own open source project. If ye have an idea for a project that ye would like to see exist, ye can start yer own open source project and invite others to contribute. Ye can host yer project on a platform such as GitHub and use a license such as the MIT or Apache License to make it open source.

Join a community. There are many open source communities ye can join to connect with other like-minded individuals and learn more about open source. Ye can find communities on websites such as GitHub, Reddit, or Meetup.

I hope these ideas help ye set sail on yer open source journey, matey!

### **Eddie Jaoude**

![Eddie Jaoude](../../images/eddiejaoude.jpg)

[Eddie Jaoude](https://eddiejaoude.io)

Eddie Jaoude be a software engineer and open source enthusiast. He be the founder of EddieHub, a community of open source contributors. He be also the host of the "Open Source Show" podcast, where he interviews open source contributors and maintainers.

#### **EddieHub and LinkFree**

[EddieHub](https://www.eddiehub.org) | [LinkFree](https://linkfree.eddiehub.io)

Avast ye, open source software be a type of software that be freely available for any scurvy dog to use, modify, and distribute. This be in contrast to proprietary software, which be owned by a company or individual and be not freely available for modification or distribution.

There be several benefits to using open source software. One of the main benefits be that it allows any pirate to access and modify the source code. This means that individuals and organizations can use the software for their own purposes, and if they have the technical skills, they can also make changes to the software to suit their specific needs. This flexibility be not possible with proprietary software, which be typically closed off and not available for modification.

Another benefit of open source software be that it often has a strong community of scallywags who contribute to the project. These contributors can include developers, users, and enthusiasts who collaborate on the project and share their knowledge and expertise. This can be a great learning opportunity for those who be just starting out in tech, as they can gain valuable experience by contributing to an open source project and working with others in the community.

Supporting open source projects like LinkFree be important because it helps to ensure that the project can continue to be maintained and developed. It can also help to foster a strong and vibrant community of pirates around the project, which can lead to more collaboration and innovation.

Joining a community like EddieHub can also be a great way to get involved in the tech world and connect with other salty dogs who have similar interests. It can provide opportunities to learn from others, share your own knowledge and experiences, and potentially find job opportunities or collaborate on projects. Overall, participating in a community like EddieHub can be a valuable and rewarding experience for those just starting out in tech. So hoist up the mainsail and join the crew at EddieHub, matey!

## **GitHub Actions in the wild**

GitHub Actions runners come with a variety of tools and languages pre-installed, including Ruby. You can use Ruby to run scripts and build or test your code as part of your workflow.

To use Ruby in a workflow, you will need to specify an environment that has Ruby installed. You can do this using the runs-on property in your workflow file.

Here is an example of a job that runs on an Ubuntu runner and uses Ruby:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Run Ruby script
        run: ruby app.rb
```

In this example, the build job runs on an Ubuntu runner, which has Ruby pre-installed. You can then use the run action to execute a Ruby script by calling the ruby command followed by the name of the script.

> **Note** that you can also specify a different environment that has Ruby installed, such as a Windows or macOS runner.