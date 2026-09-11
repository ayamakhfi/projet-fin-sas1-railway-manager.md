var prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

let tickets = [];


function Menuprincipal() {
    let choix = "";
    while (choix !== "0") {
        console.log("=================================");
        console.log("        RAILWAY MANAGER        ");
        console.log("=================================");

        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("0. Quitter");

        choix = prompt(`Votre choix:`);
        switch (choix) {
            case "1": ("=== TRAJETS DISPONIBLES ===", Affichertrajets()); break;
            case "2": Acheterunticket(); break;
            case "3": Afficherlestickets(); break;
            case "4": Annulerunticket(); break;
            case "5": console.log(Rechercherunticket()); break;
            case "6": Filtrerlestrajets(); break;
            case "7": let resultat = Trierlestrajets();

                for (let trajet of resultat) {
                    console.log(`${trajet.departure} → ${trajet.destination} : ${trajet.price} DH`);
                }
                ; break;

        }
    }
}


Menuprincipal();

function Affichertrajets() {
    for (let trajet of trips) {
        console.log(`
         #${trajet.id} ${trajet.departure} → ${trajet.destination}
         Départ : ${trajet.departureTime}
         Arrivée : ${trajet.arrivalTime}
         Prix : ${trajet.price}
         Places disponibles : ${trajet.availableSeats}`);
    }
}


function firstcapital(nom) {
    const espace = nom.trim();
    const firstlettre = espace.charAt(0).toUpperCase();
    const rest = espace.slice(1).toLowerCase();
    return firstlettre + rest;
}



function seatNumber(target) {
    let count = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].tripId === target) {
            count++;
        }
    }
    return count;
}




function Acheterunticket() {
    let name = firstcapital(prompt(`Nom du passager : `));
    let trajetId = Number(prompt(`Identifiant du trajet :`));
    const foundtrajet = trips.find(trips => trips.id === trajetId);

    if (foundtrajet === undefined) {
        console.log("Trajet introuvable.")
        return;
    }

    if (foundtrajet.availableSeats === 0) {
        console.log("Train complet. ")
        return;
    }
    else {

        const Ticket = {
            id: tickets.length + 1,
            Passager: firstcapital(name),
            tripId: foundtrajet.id,
            Place: seatNumber(trajetId) + 1,
            prix: foundtrajet.price
        };
        tickets.push(Ticket);
        foundtrajet.availableSeats -= 1;
        console.log("Ticket acheté avec succès.");
        console.log("Ticket #", Ticket.id);
        console.log("Passager:", Ticket.Passager);
        console.log("Trajet :", foundtrajet.departure + "→" + foundtrajet.destination);
        console.log("place:", Ticket.Place);
        console.log("price:", Ticket.prix);
    }

}




function trajet(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === target)
            return arr[i];
    }
}



function Afficherlestickets() {
    if (tickets.length === 0) {
        console.log("Aucun ticket enregistré.");
    }
    for (let i = 0; i < tickets.length; i++) {
        console.log("=== TICKETS ===");
        console.log("Ticket #", tickets[i].id);
        console.log("Passager:", tickets[i].Passager);
        console.log("Trajet :", trajet(trips, tickets[i].tripId).departure + "→" + trajet(trips, tickets[i].tripId).destination);
        console.log("place:", tickets[i].Place);
        console.log("price:", tickets[i].prix);
    }
}



function Annulerunticket() {
    let ticketId = Number(prompt(`Identifiant du ticket : `));

    for (let i = 0; i < tickets.length; i++) {

        if (ticketId === tickets[i].id) {

            trajet(trips, tickets[i].tripId).availableSeats += 1;

            tickets = tickets.filter(ticket => ticket.id !== ticketId);

            console.log("Ticket annulé avec succès.");
            return;
        }
    }

    console.log("Ticket introuvable.");
}



function Rechercherunticket() {
    let Rechercher = [];
    let namedepassager = firstcapital(prompt('Nom du passager :'));
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].Passager === namedepassager) {
            Rechercher.push(tickets[i]);
        }
    }
    return Rechercher;
}




function Filtrerlestrajets() {
    let ville = firstcapital(prompt(`Ville de départ :`));
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].departure === ville)
            console.log(trips[i].departure + "→" + trips[i].destination + ":" + trips[i].price + "DH");
    }
}




function Trierlestrajets() {
    for (let i = 0; i < trips.length; i++) {
        for (let j = 0; j < trips.length - 1 - i; j++) {
            if (trips[j].price > trips[j + 1].price) {
                let a = trips[j];
                trips[j] = trips[j + 1];
                trips[j + 1] = a;
            }
        }
    }
    return trips;
}

function ticketsvendus() {
    let sum = 0;
    for (let i = 0; i < tickets.length; i++) {
        sum++;
    }
    return sum;
}
console.log("Nombre total de tickets :", ticketsvendus());


function Chiffretotal() {
    let sumprice = 0;
    for (let ticket of tickets) {
        sumprice += ticket.prix;
    }
    return sumprice;
}

console.log(`Chiffre d'affaires total : ${Chiffretotal()} DH`);


var arr = [];
function arrtrajet() {
    for (let ticket of trips) {
        seatNumber(ticket.id);

        arr.push(seatNumber(ticket.id));
    }
    return arr;
}
console.log("trajet le plus vendu", arrtrajet());
function trajetleplusvendu() {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log("trajet le plus vendu", trajetleplusvendu());