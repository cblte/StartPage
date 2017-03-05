

  'use strict';

  var config = {
    categories: [
      { commands: [	
        { key: '?', name: 'Manual', url: 'assets/files/Commands.pdf' },
        { key: 'a', name: 'Amazon', url: 'https://www.amazon.co.uk/', search: '/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=' },	
        { key: 'd', name: 'Drive', url: 'https://drive.google.com/drive', search: '/search?q=' },				
        { key: 'f', name: 'Facebook', url: 'https://www.facebook.com', search: '/search/top/?q=' },
        { key: 'g', name: 'GitHub', url: 'https://github.com', search: '/search?q=' },	
        { key: 'i', name: 'Instagram', url: 'https://www.instagram.com' },		
        { key: 'm', name: 'MyAnimeList', url: 'https://myanimelist.net', search: '/search/all?q='},		
        { key: 'r', name: 'Reddit', url: 'https://www.reddit.com', search: '/search?q=' },		
        { key: 'tw', name: 'Twitch', url: 'https://twitch.tv/', search: '/directory/game/' },	
        { key: 't', name: 'Twitter', url: 'https://twitter.com', search: '/search?q=' },		
        { key: 'y', name: 'YouTube', url: 'https://www.youtube.com', search: '/results?search_query=' },		
        { key: 'w', name: 'Wikipedia', url: 'https://en.wikipedia.org', search: '/wiki/' },	
      ] },
    ],

    // if none of the keys are matched, this is used for searching.
    defaultSearch: 'https://google.com/search?q=',

    // the delimiter between the key and your search query.
    // e.g. to search GitHub for potatoes you'd type "g:potatoes".
    searchDelimiter: ':',  

    // the delimiter between the key and a path.
    // e.g. type "r/r/unixporn" to go to "reddit.com/r/unixporn".
    pathDelimiter: '/',
	
    // set to true to instantly redirect when a key is matched.
    // put a space before any search queries to prevent unwanted redirects.
    instantRedirect: false,

    // open queries in a new tab.
    newTab: true,

    // used for determining when to redirect directly to a url.
    urlRegex: /^(?:(http|https)?:\/\/)?(?:[\w-]+\.)+([a-z]|[A-Z]|[0-9]){2,6}/i,

    // if "urlRegex" matches but this doesn't, "http://" will be
    // prepended to the beginning of the query before redirecting.
    protocolRegex: /^[a-zA-Z]+:\/\//i
  };