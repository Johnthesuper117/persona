<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Google Drive</title>
  <link href="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png" rel="icon">
  <style>
    :root {
      --bg-color: #f9f9f9;
      --container-bg: #ffffff;
      --text-color: #333333;
      --input-bg: #ffffff;
      --input-border: #cccccc;
      --note-color: #666666;
      --hr-color: #eeeeee;
    }

    body.dark-mode {
      --bg-color: #121212;
      --container-bg: #1e1e1e;
      --text-color: #e0e0e0;
      --input-bg: #2d2d2d;
      --input-border: #444444;
      --note-color: #aaaaaa;
      --hr-color: #333333;
    }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 2rem;
      max-width: 450px;
      margin: 0 auto;
      text-align: left;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    .container {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      background: var(--container-bg);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: background-color 0.3s ease;
      position: relative;
    }
    .theme-toggle {
      position: absolute;
      top: 1rem;
      right: 1.5rem;
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      color: var(--text-color);
      padding: 0.2rem;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    input[type="text"], select {
      padding: 0.6rem;
      font-size: 1rem;
      border: 1px solid var(--input-border);
      border-radius: 4px;
      background-color: var(--input-bg);
      color: var(--text-color);
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }
    input[type="text"]:focus, select:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
    }
    .options {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.95rem;
      color: var(--text-color);
      margin-top: 0.5rem;
    }
    .button-group {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin-top: 1rem;
    }
    button.action-btn {
      padding: 0.8rem;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.2s;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    .btn-primary:hover {
      background-color: #0056b3;
    }
    .btn-secondary {
      background-color: #e2e8f0;
      color: #333;
    }
    .btn-secondary:hover {
      background-color: #cbd5e1;
    }
    .note {
      font-size: 0.85rem;
      color: var(--note-color);
      text-align: center;
    }
    hr {
      border: 0;
      border-top: 1px solid var(--hr-color);
      margin: 0.5rem 0;
      width: 100%;
    }
  </style>
</head>
<body>
  <div class="container">
    <button type="button" class="theme-toggle" id="themeToggleBtn" onclick="toggleTheme()" title="Toggle Dark Mode" aria-label="Toggle dark mode">🌙</button>

    <div class="input-group" style="margin-top: 1rem;">
      <label for="urlInput"><strong>Website URL: *</strong></label>
      <input type="text" id="urlInput" placeholder="example.com">
    </div>

    <hr>

    <div class="input-group">
      <label for="presetSelect"><strong>Quick Disguise:</strong></label>
      <select id="presetSelect" onchange="applyPreset()">
        <option value="custom">-- Custom / None --</option>
        <option value="drive">Google Drive</option>
        <option value="classroom">Google Classroom</option>
        <option value="docs">Google Docs</option>
        <option value="wikipedia">Wikipedia</option>
      </select>
    </div>

    <div class="input-group">
      <label for="titleInput"><strong>Tab Title:</strong></label>
      <input type="text" id="titleInput" placeholder="e.g., Google Drive">
    </div>

    <div class="input-group">
      <label for="faviconInput"><strong>Favicon URL:</strong></label>
      <input type="text" id="faviconInput" placeholder="e.g., https://google.com/favicon.ico">
    </div>

    <div class="options">
      <input type="checkbox" id="allowPopupsCheckbox">
      <label for="allowPopupsCheckbox">Allow Pop-ups</label>
    </div>

    <div class="button-group">
      <button class="action-btn btn-primary" onclick="openWebsite()">Launch in New Window</button>
      <button class="action-btn btn-secondary" id="saveBtn" onclick="saveSettings()">Save as Default</button>
    </div>

    <p class="note">Note: Sites like Google or GitHub actively block being embedded.</p>
  </div>

  <script>
    // --- Theme Toggle Logic ---
    function toggleTheme() {
      var body = document.body;
      var btn = document.getElementById("themeToggleBtn");

      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        btn.innerText = "☀️";
        localStorage.setItem("embedder_theme", "dark");
      } else {
        btn.innerText = "🌙";
        localStorage.setItem("embedder_theme", "light");
      }
    }

    // Load saved settings when the page opens
    window.addEventListener("load", function() {
      if (localStorage.getItem("embedder_theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeToggleBtn").innerText = "☀️";
      }

      if (localStorage.getItem("embedder_url")) {
        document.getElementById("urlInput").value = localStorage.getItem("embedder_url");
      }
      if (localStorage.getItem("embedder_title")) {
        document.getElementById("titleInput").value = localStorage.getItem("embedder_title");
      }
      if (localStorage.getItem("embedder_favicon")) {
        document.getElementById("faviconInput").value = localStorage.getItem("embedder_favicon");
      }
      if (localStorage.getItem("embedder_popups") === "true") {
        document.getElementById("allowPopupsCheckbox").checked = true;
      }
    });

    function saveSettings() {
      localStorage.setItem("embedder_url", document.getElementById("urlInput").value.trim());
      localStorage.setItem("embedder_title", document.getElementById("titleInput").value.trim());
      localStorage.setItem("embedder_favicon", document.getElementById("faviconInput").value.trim());
      localStorage.setItem("embedder_popups", document.getElementById("allowPopupsCheckbox").checked);

      var btn = document.getElementById("saveBtn");
      var originalText = btn.innerText;
      var originalBg = btn.style.backgroundColor;
      var originalColor = btn.style.color;

      btn.innerText = "Settings Saved!";
      btn.style.backgroundColor = "#16a34a";
      btn.style.color = "white";

      setTimeout(function() {
        btn.innerText = originalText;
        btn.style.backgroundColor = originalBg;
        btn.style.color = originalColor;
      }, 2000);
    }

    function applyPreset() {
      var preset = document.getElementById("presetSelect").value;
      var titleInput = document.getElementById("titleInput");
      var faviconInput = document.getElementById("faviconInput");

      if (preset === "drive") {
        titleInput.value = "Google Drive";
        faviconInput.value = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
      } else if (preset === "classroom") {
        titleInput.value = "Classes";
        faviconInput.value = "https://ssl.gstatic.com/classroom/favicon.png";
      } else if (preset === "docs") {
        titleInput.value = "Google Docs";
        faviconInput.value = "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
      } else if (preset === "wikipedia") {
        titleInput.value = "Wikipedia, the free encyclopedia";
        faviconInput.value = "https://en.wikipedia.org/static/favicon/wikipedia.ico";
      } else if (preset === "custom") {
        titleInput.value = "";
        faviconInput.value = "";
      }
    }

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
  </script>
</body>
</html>
