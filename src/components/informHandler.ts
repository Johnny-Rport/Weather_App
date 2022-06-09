import { input } from "./search"

// type defines JSON data being retrieved
export interface cityType {
    coord: {lon: number, lat: number}
    country: string
    id: number
    name: string
    state: string
}

// TODO: Display the different sets of data, return whether to display the data or an alert saying searched term doesn't exist
// Move onto Weather API to display temps
function inform() {
    fetch("/CITYLIST_test.json")
    .then(response => response.json()).then((data: Array<cityType>) => {
      let x = data.find(city => {
        return city.name.toLowerCase() === input.toLowerCase()
      })
      console.log(x)
    })
}  
  export default inform