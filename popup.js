document.getElementById("clearHistory").addEventListener("click", function() {
    const website = document.getElementById("website").value.trim();
    
    if (!website) {
        document.getElementById("message").innerText = "Please enter a website.";
        return;
    }

    const url = website.startsWith("http://") || website.startsWith("https://") ? website : "http://" + website;

    chrome.history.search({ text: url, maxResults: 1000 }, function(data) {
        if (data.length === 0) {
            document.getElementById("message").innerText = "No history found for " + website + ".";
            return;
        }

        const urlsToRemove = data.map(function(page) { return page.url; });

        if (urlsToRemove.length === 0) {
            document.getElementById("message").innerText = "No valid URLs found to delete.";
            return;
        }

        let deletionCount = 0;

        urlsToRemove.forEach(urlToDelete => {
            chrome.history.deleteUrl({ url: urlToDelete }, function() {
                deletionCount++;
                if (deletionCount === urlsToRemove.length) {
                    document.getElementById("message").innerText = "Browsing history for " + website + " cleared!";
                }
            });
        });
    });
});
