
fetch('./InsuranceData.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(file => {
            console.log(`Welcome ${file.fName} ${file.lName} Insurance Policy Number ${file.policyNumber}.`)            
        });
    })

    .catch(error => {
        console.error(error);
    });
