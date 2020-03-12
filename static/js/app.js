const input = d3.select("input")
const button = d3.select("button")
const table = d3.select("body").append("table")

const allData = data


function buildTable(dataToShow) {
    const tbody = d3.select('tbody')
    tbody.html("")
    dataToShow.forEach(dataRow => {
        const elements = tbody.append('tr')
        Object.values(dataRow).forEach(value => tbody.append('td').text(value))
    })
    
}

const handler = function(){
    const tbody = d3.select('tbody')

  let filterCond = input.property("value")
  console.log(filterCond)

if (filterCond === ""){
    buildTable(allData)
} else {

  const filteredData = data.filter(record => record.datetime === filterCond)
  buildTable(filteredData)

}
}

buildTable(allData)
input.on("change", handler)
button.on("click", handler)

