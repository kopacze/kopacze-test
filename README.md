**KOPACZE - DIGGERS WEBSITE**

To publish page

1. you should be logged in to kopacze's github
2. run `npm run deploy`
3. make sure the action 'pages build and deployment finished successfully'

Repo structure

Code to be deployed to page is at `gh-pages`, source for project is at `master`. To configure the repo:

1. push the code to master branch
2. Go to Settings -> Pages
3. In Build and deployment set Source to Deploy from a branch
4. Select gh-pages and root in Branch section
5. Add custom domain: kopacze.space
6. Check Enforce HTTPS option

Errors

If you get `Error: error:0308010C:digital envelope routines::unsupported`, switch to node version 16.12.0

Development notes

Not so complicated, you will manage ;)
