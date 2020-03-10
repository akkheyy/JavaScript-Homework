const input = d3.select("input")
const button = d3.select("button")
const table = d3.select("body").append("table")


function buildTable() {
    const tbody = d3.select('tbody')
    tbody.html("")
    data.forEach(dataRow => {
        const elements = tbody.append('tr')
        Object.values(dataRow).forEach(value => tbody.append('td').text(value))
    })
    
}

const handler = function(){
    const tbody = d3.select('tbody')
    // tbody.html("")
    data.forEach(dataRow => {
        const elements = tbody.append('tr')
        Object.values(dataRow).forEach(value => tbody.append('td').text(value))
    })

  let filterCond = input.property("value")

  tbody.html("")

  data.filter(record => record.datetime === filterCond).forEach(record => {
    let row = tbody.append("tr")
    row.append("td").text(record.datetime)
    row.append("td").text(record.city)
    row.append("td").text(record.state)
    row.append("td").text(record.country)
    row.append("td").text(record.shape)
    row.append("td").text(record.durationMinutes)
    row.append("td").text(record.comments)

    })
}

buildTable()
input.on("change", handler)
button.on("click", handler)

