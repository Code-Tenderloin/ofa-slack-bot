module.exports = function (controller) {
  controller.hears("invite cohort", "direct_mention", async (bot, message) => {
    const { members } = await bot.api.users.list();
    debugger;
    await bot.reply(message, JSON.stringify(members, null, 4));
  });
};
