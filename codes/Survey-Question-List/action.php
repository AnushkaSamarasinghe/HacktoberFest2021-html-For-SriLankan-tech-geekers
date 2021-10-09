<?php
    $host = "localhost";
	$dbUsername = "root";
	$dbPassword = "";
	$dbName = "ttt_the-new-client-intake-survey-question-list";

	$conn = mysqli_connect($host, $dbUsername, $dbPassword, $dbName);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
     }
       echo "Connected successfully";

	if (isset($_POST['FirstName'])) {

        $Firstname = $_POST['FirstName'];
		$Lastname = $_POST['LastName'];
        $Email = $_POST['Email'];
		$Client_contact = $_POST['Contact'];
		$Business_name = $_POST['BusinessName'];
		$Business_contact = $_POST['BusinessContact'];
		$HFAddress = $_POST['HFAddress'];
		$PAddress = $_POST['PAddress'];
		$Business_hours = $_POST['BusinessHours'];
        $IT_contact = $_POST['ITContact'];
        $Primary_fname = $_POST['PrimaryFname'];
        $Primary_lname = $_POST['PrimaryLname'];
        $Primary_email = $_POST['PrimaryEmail'];
        $Primary_contact = $_POST['PrimaryContact'];
        $Other_people = $_POST['OtherPeople'];
        $Acoounts_fname = $_POST['AcoountsFirstName'];
        $Acoounts_lname = $_POST['AcoountsLastName'];
        $Acoounts_contact = $_POST['AcoountsContact'];
        $Acoounts_email = $_POST['AcoountsEmail'];
        $Frustrating_things_tech = $_POST['Tech'];
        $IT_service_provider = $_POST['ITServiceprovider'];
        $Frustrating_things = $_POST['Frustrated'];
        $Exceptional_service = $_POST['Exceptional'];
        $Agreement = $_POST['Agreement'];

        $sql1 = "INSERT INTO client_details (Firstname,	Lastname, Email, Client_phone_no, Official_business_name, Company_phone_no,	Company_physical_address, Company_postal_address, Opening_hours, Primary_IT_contact, Primary_IT_conatct_fname, Primary_IT_contact_lname, Primary_IT_contact_email, Primary_IT_contact_phone_no,	Other_people, Acc_payable_fname, Acc_payable_lname,	Acc_payable_phone_no, Acc_payable_email, Frustrating_things_tech, IT_service_provider, Frustrating_things, Exceptional_service,	Agreement) 
        VALUES ('$FirstName', '$LastName', '$Email', '$Client_contact', '$Business_name', '$Business_contact', '$HFAddress', '$PAddress', '$Business_hours', '$IT_contact', '$Primary_fname', '$Primary_lname', '$Primary_email', '$Primary_contact', '$Other_people', '$Acoounts_fname', '$Acoounts_lname', '$Acoounts_contact', '$Acoounts_email', '$Frustrating_things_tech', 
        '$IT_service_provider', '$Frustrating_things', '$Exceptional_service', '$Agreement');";

		//$result1 = mysqli_query($conn,$sql1);

        if ($conn->query($sql1) === TRUE) {
            echo "New record created successfully";
          } else {
            echo "Error: " . $sql1 . "<br>" . $conn->error;
          }
          
          $conn->close();
    }
?>