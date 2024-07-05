// Save GoodGrowth API URL as variable.
const URL = "https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a&lat=27.987850&lon=86.925026";

//Fetches the data from the URL
fetch(URL).then(response => {
//Checks if response is okay
    if (!response.ok) {
        console.error('Response was not ok')
    }
    //Data response
    return response.json()

}).then(data => {
    /*
    If the data is received 'then' console.log the result. Then take the list of data, find the last item
    and return the weather object and then the item with the name main
    */
    console.log(`The Weather is currently: ${data.list[data.list.length - 1].weather[0].main}`);
    /*
    This 'catches' the error if no data is found - before the comma is a custom error message - after the comma
      is the error returned, for example - "TypeError: Cannot read properties of undefined"
      */
}).catch(error => console.error('Weather data not found :', error));