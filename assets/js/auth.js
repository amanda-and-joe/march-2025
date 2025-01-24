// Accepted last names and their corresponding first names
const fridayInvites = {
    "test": "test family",
    "Carle": "Carle Family",
    "McCawley": "McCawley Clan",
    "Guilfoil": "Rachel and TJ",
    "Ferrelli": "Ferrelli Family",
    "Muftu": "Serra",
    "Saules": "Amy Rose and Stu",
    "Paglieri": "La famiglia Paglieri",
    "Gentile": "Gentile Family",
    "Marsh": "Brian",
    "Guilfoil-Marsh": "Rachel and Brian",
    "Connor": "Mimi and Tim"
}

const saturdayInvites = {
    "Alaniz-Cantu": "Caroline and Edgar",
    "Maretz": "Caroline and Edgar",
    "Brooks": "Abbe and Colin",
    "Caputo": "Lauren and Tim",
    "Fried": "Lauren and Tim",
    "Clausen": "Judy and Keith",
    "Durham": "Chris and Woodrow",
    "Ellis": "Marco and Emma",
    "Oriella": "Marco and Emma",
    "Evans": "Anthony and Hannah",
    "Ferrara": "Anthony and Hannah",
    "Fitzpatrick": "Fitz and Fitz",
    "Flaherty": "Jack",
    "Green": "Shawny",
    "Hancock": "Meg and Cutler",
    "Klein": "Meg and Cutler",
    "Horton": "Joie and Jayna",
    "Johnson-Hogan": "Devin and Aaron",
    "Johnson": "Devin and Aaron",
    "Hogan": "Devin and Aaron",
    "Spielman": "Devin and Aaron",
    "Lang": "Tall Julia",
    "Morris": "Daniel and Jason",
    "O'Connor": "Shannon",
    "OConnor": "Shannon",
    "Park": "Yool",
    "Richman": "Tess",
    "Riordan": "Coleman",
    "St. Pierre": "Kaelie",
    "St Pierre": "Kaelie",
    "StPierre": "Kaelie",
    "Suttlemyre": "Sarah"
};

const danceInvites = {
	"Fein": "Jared and Melanie",
	"Mukherjee": "Alex and Natalie",
	"Krause": "Alex and Natalie",
	"Abner": "Morgan and Chris",
	"Messer": "Morgan and Chris",
	"Fletcher": "Phoebe",
	// Melanie
	// high school jax?
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from reloading the page

    // Get the value of the last name input
    const lastName = document.querySelector('#demo-name').value.trim();

    // Check if the last name exists in the accepted names
    if (fridayInvites.hasOwnProperty(lastName)) {
        const firstName = fridayInvites[lastName];
		document.querySelector('#user-first-name').textContent = firstName;

        // Remove the hidden class to display the header
        document.querySelector('#hiddenheader').classList.remove('hidden');
        document.querySelector('#greeting').classList.remove('hidden');

        document.querySelector('#friday').classList.remove('hidden');
        document.querySelector('#saturday').classList.add('hidden');
        document.querySelector('#dancing').classList.add('hidden')

        document.querySelector('#lastname-form').classList.add('hidden');
        document.querySelector('#sorry').classList.add('hidden');

    } else if (saturdayInvites.hasOwnProperty(lastName)) {
    	const firstName = saturdayInvites[lastName];
		document.querySelector('#user-first-name').textContent = firstName;

        // Remove the hidden class to display the header
        document.querySelector('#hiddenheader').classList.remove('hidden');
        document.querySelector('#greeting').classList.remove('hidden');

        document.querySelector('#friday').classList.add('hidden');
        document.querySelector('#saturday').classList.remove('hidden');
        document.querySelector('#dancing').classList.add('hidden')

        document.querySelector('#lastname-form').classList.add('hidden');
        document.querySelector('#sorry').classList.add('hidden');
    } else if (danceInvites.hasOwnProperty(lastName)) {
    	const firstName = danceInvites[lastName];
		document.querySelector('#user-first-name').textContent = firstName;

        // Remove the hidden class to display the header
        document.querySelector('#hiddenheader').classList.remove('hidden');
        document.querySelector('#greeting').classList.remove('hidden');
        

        document.querySelector('#friday').classList.add('hidden');
        document.querySelector('#saturday').classList.add('hidden');
        document.querySelector('#dancing').classList.remove('hidden')

        document.querySelector('#lastname-form').classList.add('hidden');
        document.querySelector('#sorry').classList.add('hidden');
    }  else {
    	console.log(danceInvites)
        document.querySelector('#sorry').classList.remove('hidden');
    }
});
