import { Championship } from "./championship";

describe("Championship", () => {
  it("should be able to create a championship", () => {
    const championship = Championship.create({
      name: "premier-league",
      season: "2023-2024",
    });

    expect(championship).toBeTruthy();
  });
});
