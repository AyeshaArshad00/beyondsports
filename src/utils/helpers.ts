import { log, table } from "console";
import { GAMES, STANDINGS_SUBMENU, STATISTICS_SUBMENU } from "./constants";

export type TeamFixture = {
  logo: string;
  name: string | undefined | null;
  code?: string | undefined | null;
  score?: string | undefined | null;
};

export type PlayersData = {
  logo: string;
  name: any;
};

export type ScheduleData = {
  matchTime: string | undefined | null;
  matchVenue: string | undefined | null;
  matchStatus: string | undefined | null;
  homeTeam: TeamFixture;
  awayTeam: TeamFixture;
};

export type StatisticsData = {
  average: any[],
  subMenuList: any[],
  totals: any[]
}
export type StandingsData = {
  subMenuList: any[],
  Group: any[],

};
export type MenuData = {
  team: any;
}

export type LeadersData = {
  heading_name: any;
  ld_img: string;
  ld_name: string | undefined | null;
  ld_team: string | undefined | null;
  ld_first_val: any;
  ld_state: string | undefined | null;
  table_data: any;
  // tables_data:[];
};
export const fetchResultsData = async (url: string, type: string, subMenu?: string | undefined) => {
  const response = await fetch(url);
  const data = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, "text/html");
  const d = parseHtmlToData(doc, type, subMenu);
  return d;
};

