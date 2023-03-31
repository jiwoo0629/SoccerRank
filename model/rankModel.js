var express = require('express');
var axios = require('axios');
var cheerio = require('cheerio');

module.exports={ async getRank (link, callback) {
    let teamList = [];
    try {
      const html = await axios.get(link);
      const $ = cheerio.load(html.data);
      const team = $("div.widget-match-standings__table-container");
      const teamRank = $(team).find("table tbody tr")
      teamRank.map((i, element) => {
        let teamStat = new Array(11);
        $(element).find("td").each((j, elem) => {
          if(j === 1 || j === 11) teamStat[j] = "";
          else if(j === 2) teamStat[j] = $(elem).find("a.widget-match-standings__link span").text().replace(/\s/g, "");
          else teamStat[j] = $(elem).text().replace(/\s/g, "");
        })
        teamList[i] = {
          rank: teamStat[0],
          team: teamStat[2],
          game: teamStat[3],
          point: teamStat[10],
          win: teamStat[4],
          draw: teamStat[5],
          lose: teamStat[6],
          score: teamStat[7],
          concede: teamStat[8],
          gap: teamStat[9]
        };
      });
      callback(teamList);
    } catch(error) {
      console.log(error);
    }
  }
}