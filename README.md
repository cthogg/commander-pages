# Commander Pages
- make websites from the command line.

## User Can
- create a gatsby page from the command line 
- edit the gatsby theme `index.md` file from the prompt

## Install with yarn
1. Install the cli along with gatsby and a compatible gatsby theme 
`yarn add gatsby gatsby-theme-modern-portfolio commander-pages -D`
2. Run commander-pages to create example files for the gatsby theme.
`yarn create-commander-page`
3. Set the options which are asked in the terminal
4. add `.cache` and `public` to the repo's `.gitignore` file
5. Check if correctly installed with `yarn gatsby develop`
6. Edit the page by editing `src/pages/markdown/index.md`

## Roadmap
- deploy using the `netlify cli`
- add more questions to createPagePrompt
- add flags using commander-js to create default processes
- https://github.com/SBoudrias/Inquirer.js
## Tutorials i used when creating this
https://docs.npmjs.com/creating-and-publishing-scoped-public-packages