<?php
  include_once 'header.php';
?>
<section class="index-intro">
  <h1>This Is An Introduction</h1>
  <p>Here is an important paragraph that explains the purpose of the website and why you are here!</p>
</section>

<section class="index-categories">
  <h2>Some Basic Categories</h2>
  <div class="index-categories-list">
    <div>
      <h3>Fun Stuff</h3>
    </div>
    <div>
      <script>//https://glacial-beyond-29187.herokuapp.com/cool
      const { spawn } = require('child_process');
      const got = require('got');
      const test = require('tape');

      // Start the app
      const env = Object.assign({}, process.env, {PORT: 5000});
      const child = spawn('node', ['index.js'], {env});

      test('responds to requests', (t) => {
        t.plan(4);

        // Wait until the server is ready
        child.stdout.on('data', _ => {
          // Make a request to our app
          (async () => {
            const response = await got('https://glacial-beyond-29187.herokuapp.com/');
            // stop the server
            child.kill();
            // No error
            t.false(response.error);
            // Successful response
            t.equal(response.statusCode, 200);
            // Assert content checks
            t.notEqual(response.body.indexOf("<title>Node.js Getting Started on Heroku</title>"), -1);
            t.notEqual(response.body.indexOf("Getting Started on Heroku with Node.js"), -1);
          })();
        });
      });
      const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  window.alert(cool()); 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));</script>
      <h3>Serious Stuff</h3>
    </div>
    <div>
      <h3>Exciting Stuff</h3>
    </div>
    <div>
      <h3>Boring Stuff</h3>
    </div>
  </div>
</section>

<?php
  include_once 'footer.php';
?>
