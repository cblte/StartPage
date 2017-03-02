  function $(s) {
    return document.querySelector(s);
  };

  var Form = (function() {
    var searchForm = $('#js-search-form');
    var searchInput = $('#js-search-input');

    var execute = function(query, redirect) {
      searchInput.value = '';

      if (config.newTab) window.open(redirect, '_blank');
      else window.location.href = redirect;
    }

    var keyPress = function(event) {
      var char = String.fromCharCode(event.which);

      if (config.instantRedirect) {
        config.categories.forEach(function(category) {
          category.commands.forEach(function(command) {
            var query = searchInput.value + char;

            if (command.key === query) {
              event.preventDefault();
              execute(query, command.url);
            }
          });
        });
      }
    };

    var submit = function(event) {
      if (event) event.preventDefault();

      var q = searchInput.value.trim();

      var qSplitSearch = q.split(config.searchDelimiter);
      var qSplitPath = q.split(config.pathDelimiter);
      var qIsUrl = q.match(config.urlRegex);   
      var qHasProtocol = q.match(config.protocolRegex);
      var redirect = '';
      var breakLoop = false;

      if (qIsUrl) redirect = qHasProtocol ? q : 'http://' + q;
      else redirect = config.defaultSearch + encodeURIComponent(q);

      config.categories.forEach(function(category) {
        category.commands.forEach(function(command) {
          var isSearch = qSplitSearch[0] === command.key;
          var isPath = qSplitPath[0] === command.key;

          if (isSearch || isPath) {
            if (qSplitSearch[1] && command.search) {
              qSplitSearch.shift();

              var search = encodeURIComponent(
                qSplitSearch.join(config.searchDelimiter).trim()
              );

              redirect = command.url + command.search + search;
            } else if (qSplitPath[1]) {
              qSplitPath.shift();
              var path = qSplitPath.join(config.pathDelimiter).trim();
              redirect = command.url + '/' + path;
            } else {
              redirect = command.url;
            }

            breakLoop = true;
            return;
          }
        });

        if (breakLoop) return;
      });

      execute(q, redirect);
    }

    document.addEventListener('keypress', keyPress);
    searchForm.addEventListener('submit', submit, false);

    return {
      submitWithThis: function() {
        searchInput.value = this.value;
        submit();
      }
    };
	
  })();