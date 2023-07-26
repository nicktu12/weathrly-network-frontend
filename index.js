const locationDropdown = document.getElementById("city-select")
const forecastContainer = document.getElementById("forecast")
const locationText = document.getElementById("location")
const alertMessage = document.getElementById("alert-message")
const alertForm = document.getElementById("alert-form")
const alertInput = document.getElementById("alert-input")
const deleteAlert = document.getElementById("delete-alert")

let weatherData
let locationUrl

locationDropdown.addEventListener('change', (e) => {
    locationUrl = e.target.value.replace(/\s+/g, '-').toLowerCase()
    getDataByLocation()
})

alertForm.addEventListener('submit', (e) => {
    e.preventDefault()
})

deleteAlert.addEventListener('click', (e) => {
    deleteMessage(locationUrl)
})


const getDataByLocation = () => {
    return fetch(`http://localhost:3001/api/v1/${locationUrl}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

const postNewAlert = (message) => {

}



const populateForecast = (data) => {
    const htmlUpdate = data.forecast.reduce((html, day) => {
        html += `
            <article>
                <h4>${day.day}</h4>
                <p>High: ${day.high}</p>
                <p>Low: ${day.low}</p>
                <p>${day.condition}</p>
            </article>`
        return html
    }, '')
    forecastContainer.innerHTML = htmlUpdate
}

const populateHeader = (data) => {

}

const populateAlertMessage = (data) => {

}

// Tasks
// 1. Make 7 day forecast appear on the dom
// 2. Implement populateHeader and populateAlertMessage functions
// 3. Implement postNewAlert function
// 4. Add error handling that will not POST an empty message
// 5. Create a function that will delete any current alerts
// 6. Add error handling that will not delete an alert if there is no alert to delete
// 7. SPICY: Create a closure that takes in our API base URL and saves that value for later, resulting in a function we call with our location only (fetch function w/ base URL is partially applied)

// Reflection questions
// 1. When and where can I update the DOM based on async data responses?
// 2. How can stale data on the DOM from previous network requests be cleared of the display?
// 3. How do we ensure data remains up to date on the DOM when POST and DELETE requests happen?
// 4. How can global variables be leveraged to store the value of async data?
// 5. How can network request error handling be employed to let the user know they've done something wrong?
// 6. How can we indicate to users that data is still loading?
