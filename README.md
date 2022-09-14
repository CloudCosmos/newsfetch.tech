# newsfetch.tech

## Docusaurus 2.0

Built using [Docusaurus 2](https://docusaurus.io/).

## First time setup

First install NodeJS.

Then create site with Docusaurus. This needs to be done once!

```bash
npx create-docusaurus@latest www.newsfetch.tech classic
```

Now navigate to the site directory and start the development server.

```bash
cd www.newsfetch.tech
````

This was done once and the code is in the repo.

## Git clone

Clone the repository.

`git clone https://www.github.com/newsfetch/newsfetch.git`

## Development

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
