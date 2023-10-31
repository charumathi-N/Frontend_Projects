url = "https://api.postalpincode.in/pincode";
async function getData() {
    try {
        const PostalNum = document.getElementById("num").value;
        //Check if the postal number is valid
        if (PostalNum === "") {
            alert("Please select a postal number");
        } else if (parseInt(PostalNum.length) !== 6) {
            alert("Please enter valid 6 digit postal code");
        }
        //Get the Postal details if it is valid
        else {
            let response = await fetch(`${url}/${PostalNum}`);
            let data = await response.json();
            // console.log(data);
            // console.log(data[0].PostOffice[0].Name);

            if (data[0].PostOffice[0] === null) {
                alert('Please provide a valid Pincode');
            } else {
                //clear the  input field before displaying the results
                document.getElementById('state').value = data[0].PostOffice[0].State;
                document.getElementById('district').value = data[0].PostOffice[0].District;
                document.getElementById('area').value = data[0].PostOffice[0].Block;
            }
        }
    } catch (err) {
        console.log(err);
    }
}