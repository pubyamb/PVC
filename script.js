document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('taxForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the traditional form submission

        var profit = parseFloat(document.getElementById('profit').value) || 0;
        var profit2 = parseFloat(document.getElementById('profit2').value) || 0;
        var totalProfit = profit + profit2;
        var taxThreshold = 1867728; // Fixed threshold for the year 2022
        var tax;

        if (totalProfit <= taxThreshold) {
            tax = totalProfit * 0.15; // Tax rate of 15% for profit within the threshold
        } else {
            tax = totalProfit * 0.23; // Tax rate of 23% for profit above the threshold
        }

        // Display the result
        document.getElementById('result').innerText = 'Tax to be paid: ' + tax.toFixed(2) + ' CZK';
    });
});

// Current language variable
var lang = 'en';

// Language switching functionality
function switchLanguage(selectedLang) {
    lang = selectedLang;
    var elements = document.querySelectorAll('[data-translate]');
    elements.forEach(function(el) {
        var key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key] || el.textContent;
    });
}

var translations = {
    'en': {
        'title': 'Crypto Tax Calculator for Natural Persons',
        'netProfitLabel': 'Profit from Crypto (CZK):',
        'netProfitLabel2': 'Income from Other Sources (CZK):',
        'calculateButton': 'Calculate',
        'taxToBePaid': 'Tax to be paid: ',
        'helpLink': 'Tax Rules',
    },
    'cz': {
        'title': 'Kalkulačka Daně z Kryptoměn pro Fyzické Osoby',
        'netProfitLabel': 'Zisk z Kryptoměn (CZK):',
        'netProfitLabel2': 'Příjem z Ostatních Zdrojů (CZK):',
        'calculateButton': 'Vypočítat',
        'taxToBePaid': 'Daň k úhradě: ',
        'helpLink': 'Pravidla pro Zdanění',
    }
};

// Initialize the page with English translations
switchLanguage('en');
