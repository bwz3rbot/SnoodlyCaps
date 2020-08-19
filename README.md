# SnoodlyCaps
 Finds Reddit comments at an interval and replies to the author in a mocking tone...


# Instructions on how to run:

First thing's first. You could use your current account for this, but I reccomend that you create a fresh account for the bot.

Once the account is created and you are logged in, visit this url(https://www.reddit.com/prefs/apps/) and create a script app. Here is where you will find the values needed to authenticate the bot. 

You are required to give it a valid redirect url, but it can go anywhere, say google.com.

Now that you have your authorization codes, navigate to the 'pw.envEXAMPLE' file in the root folder of this application

Once in the file, fill in the fields below.

>SnoodlyCaps>pw.envEXAMPLE

USER_AGENT=''\
CLIENT_ID=''\
CLIENT_SECRET=''\
REDDIT_USER=''\
REDDIT_PASS=''


Now remove 'EXAMPLE' from the end of the file name.
> (E.g. 'SnoodlyCaps/pw.envExample' > 'SnoodlyCaps/pw.env')


Now that you'ved filled in your account details, you need to run this command to install the required dependencies the bot needs to run.

$ npm i --save snoowrap snoostorm dotenv

It will take a couple minutes to finish installing.

Once finished, you can run the bot by using this command from within the root folder:

$ node ./src/app.js

### That's it. If you have any questions or comments, send me a pm on Github or through Reddit /u/Bwz3r. I'll be happy to help you.


#### <a href="https://web-temps.github.io/">web-temps.github.io</a>
