const { BotMock, SlackApiMock } = require("botkit-mock");
const {
  SlackAdapter,
  SlackMessageTypeMiddleware,
  SlackEventMiddleware,
} = require("botbuilder-adapter-slack");

const initController = (fileBeingTested) => {
  const adapter = new SlackAdapter(SlackApiMock.slackAdapterMockParams);
  adapter.use(new SlackEventMiddleware());
  adapter.use(new SlackMessageTypeMiddleware());

  const controller = new BotMock({
    adapter: adapter,
  });

  SlackApiMock.bindMockApi(controller);

  fileBeingTested(controller);

  return controller;
};

const setTimeoutAsync = async (timeout = 100) => {
  return new Promise((r) => setTimeout(r, timeout));
};

module.exports = {
  default: { initController, setTimeoutAsync },
  initController,
  setTimeoutAsync,
};
