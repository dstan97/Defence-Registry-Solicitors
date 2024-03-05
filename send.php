<?php
// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require __DIR__ . '/vendor/autoload.php';
use Twilio\Rest\Client;

$sid    = "ACd7dc57bfafb796e96089edafbd020f92";
$token  = "565b0eed02f8ce4d887fc2fc5d21f054";
$twilio = new Client($sid, $token);

if(isset($_POST['submit'])){
$message = $twilio->messages
    ->create("+447728529756", // to
    array(
        "from" => "+447700137761",
        "body" => 
        "Case: " . $_POST['sms_ref'] . 
        "\nAccepted by: " . $_POST['deploy_sol_details'] . 
        "\nPolice Station: " . $_POST['sms_station'] . 
        "\nClient Name: " . $_POST['sms_name'] . 
        "\nOffence(s): " . $_POST['sms_offence'] . 
        "\nArrival Time: " . $_POST['sms_arrival'] . 
        "\nCustody No.: " . $_POST['sms_custody']
    )
    );
}

//9CKUXCE4R7A7EQ934LXDCPNS
//+447700137761