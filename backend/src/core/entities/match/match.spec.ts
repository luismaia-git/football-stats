import { Championship } from "../championship/championship";
import { Stadium } from "../stadium/stadium";
import { Team } from "../team/team";
import { Match } from "./match";

describe("Match", () => {
  it("should be able to create a match", () => {
    const homeTeam = Team.create({
      name: "home-team",
      city: "some-city",
      players: [],
      stadium: [],
      updatedAt: new Date(),
    });

    const awayTeam = Team.create({
      name: "away-team",
      city: "some-city",
      players: [],
      stadium: [],
      updatedAt: new Date(),
    });

    const championship = Championship.create({
      name: "some-league",
      season: "23/24",
      updatedAt: new Date(),
    });

    const stadium = Stadium.create({
      name: "some-name",
      capacity: 10000,
      location: "some-location",
      teamId: "some-id",
      updatedAt: new Date(),
    });

    const match = Match.create({
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      date: new Date(),
      championship: championship,
      referee: "some-referee",
      stadium: stadium,
      awayScore: 1,
      homeScore: 2,
      injuredPlayers: [],
      performance: [],
      updatedAt: new Date(),
    });

    expect(match).toBeTruthy();
    expect(match.stadium).toEqual(stadium);
    expect(match.championship).toEqual(championship);
    expect(match.homeTeam).toEqual(homeTeam);
    expect(match.awayTeam).toEqual(awayTeam);
  });
});
