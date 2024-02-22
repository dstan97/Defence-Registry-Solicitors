<?php



if(isset($_POST['submit'])){
    $app = $_POST['app'];
    $interpreter = $_POST['interpreter'];
    if(empty($app)){
        $app = "no";
    }
    if(empty($interpreter)){
        $interpreter = "no";
    }
    $new_message = array(
        "station" => $_POST['station'],
        "pol_or_sol" => $_POST['pol_or_sol'],
        "caller_id" => $_POST['caller_id'],
        "station_number" => $_POST['station_number'],
        "duty_or_own" => $_POST['duty_or_own'],
        "scheme" => $_POST['scheme'],
        "firm" => $_POST['firm'],
        "sol_select" => $_POST['sol_select'],
        "sol_num" => $_POST['sol_num'],
        "forename" => $_POST['forename'],
        "surname" => $_POST['surname'],
        "gender" => $_POST['gender'],
        "adult" => $_POST['adult'],
        "app" => $app,
        "interpreter" => $interpreter,
        "app_arranged" => $_POST['app_arranged'],
        "int_required" => $_POST['int_required'],
        "cust_num" => $_POST['cust_num'],
        "arrival" => $_POST['arrival'],
        "offence" => $_POST['offence'],
        "comments" => $_POST['comments'],
        "ref_num" => $_POST['ref_num']
    );
  
    if(filesize("messages.json") == 0){
       $first_record = array($new_message);
       $data_to_save = $first_record;
    }else{
       $old_records = json_decode(file_get_contents("messages.json"));
       array_push($old_records, $new_message);
       $data_to_save = $old_records;
    }
  
    $encoded_data = json_encode($data_to_save, JSON_PRETTY_PRINT);
  
    if(!file_put_contents("messages.json", $encoded_data, LOCK_EX)){
       $error = "Error storing message, please try again";
    }else{
       $success =  "Message is stored successfully";
       
    }
    header('Location: post.php');
 }