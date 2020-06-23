const { initController, setTimeoutAsync } = require("../lib/testHelpers");
const fileBeingTested = require("./announceInChannelOnBoot");

describe("controller.ready", () => {
  let controller;
  beforeEach(() => {
    process.env.MYTEAM = "team";
    process.env.MYCHAN = "my channel";
    process.env.MYUSER = "my user";

    controller = initController(fileBeingTested);
  });

  it(`should reply to my team channel "I AM AWOKEN."`, async () => {
    await setTimeoutAsync(1000);
    expect(controller.detailed_answers[process.env.MYCHAN][0].text).toEqual(
      "I AM AWOKEN."
    );
    expect(
      controller.detailed_answers[process.env.MYCHAN][0].conversation.id
    ).toEqual(process.env.MYCHAN);
  });

  it("but not when process.env.MYTEAM is empty", () => {
    process.env.MYTEAM = undefined;

    expect(controller.detailed_answers).toStrictEqual({});
  });

  it("but not when process.env.MYCHAN is empty", () => {
    process.env.MYCHAN = undefined;

    expect(controller.detailed_answers).toStrictEqual({});
  });
});
