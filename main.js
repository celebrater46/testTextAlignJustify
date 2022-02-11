"use strict";

const p = document.getElementById("even");
const testLine = "　勤務先は大手家電量販店ビックリカメラ｜六出那《ろくでな》支店。無論、正社員などではない。ここに正社員という概念｜存在しない《ノット・イクシスト》。会社の都合でいつでも｜馘首《クビ》にされる百円ライターさながらの使い捨て｜非正規社員《イレギュラー》だ。\n";
const testLine2 = "「『｜我貴神の血を受け継ぎし暗黒の従者《イオ・ウ・ドゥステルヌ・ネヒト》。｜我が貴神の血を代償に祈り願う《ターレン・サング・へディル》――｜来たれ暗黒の神よ《プリーテ・ドゥステルヌ・ヘル》』」\n";

const removeFirstSpace = (line) => {
    if(line.substring(0, 1) === "　"){
        return line.substring(1);
    } else {
        return line;
    }
}

// const convertToEvenAllocation = (line) => {
//     const noFirstSpaceLine = removeFirstSpace(line);
//     let str = "";
//     let temp = noFirstSpaceLine.replace(/\n/g, "");
//     console.log(temp);
//     while (temp.length > 0){
//         str += '<span>' + temp.substring(0, 1) + '</span>';
//         temp = temp.substring(1);
//     }
//     console.log(str);
//     return "<div class='first_space'>　</div><div class='even'>" + str + "</div>";
// }

// ｜堕天男《ルシファー》 -> <ruby><rb>堕天男</rb><rp>(</rp><rt>ルシファー</rt><rp>)</rp></ruby> 10+19+22+フリガナ
const convertRuby = (line) => {
    let str = line;
    if(str.indexOf("｜") > -1){
        str = str.replace(/｜/g, "<ruby><rb>");
        str = str.replace(/《/g, "</rb><rp>(</rp><rt>");
        str = str.replace(/》/g, "</rt><rp>)</rp></ruby>");
    }
    return str;
}

p.innerHTML = convertRuby(testLine + testLine + testLine + testLine2);
