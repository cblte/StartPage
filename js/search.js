
function interpretSearch() {
    var search = document.getElementById("js-search-input").value.split(" ");
    var searchTerms = "";
    console.log(search[0])
    switch(search[0])
    {
        case '?':
            alert("t: twitter\ntw: twitch\nr: reddit\nf: facebook\ny: youtube\na: amazon");
            break;
        case 't:':
		    window.open("https://twitter.com/" + search[1], "_blank");
            return true;	
        case 'tw:':
		    window.open("https://twitch.tv/" + search[1], "_blank");
            return true;	
        case 'r:':
			window.open("https://reddit.com/r/" + search[1], "_blank");
            return true;	
        case 'f:':
		   for(var i = 1; i < search.length; i++)
            {
                searchTerms += search[i]+'+';
            }
		    window.open("https://www.facebook.com/search/top/?q=" + searchTerms, "_blank");
            return true;				
        case 'y:':
            for(var i = 1; i < search.length; i++)
            {
                searchTerms += search[i]+'+';
            }
		    window.open("https://youtube.com/results?search_query=" + searchTerms, "_blank");			
            return true;	
        case 'a:':
            for(var i = 1; i < search.length; i++)
            {
                searchTerms += search[i]+'+';
            }
			window.open("https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + searchTerms, "_blank");
            return true;	
        default :
            for(var i = 0; i < search.length; i++)
            {
                searchTerms += search[i]+'+';
            };
		    window.open("https://google.com/search?q=" + searchTerms,  "_blank");			
            return true;
    }
};




