document.addEventListener("keydown", function(e) {
    if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
      e.preventDefault();
      // Process the event here (such as click on submit button)
    }
  }, false);
