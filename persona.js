var inputs = document.querySelectorAll('input[type="text"]');
inputs.forEach(function(input) {
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      openWebsite();
    }
  });
});

function openWebsite() {
  var url = document.getElementById("urlInput").value.trim();
  var customTitle = document.getElementById("titleInput").value.trim();
  var customFavicon = document.getElementById("faviconInput").value.trim();
  var allowPopups = document.getElementById("allowPopupsCheckbox").checked;

  if (!url) {
    alert("Please enter a Website URL first.");
    return;
  }

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
    document.getElementById("urlInput").value = url;
  }

  try {
    var parsedUrl = new URL(url);
    if (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:") {

      var win = window.open("", "_blank");

      if (!win) {
        alert("Pop-up was blocked. Please allow pop-ups for this page and try again.");
        return;
      }

      win.document.title = customTitle !== "" ? customTitle : parsedUrl.hostname;

      var link = win.document.createElement('link');
      link.rel = 'icon';
      link.href = customFavicon !== "" ? customFavicon : 'https://www.google.com/favicon.ico';
      win.document.head.appendChild(link);

      win.document.body.style.margin = "0";
      win.document.body.style.padding = "0";
      win.document.body.style.height = "100vh";
      win.document.body.style.overflow = "hidden";
      win.document.body.style.backgroundColor = "#222";
      win.document.body.style.display = "flex";
      win.document.body.style.justifyContent = "center";
      win.document.body.style.alignItems = "center";

      var loader = win.document.createElement('div');
      loader.innerHTML = '<style>'
        + '.spinner {'
        + '  width: 50px; height: 50px;'
        + '  border: 5px solid #f3f3f3;'
        + '  border-top: 5px solid #007bff;'
        + '  border-radius: 50%;'
        + '  animation: spin 1s linear infinite;'
        + '}'
        + '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }'
        + '.loading-text { color: white; font-family: sans-serif; margin-top: 15px; text-align: center; }'
        + '</style>'
        + '<div>'
        + '  <div class="spinner"></div>'
        + '  <div class="loading-text">Loading...</div>'
        + '</div>';
      win.document.body.appendChild(loader);

      var iframe = win.document.createElement('iframe');
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      iframe.style.display = "none";
      iframe.src = parsedUrl.href;
      iframe.setAttribute("allowfullscreen", "true");

      var sandboxRules = "allow-scripts allow-same-origin allow-forms allow-presentation";
      if (allowPopups) { sandboxRules += " allow-popups"; }
      iframe.setAttribute("sandbox", sandboxRules);

      iframe.onload = function() {
        loader.style.display = "none";
        iframe.style.display = "block";
      };

      win.document.body.appendChild(iframe);

      // Attach a beforeunload handler on the opened window so the browser
      // shows its native "Leave site? Changes you made may not be saved."
      // confirmation whenever the user tries to navigate away or close the tab.
      // Modern browsers always display their own generic message and ignore any
      // custom string; the non-empty returnValue is required only as a legacy
      // trigger for older browsers.
      win.addEventListener("beforeunload", function(e) {
        e.preventDefault();
        e.returnValue = " "; // legacy trigger — browser replaces this with its own text
      });

    } else {
      alert("Please enter a valid URL.");
    }
  } catch (e) {
    alert("Please enter a valid URL.");
  }
}
