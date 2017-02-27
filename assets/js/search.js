var searchProviders = {
    "t": function(search) {
        return "https://twitter.com/" + search;
    },
    
    "tw": function(search) {
        return "https://twitch.tv/" + search;
    },
    
    "r": function(search) {
        var multiReddit = search.split(" ").join("+");
        return "https://reddit.com/r/" + multiReddit;
    },
    
    "f": function(search) {
        return "https://www.facebook.com/search/top/?q=" + search;
    },
    
    "y": function(search) {
        return "https://youtube.com/results?search_query=" + search;
    },
    
    "a": function(search) {
        return "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + search;
    }
};

function interpretSearch() {
    var search = document.getElementById("js-search-input").value.split(" ");
    console.log(search[0]);
    
    var providerName = search[0].replace(/:/g, "");
    if (search[0].endsWith(":") &&  searchProviders[providerName]) {
        search.shift();
        var searchText = search.join(" ");
        window.open(searchProviders[providerName](searchText), "_blank");
    }else {
        var searchText = search.join(" ");
        window.open("https://google.com/search?q=" + searchText,  "_blank");
    }
    return true;
};