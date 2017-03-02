	 var searchHelp = {
     "?": function(search) {
		 return alert("\n##  ?    ##    HELP\n\n##  a:    ##    AMAZON\n\n##  f:    ##    FACEBOOK\n\n##  r:    ##    REDDIT\n\n##  t:    ##    TWITTER\n\n##  tw:  ##    TWITCH\n\n##  y:    ##    YOUTUBE\n");
    }, 
} 
  
  function interpretSearch() {
    var search = document.getElementById("js-search-input").value.split(" ");
    console.log(search[0]);
    var providerName = search[0];
	var searchText = search.join(" ");
	
    if (search[0].endsWith("?") &&  searchHelp[providerName]) {
        search.shift();
        window.open(searchHelp[providerName](searchText), "_self");
    }
};