export const parseHtmlToData = (
  htmlDoc: Document | undefined,
  type: string = GAMES.SCHEDULE,
  subMenu: string | undefined
): ScheduleData[] | TeamFixture[] | StandingsData | StatisticsData | LeadersData[] | MenuData[] => {
  const data: ScheduleData[] = [];
  const teams: TeamFixture[] = [];
  const playersData: PlayersData[] = [];
  const leadersData: LeadersData[] = [];
  const menuData: MenuData[] = [];

  if (type === GAMES.SCHEDULE && htmlDoc) {
    const nodes = htmlDoc.documentElement.getElementsByClassName(
      "match-wrap STATUS_COMPLETE"
    );
    const node = htmlDoc.documentElement.getElementsByTagName(
      "select"
    );
    console.log("dropdownmenu", node);
    for (let index = 0; index < node.length; index++) {
      const obj: MenuData = {
        team: nodes[index]
          .querySelector("#yearChooser")
        // team:Array.from(node[index].querySelectorAll("#competitionChooser")).map(e => e)
      };
      console.log("mannnn", obj);

    }


    for (let index = 0; index < nodes.length; index++) {
      const obj: ScheduleData = {
        matchTime: nodes[index]
          .querySelector(".match-time")
          ?.querySelector("span")?.textContent,
        matchVenue: nodes[index]
          .querySelector(".match-venue")
          ?.querySelector("span")?.textContent,
        homeTeam: {
          logo: nodes[index]
            .querySelector(".sched-teams")
            ?.querySelector(".home-team")
            ?.querySelector(".home-team-logo")
            ?.querySelector("a")
            ?.querySelector("img")?.src || "",
          name: nodes[index]
            .querySelector(".sched-teams")
            ?.querySelector(".home-team")
            ?.querySelector(".team-name-full")?.textContent,
          code: nodes[index]
            .querySelector(".sched-teams")
            ?.querySelector(".home-team")
            ?.querySelector(".team-name-code")?.textContent,
          score: nodes[index]
            .querySelector(".sched-teams")
            ?.querySelector(".home-team")
            ?.querySelector(".fake-cell")?.textContent,
        },
        awayTeam: {
          logo: nodes[index]
            .querySelector(".sched-teams")
            ?.querySelector(".away-team")
            ?.querySelector(".away-team-logo")
            ?.querySelector("a")
            ?.querySelector("img")?.src || "",
          name: nodes[index]
            .querySelector(".sched-teams")
            ?.querySelector(".away-team")
            ?.querySelector(".team-name-full")?.textContent,
          code: nodes[index]
            .querySelector(".sched-teams")
            ?.querySelector(".away-team")
            ?.querySelector(".team-name-code")?.textContent,
          score: nodes[index]
            .querySelector(".sched-teams")
            ?.querySelector(".away-team")
            ?.querySelector(".fake-cell")?.textContent,
        },
        matchStatus: nodes[index]
          .querySelector(".sched-teams")
          ?.querySelector(".team-divide")
          ?.querySelector(".notlive")
          ?.querySelector(".matchStatus")?.textContent,
      };
      data.push(obj);

    }
    return data

  }

  if (type === GAMES.STANDINGS && htmlDoc) {
    var subMenuList = Array.from(htmlDoc.documentElement.querySelectorAll(
      ".generic-list-menu > .menuoption"
    )).map((e) => e.textContent)
    let nodes;
    let n = 1;
    let standings_data: StandingsData = {
      subMenuList: subMenuList,
      Group: [],
    }
    if (subMenu && subMenu.toLocaleLowerCase() === STANDINGS_SUBMENU.GROUP2.toLocaleLowerCase()) {
      nodes = htmlDoc.documentElement.getElementsByTagName('table')
      let group = Array.from(nodes[1].querySelectorAll('tbody tr')).map(e => {
        return {
          Position: n++,
          logo: e.children[1]?.querySelector("a")
            ?.querySelector("img")?.src || "",

          TEAM: e.children[2].textContent,
          GP: e.children[3].textContent,
          W: e.children[4].textContent,
          L: e.children[5].textContent,
          GD: e.children[6].textContent,
          PTS: e.children[7].textContent,
          STR: e.children[8].textContent,
          L5: e.children[9].textContent,
        }

      })
      standings_data.Group = group;
    } else {

      nodes = htmlDoc.documentElement.getElementsByTagName('table')
      let group = Array.from(nodes[0].querySelectorAll('tbody tr')).map(e => {
        return {
          Position: n++,
          logo: e.children[1]?.querySelector("a")
            ?.querySelector("img")?.src || "",
          TEAM: e.children[2].textContent,
          GP: e.children[3].textContent,
          W: e.children[4].textContent,
          L: e.children[5].textContent,
          GD: e.children[6].textContent,
          PTS: e.children[7].textContent,
          STR: e.children[8].textContent,
          L5: e.children[9].textContent,


        }
      })
      standings_data.Group = group;
    }
    return standings_data;
  }

  if (type === GAMES.TEAMS && htmlDoc) {
    const nodes = htmlDoc.documentElement.getElementsByClassName(
      "team-link"
    );
    for (let index = 0; index < nodes.length; index++) {
      const obj: TeamFixture = {
        logo: nodes[index]
          .querySelector("a")?.querySelector("img")?.src || "",
        name: nodes[index]
          .querySelector("a")?.querySelector("img")?.alt
      };
      teams.push(obj);
    }
    return teams;
  }
  if (type === GAMES.STATISTICS && htmlDoc) {
    var subMenuList = Array.from(htmlDoc.documentElement.querySelectorAll(".generic-list-menu > .menuoption")).map((e) => e.textContent)
    let nodes = htmlDoc.documentElement.getElementsByTagName('table')
    let statistics_Data: StatisticsData = {
      subMenuList: subMenuList,
      average: [],
      totals: []
    }
    // Get average and totals by players
    if (subMenu && subMenu.toLocaleLowerCase() ===
      STATISTICS_SUBMENU.PLAYER.toLocaleLowerCase()) {
      const averageKeys = Array.from(nodes[1].querySelectorAll('thead tr th')).map((e) => e.textContent)
      const totalKeys = Array.from(nodes[0].querySelectorAll('thead tr th')).map((e) => e.textContent)
      statistics_Data.average = Array.from(nodes[1].querySelectorAll('tbody  tr')).map(row => {
        return Object.fromEntries(
          averageKeys.filter(key => key !== null).map(key => {
            return [key, row.children[averageKeys.indexOf(key)]?.textContent];
          })
        );
      });
      statistics_Data.totals = Array.from(nodes[0].querySelectorAll('tbody tr')).map(row => {
        return Object.fromEntries(
          totalKeys.filter(key => key !== null).map(key => {
            return [key, row.children[totalKeys.indexOf(key)]?.textContent];
          })
        );
      });

    } else {

      // Get average and totals by players Teams
      const averageKeys = Array.from(nodes[0].querySelectorAll('thead tr  th')).map((e) => e.textContent)
      const totalKeys = Array.from(nodes[1].querySelectorAll('thead tr  th')).map((e) => e.textContent)

      statistics_Data.average = Array.from(nodes[0].querySelectorAll('tbody  tr')).map(row => {
        return Object.fromEntries(
          averageKeys.filter(key => key !== null).map(key => {
            return [key, row.children[averageKeys.indexOf(key)]?.textContent];
          })
        );
      });


      statistics_Data.totals = Array.from(nodes[1].querySelectorAll('tbody  tr')).map(row => {
        return Object.fromEntries(
          totalKeys.filter(key => key !== null).map(key => {
            return [key, row.children[totalKeys.indexOf(key)]?.textContent];
          })
        );
      });

    }

    return statistics_Data;

  }

  if (type === GAMES.PLAYERS && htmlDoc) {
    console.log(type);

    const nodes = htmlDoc.documentElement.getElementsByClassName(
      "playerblock letter_A"
    );
    for (let index = 0; index < nodes.length; index++) {
      const obj: PlayersData = {
        logo: nodes[index]
          ?.querySelector("a")
          ?.querySelector("img")?.src || "",
        name: nodes[index]
          .querySelector(".playername")?.textContent,

      };
      playersData.push(obj);
    }
    return playersData;
  }

  //  Leaders data

  if (type === GAMES.LEADERS && htmlDoc) {
    const nodes = htmlDoc.documentElement.getElementsByClassName(
      "leader-block"
    );
    let node = htmlDoc.documentElement.getElementsByClassName('tableClass')
    //   for (let index = 0; index < node.length; index++) { 
    //   const group:any = Array.from(node[1].querySelectorAll('tbody tr')).map(e => {
    //     return {
    //       players: e.children[0].textContent,
    //       bb: e.children[1].textContent,
    //       cc: e.children[2].textContent,
    //     }
    //   })
    // }
    for (let index = 0; index < nodes.length; index++) {
      const obj: LeadersData = {
        heading_name: nodes[index]
          .querySelector(".leader-header")?.textContent,
        ld_img: nodes[index]
          .querySelector(".playerphoto")?.querySelector("img")?.src || "",
        ld_name: nodes[index]
          .querySelector(".ld-name")
          ?.querySelector("a")?.textContent,
        ld_team: nodes[index]
          .querySelector(".ld-team")
          ?.querySelector("a")?.textContent,
        ld_first_val: nodes[index]
          .querySelector(".leader-first-value")?.textContent,
        ld_state: nodes[index]
          .querySelector(".ld-statname")?.textContent,
        table_data: Array.from(node[index].querySelectorAll('tbody tr')).map(e => {
          return {
            players: e.children[0]?.textContent,
            bb: e.children[1]?.textContent,
            cc: e.children[2]?.textContent,
          }
        })
      };

      leadersData.push(obj);
    }
    return leadersData;
  }
  // if (htmlDoc) {

  // console.log("ababababbab",nodes);

  //   for (let index = 0; index < nodes.length; index++) {
  //     const obj: MenuData = {
  //           team:nodes[index]
  //           .querySelector(".ld-statname")?.textContent,
  //           // table_data:Array.from(node[index].querySelectorAll('tbody tr')).map(e => {
  //           //   return {
  //           //     players: e.children[0]?.textContent,
  //           //     bb: e.children[1]?.textContent,
  //           //     cc: e.children[2]?.textContent,
  //           //   }
  //           // })
  //     };
  //     console.log("leaderss",obj);

  //    menuData.push(obj);
  //   }
  //   return menuData;
  // }
  return [];
};
