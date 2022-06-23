const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const workspace_tools = require("workspace-tools");
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/github-data', (req, res) => {
  console.log('req', req.body)
  //const githubUrl = req.body.githubUrl;
  //const githubBranch = req.body.githubBranch;
  try {
    workspace_tools.init("./", "username", "password");
    workspace_tools.fetchRemoteBranch("origin", req.body.githubBranch, "./")
  } catch(e) {

  }

  const data = {
    status: "200"
  }
  res.json( data );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})