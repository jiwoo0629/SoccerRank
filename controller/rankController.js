var express = require('express');
var rankModel = require('../model/rankModel');

exports.getMain=(req, res) => {
    res.redirect('/premier')
}

exports.getRank= async (req, res, next) => {
    var type = await req.params;
    var link = 'https://www.goal.com/kr/프리미어리그/순위/2kwbbcootiqqgmrzs6o5inle5'
    if(type.league === 'premier') link = 'https://www.goal.com/kr/프리미어리그/순위/2kwbbcootiqqgmrzs6o5inle5'
    else if(type.league === 'laliga') link = 'https://www.goal.com/kr/프리메라리가/순위/34pl8szyvrbwcmfkuocjm3r6t'
    else if(type.league === 'bundesliga') link = 'https://www.goal.com/kr/분데스리가/순위/6by3h89i2eykc341oz7lv1ddd'
    else if(type.league === 'seriea') link = 'https://www.goal.com/kr/세리에-a/순위/1r097lpxe0xn03ihb7wi98kao'
    else if(type.league === 'league1') link = 'https://www.goal.com/kr/리그-1/순위/dm5ka0os1e3dxcp3vh05kmp33'
    else if(type.league === 'kleague1') link = 'https://www.goal.com/kr/k리그-1/순위/avs3xposm3t9x1x2vzsoxzcbu'
    rankModel.getRank(link, (teamList) => {
        res.render('index', {title: '축구 기록/순위 조회 프로그램', list: teamList });
    });
}