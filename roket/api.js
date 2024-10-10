document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var phoneNumber = document.getElementById('phoneNumber').value;
    var apiUrl = https://unknownx.top/rocket_pdf.php?phone=${phoneNumber};

    // AJAX request using Fetch API to get the transaction data
    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            // Display the transaction result
            document.getElementById('transactionResult').innerHTML = 
                <h3>Transaction Details for ${phoneNumber}:</h3>
                <iframe src="${apiUrl}" width="100%" height="600px"></iframe>
            ;
        })
        .catch(error => {
            document.getElementById('transactionResult').innerHTML = 
                <p style="color: red;">Error fetching transaction data. Please try again later.</p>
            ;
        });
});