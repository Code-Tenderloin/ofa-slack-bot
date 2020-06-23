module.exports = function (controller) {
  controller.ready(async () => {
    if (process.env.MYTEAM && process.env.MYCHAN) {
      let bot = await controller.spawn(process.env.MYTEAM);
      await bot.startConversationInChannel(
        process.env.MYCHAN,
        process.env.MYUSER
      );
      bot.say("I AM AWOKEN.");
    }
  });
};
