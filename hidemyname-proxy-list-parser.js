//https://hidemy.name/ru/proxy-list/?country=RU&maxtime=300#list

var proxyListTable = [];

var tableRows = document.querySelectorAll(".table_block > table:nth-child(1) > tbody:nth-child(2) > tr"); //table rows

var columnsNeeded = [0, 1, 2, 4];

var resultVerySmart = "";

//
for (let i = 0; i < tableRows.length; i++) {
    proxyListTable[i] = [];
    for (let k = 0; k < tableRows[0].cells.length; k++) {
        proxyListTable[i][k] = tableRows[i].cells[k].innerText;
    }
}

proxyListTable.sort(function (x, y) {
    return x[3].match(/\d+/g) - y[3].match(/\d+/g);
});

console.table(proxyListTable);

for (let i = 0, f = 0; i < tableRows.length; i++) {
    if (parseInt(proxyListTable[i][3].match(/\d+/g)) !== 0 ) { 
        f += 1;
        resultVerySmart += ` ${proxyListTable[i][0]}:${proxyListTable[i][1]} [${proxyListTable[i][4]}] [${f} ${proxyListTable[i][2]}]` + ((i < (tableRows.length - 1)) ? "\n" : "");
}
}

console.log(resultVerySmart);

function downloadContent(name, content) {
    var atag = document.createElement("a");
    var file = new Blob([content], {type: 'text/plain'});
    atag.href = URL.createObjectURL(file);
    atag.download = name;
    atag.click();
  }
  
  downloadContent("smart-proxy-list-mcp.txt", resultVerySmart);