# Slack Bot to Manage Code Tenderloin Classes

## Features

### Open Source Governance

- [x] Licensed under the MIT license
- [x] Has a Code of Conduct for contributors

### Setup
- [x] configurable for deployment via .env as a single bot to run in a single slack workspace
- [ ] loads data for a single class from each folder in the `data` directory
- [ ] has personas for teachers, assistants, and students who may be a part of multiple classes
- [ ] the data model for classes and participants is stored in the `./data/{class name}/facilitators` and `./data/{class name}/students` folders as `csv` and `json` files
- [ ] an auditor flag may be added to any persona assigned to a user so that they have the capabilities of that persona but are not automatically assigned to breakout rooms by the `make breakout rooms` command

### Commands
- [ ] `audit cohort` displays all users and their personas
- [ ] `audit {email address}` displays which files provided that email address with the associated personas
- [ ] `invite cohort` sychronizes the list of participants in Slack, inviting new participants and assigning participants to the appropriate slack channels for each class
- [ ] `make breakout rooms {class}` looks up the user list of the current Zoom session for a class, then, based on the configured list of participants, create a Zopom breakout room for each assistant and randomly send students to each assistant's breakout room 

### Scheduled Events
- [ ] Agile morning standup to have each student answer the questions: "What did you work on yesterday?" "What are you working on today?" and "What are you having trouble with?"  These responses can be printed with the command `list attendance {class} {date}`.

## Development

All contributors to this project are expected to adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

This bot is powered by [Botkit](https://botkit.ai/docs/v4) and [a folder full of modules](https://botkit.ai/docs/v4/core.html#organize-your-bot-code) in the [./src/features/](./src/features/) folder.

### Installation

Follow the [Slack bot setup guide](https://botkit.ai/docs/v4/provisioning/slack-events-api.html) and copy the configuration data into a copy of `.env.example` named `.env`.

### Running a Local Development Server

1. run `ngrok http 3000` in one window.
1. note the domain that `ngrok` gives you
2. correct the `redirectUri=https://SOMETHING.ngrok.io/install/auth` in `.env` to the new `ngrok` domain.
3. correct the [Slack app configuration](https://api.slack.com/apps) with the new `ngrok` domain in `Interactivity & Shortcuts: Request URL`, `OAuth & Permissions: Redirect URLs`, and `Event Subscriptions: Request URL`
3. run `npm start` in another window.

#### Known Bugs

* Bot installation and authorization must be run twice?

### Testing

* `npm run dev` runs Jest in watch mode executing tests on changed files.  
* `npm test` will run the full Jest test suite and provide a code coverage report.