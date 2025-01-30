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
    "conner": "Mimi and Tim",
    "chavez": "Mimi and Tim",
    "chavarri": "Mimi and Tim",
    "chavez-chavarri": "Mimi and Tim",
    "chavez chavarri": "Mimi and Tim",
    "veal": "Laura",
    "meade": "Laura",
    "meade-veal": "Laura",
    "meade veal": "Laura"
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
    "laub": "Fitz and Fitz",
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
	"burnett": "Jared and Melanie",
	"mukherjee": "Alex and Natalie",
	"krause": "Alex and Natalie",
	"abner": "Morgan and Chris",
	"messer": "Morgan and Chris",
	"fletcher": "Phoebe",
	"ford": "Eileen",
	"cook": "Carter",
	"griffin": "Jonathan",
	"gregory": "Austin",
	"waters": "Megan and McLean",
	"teems": "Megan and McLean"
}

const registry = {
    "lang": {
        "name": "Julia",
        "gift": "buy us a New Zealand Holstein so we can start our commune",
    },
    "morris": {
        "name": "Daniel",
        "gift": "honor Jason's legacy by getting us a replacement",
    },
    "durham": {
        "name": "Chris",
        "gift": "combine with Jack and Tony and buy us a hot tub",
    },
    "flaherty": {
        "name": "Jack",
        "gift": "combine with Tony and Chris and buy us a hot tub",
    },
    "ferrara": {
        "name": "Tony",
        "gift": "combine with Chris and Jack and buy us a hot tub",
    },
    "oriella": {
        "name": "Marco",
        "gift": "submit your resignation from Deloitte in writing so we can start our brewery",
    }
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from reloading the page

    // Get the value of the last name input
    const lastName = document.querySelector('#demo-name').value.trim().toLowerCase();

    // Check if the last name exists in the accepted names
    if (fridayInvites.hasOwnProperty(lastName)) {

        document.querySelector('#main').classList.remove('hidden');


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


        document.querySelector('#main').classList.remove('hidden');

    	const firstName = saturdayInvites[lastName];

    	if (lastName === "durham") {
    		document.querySelector('#donotinvite').classList.remove('hidden');
    		document.querySelector('#banned').classList.remove('hidden');
    	}

        if (registry.hasOwnProperty(lastName)) {
            document.querySelector('#selective-registry').textContent = "Except you, "+registry[lastName]['name']+". Please "+registry[lastName]['gift']+". Thank you.";
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


        document.querySelector('#main').classList.remove('hidden');

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
