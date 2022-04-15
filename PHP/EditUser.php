<?php
$userSelected=$_REQUEST["index"];
    $user="";
    $user=$_POST["firstName"]." ";
    $user.=$_POST["lastName"]." ";
    $user.=$_POST["password"]." ";
    $user.=$_POST["emailAddress"]." ";
    $user.=$_POST["postalCode"]."\n";
    editUser($userSelected-1."--".$user);
    header("Location:EditUser_P10.php");
    exit;

    function editUser($user){
        $myfile=fopen("../Data/Users.txt","r");
        $userArray=explode("--",$user,2) ;
        $userIndex=$userArray[0];
        $userData=$userArray[1];
        $lines=array();
        $found=false;
        $index=0;
        while(!feof($file)) {
            $line=fgets($file);  
            if ($index==$userIndex){
                array_push($lines,$userData); 
                $found=true; 
            }
            else {
                if (strlen($line) > 5){
                    array_push($lines,$line); 
                }
            }
            if (strlen($line) > 5){
                $index++;
            }
        }
        if (!$found){
            array_push($lines,$userData); 
        }
        fclose($file);
        writeArray($lines);
        }
  
    function writeArray($linesToKeep) {
        $file=fopen("../Data/Users.txt","w");
        foreach($linesToKeep as $value){
            fwrite($file,$value);
        }
        fclose($file);
    }
?>
