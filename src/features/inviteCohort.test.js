const { initController, setTimeoutAsync } = require("../lib/testHelpers");
const fileBeingTested = require("./inviteCohort");

describe(`inviteCohort`, () => {
  let controller;
  beforeEach(() => {
    process.env.MYTEAM = {};
    process.env.MYCHAN = "my channel";
    process.env.MYUSER = "my user";
    controller = initController(fileBeingTested);
  });

  describe(`bot should respond to direct mention: "inviteCohort"`, () => {
    let reply;
    it('should respond to "invite cohort"', async () => {
      reply = await controller.usersInput([
        {
          type: "direct_mention",
          user: "user123",
          channel: "my channel",
          messages: [
            {
              text: "invite cohort",
              isAssertion: true,
            },
          ],
        },
      ]);

      expect(reply).toHaveProperty("text");
    });
  });
});
