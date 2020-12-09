<?php

define('ERROR','404');

class ConnectionInfo 
{   
public $conn; 
public function GetConnection() {
  $this->conn = mysqli_connect("localhost", "root","", "ddb105924") or die(mysqli_error($mysql_pekare));

 }
}

$connectionInfo = new ConnectionInfo();
$connectionInfo->GetConnection();

if (!$connectionInfo->conn)
{
echo 'No Connection';
}

else
{
    $SenderID = $_GET['SenderID'];
    //$RecieverID = $_GET['RecieverID'];

    $contra = sha1($SenderID);

    //$query = "(SELECT * FROM ColumnText WHERE SenderID = '$SenderID') UNION (SELECT * FROM ColumnText WHERE RecieverID = '$RecieverID')";
    $query = "(SELECT * FROM usuarios_login WHERE contrasena = '$contra')";

    $stmt = mysqli_query($connectionInfo->conn, $query);
    $row_cnt = mysqli_num_rows($stmt);


    if (!$stmt){
        echo 'Query failed';
    }
    else
    {
        //comprobar si la las lineas que devuelve la query es >1
        $contacts = array(); 
        while ($row = mysqli_fetch_array($stmt)) {
            $contact = array("User" => $row);
            array_push($contacts, $contact);         
        }

        if ($row_cnt == 1){
            //echo json_encode(array('results' => $contacts), JSON_PRETTY_PRINT);
            //$returndata = 0;
            $returndata = ["auth" => "1"];
            //echo $returndata;
            echo json_encode($returndata, JSON_PRETTY_PRINT);
        } else {
            //$returndata = ["auth" => "0"];
            //echo $returndata;
            //echo json_encode($returndata, JSON_PRETTY_PRINT);
            $returndata = ERROR;
        }
        
    }

}

?>