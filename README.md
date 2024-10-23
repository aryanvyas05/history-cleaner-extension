# **Browsing History Cleaner**
Browsing History Cleaner is a simple Chrome extension that allows users to clear browsing history for a specific website by entering the URL.
This project demonstrates how to work with the Chrome History API and provides an easy-to-use interface for managing your browser history.
## **Features**
* Enter a website URL and clear its browsing history.
* Automatically adds http:// to the URL if it is not already present.
* Clean and responsive UI.
* Visual feedback to users when history is cleared.
* Uses Chrome History API to manage browsing data.
## **How To Install**
* Clone the repository or download the ZIP.
* Open Chrome and go to chrome [extension](chrome://extensions/).
* Enable Developer mode in the top right corner.
* Click on Load unpacked and select the folder containing your extension files.
* The extension will now appear in the Chrome toolbar.
## **Usage**
1. Click on the extension icon in the Chrome toolbar.
2. Enter the URL of the website whose browsing history you want to clear (e.g., example.com).
3. Click the Clear History button.
4. A message will indicate if the history was successfully cleared or if no history was found for the entered website.
## **Project Structure**
* **popup.html:** The main HTML file for the extension’s popup interface.
* **popup.js:** Handles the logic for searching and deleting browsing history.
* **styles.css:** The CSS file for styling the popup UI.
* **manifest.json:** The configuration file for the Chrome extension.
## **Chrome API Usage**
This extension uses the following Chrome APIs:

* chrome.history.search(): To search for browsing history based on the entered URL.
* chrome.history.deleteUrl(): To remove the specific URLs from the browsing history.
## **Future Enhancements**
* Time-based history deletion: Add options to clear history from specific time periods (e.g., last hour, last 24 hours, last 7 days).
* Multi-URL support: Allow users to input multiple websites at once for batch history clearing.
* Scheduled history cleanup: Implement an option to schedule automatic history cleaning for specific websites at regular intervals (e.g., daily, weekly).
* Bookmark integration: Give users the option to bookmark URLs before they are deleted, so important links are not lost.
* Partial URL matching: Allow partial matches or wildcard support for URL deletion (e.g., delete history for all subdomains of example.com).
