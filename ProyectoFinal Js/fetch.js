
document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("product-list");
    const fetchDataButton = document.getElementById("fetchDataButton");
    const apiData = document.getElementById("api-data");
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ae3c0258d4msh26f714855a3e023p18b6dejsn2c81f8e37f01',
            'X-RapidAPI-Host': 'steam-market-and-store.p.rapidapi.com'
        }
    };
    const apiEndpoint = "https://steam-market-and-store.p.rapidapi.com/get_orders_hist/730---Dreams%20%2526%20Nightmares%20Case";
const apiKey = "ae3c0258d4msh26f714855a3e023p18b6dejsn2c81f8e37f01";

document.getElementById("fetchDataButton").addEventListener("click", () => {
    fetch(apiEndpoint, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la respuesta de la API: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
    })
    .catch(error => {
        console.error('Error al cargar datos de la API:', error);
    });
});
});