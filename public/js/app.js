const weatherForm = document.querySelector('#weather-form');
const locationInput = document.querySelector('input[name="location"]');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    messageOne.textContent="Loading...";
    messageTwo.textContent="";
    let location = locationInput.value;
    
    fetch(`http://localhost:3000/weather?address=${location}`)
    .then((res)=>{
        res.json().then(data=>{
            if(data.error){
                messageOne.textContent="Error: "+data.error;
            }
            else{
                messageOne.textContent= 'Location: '+data.location;
                messageTwo.textContent= 'Forecast: '+data.forecast;
            }
        })
    })
})