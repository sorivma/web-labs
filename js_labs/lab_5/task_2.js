const table = [
    "Moscow | 55.7522 | 37.6156",
    "Bejing | 39.913818 | 116.363625"
]

class City{
    constructor(name, lat, lan) {
        this.name = name
        this.lat = parseFloat(lat).toFixed(2)
        this.lan = parseFloat(lan).toFixed(2)
    }
}


table.forEach(element => {
    params = element.split(" | ")
    console.log(new City(params[0], params[1], params[2]))
})
