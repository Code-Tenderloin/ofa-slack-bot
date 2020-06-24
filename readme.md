# Slack Bot to Manage a Code Tenderloin Course

This is a Botkit starter kit for slack, created with the [Yeoman generator](https://github.com/howdyai/botkit/tree/master/packages/generator-botkit#readme)

To complete the configuration of this bot, make sure to update the included `.env` file with your platform tokens and credentials.

[Botkit Docs](https://botkit.ai/docs/v4)

This bot is powered by [a folder full of modules](https://botkit.ai/docs/v4/core.html#organize-your-bot-code). 
Edit the samples, and add your own in the [features/](features/) folder.

## Installation

Follow the [BotKit docs](https://botkit.ai/docs/v4/provisioning/slack-events-api.html) and copy the configuration data into a .env file

## Development

To run a local development server run `npm start` in one window and `ngrok http 3000` in another, then correct the `redirectUri=https://1700c0565560.ngrok.io/install/auth` to the domain that `ngrok` gives you.

## Testing

Running `npm run dev` will fire up `Jest` and perform tests on the features of the application.  `npm test` will run the full test suite and provide a code coverage report.