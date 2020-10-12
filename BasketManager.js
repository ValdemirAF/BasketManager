let match = 0
let minSeason = 1001
let maxSeason = 0
let maxRecord = -1
let minRecord = -1

function addMatch() {
    let txtscore = document.getElementById('txtscore')
    let table = document.getElementById('stable')
    if (txtscore.value.length == 0) {
        alert('[ERRO] Adicione o placar!')
    } else {
        let score = Number(txtscore.value)
        
        if (score < minSeason) {
            minSeason = score
            minRecord++
        }
        if (score > maxSeason) {
            maxSeason = score
            maxRecord++
        }

        match++
        let row = document.createElement('tr')
        let matchCell = document.createElement('td')
        let scoreCell = document.createElement('td')
        let minSeasonCell = document.createElement('td')
        let maxSeasoncell = document.createElement('td')
        let minRecordCell = document.createElement('td')
        let maxRecordCell = document.createElement('td')

        matchCell.innerText = match
        scoreCell.innerText = score
        minSeasonCell.innerText = minSeason
        maxSeasoncell.innerText = maxSeason
        minRecordCell.innerText = minRecord
        maxRecordCell.innerText = maxRecord

        row.appendChild(matchCell)
        row.appendChild(scoreCell)
        row.appendChild(minSeasonCell)
        row.appendChild(maxSeasoncell)
        row.appendChild(minRecordCell)
        row.appendChild(maxRecordCell)
        table.appendChild(row)
        
    }


}