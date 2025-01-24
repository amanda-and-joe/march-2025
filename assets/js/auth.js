// Accepted last names and their corresponding first names
const fridayInvites = {
    "carle": "Carle Family",
    "mccawley": "McCawley Clan",
    "guilfoil": "Rachel and TJ",
    "ferrelli": "Ferrelli Family",
    "muftu": "Serra",
    "saules": "Amy Rose and Stu",
    "paglieri": "La famiglia Paglieri",
    "gentile": "Gentile Family",
    "marsh": "Brian",
    "guilfoil-marsh": "Rachel and Brian",
    "connor": "Mimi and Tim"
}

const saturdayInvites = {
    "alaniz-cantu": "Caroline and Edgar",
    "alaniz cantu": "Caroline and Edgar",
    "maretz": "Caroline and Edgar",
    "brooks": "Abbe and Colin",
    "caputo": "Lauren and Tim",
    "fried": "Lauren and Tim",
    "clausen": "Judy and Keith",
    "durham": "Chris and Woodrow",
    "ellis": "Marco and Emma",
    "oriella": "Marco and Emma",
    "evans": "Anthony and Hannah",
    "ferrara": "Anthony and Hannah",
    "fitzpatrick": "Fitz and Fitz",
    "flaherty": "Jack",
    "green": "Shawny",
    "hancock": "Meg and Cutler",
    "klein": "Meg and Cutler",
    "horton": "Joie and Jayna",
    "johnson-hogan": "Devin and Aaron",
    "johnson": "Devin and Aaron",
    "hogan": "Devin and Aaron",
    "spielman": "Devin and Aaron",
    "lang": "Tall Julia",
    "morris": "Daniel and Jason",
    "o'connor": "Shannon",
    "oconnor": "Shannon",
    "park": "Yool",
    "richman": "Tess",
    "riordan": "Coleman",
    "st. Pierre": "Kaelie",
    "st Pierre": "Kaelie",
    "stpierre": "Kaelie",
    "suttlemyre": "Sarah",
    "smith": "Jesse"
};

const danceInvites = {
	"fein": "Jared and Melanie",
	"mukherjee": "Alex and Natalie",
	"krause": "Alex and Natalie",
	"abner": "Morgan and Chris",
	"messer": "Morgan and Chris",
	"fletcher": "Phoebe",
	"burnett": "Jared and Melanie",
	"ford": "Eileen"
	// high school jax?
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from reloading the page

    // Get the value of the last name input
    const lastName = document.querySelector('#demo-name').value.trim().toLowerCase();

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

    	if (lastName === "durham") {
    		document.querySelector('#donotinvite').classList.remove('hidden');
    		document.querySelector('#ozzy').classList.remove('hidden');
    	}

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
