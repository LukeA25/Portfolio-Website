# Portfolio Website

This portfolio website is a collection of my favorite projects that I built during high-school. Whether I've made websites, school projects, personal projects, or even a company, you can find it here.

You can view the main source code here:
- [Source Folder] (/src/pages/Project.jsx)

The production version is hosted here:
- [https://lukeanderson-b43cb.web.app/](https://lukeanderson-b43cb.web.app/)

## Running Locally

In order to run this locally, run the following command in the terminal at the projects directory:

```sh
$ npm run dev
```

> When running this project locally, firebase functions do not work due to CORS errors. To test out Stripe payments and LinkedIn connection, you must use the hosted development version.

## Deploying

In order to deploy a new version of this website, you can run the following command:

```sh
$ firebase deploy --only hosting
```

> This command will run `npm run build` as a pre-deploy command, so there is no need to build before deployment with a separate command.
