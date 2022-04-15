<?php 
    session_start();
?>

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>GreenTopia Grocery Store</title>

    <link rel="stylesheet" href="../CSS/P10(real).css">
    <link rel="stylesheet" href="../CSS/Page1.css" />
    <link rel="stylesheet" href="../CSS/Page11.css" />

    <script type="text/javascript" src="../JavaScript/AddUser.js"></script>

</head>

<!-- Header -->
    <header>
     <input type="checkbox" id="menu" />
    <label for="menu"><i class="material-icons">menu</i></label>

     <nav class="navbar">
      <ul>
        <li><a href="../PHP/ProductList_P7.php">Product List</a></li>
        <li><a href="../PHP/UserList_P9.php">User List</a></li>
        <li><a href="../PHP/OrderList_P11.php">Order List</a></li>
        <li><a href="../index.php">Logout</a></li>
      </ul>
    </nav>
  </header>
    <br><br><br><br><br><br><br>
<h1>Add New User</h1><br>

    <?php
            $userSelected=$_REQUEST["index"];
            echo "<form name='editForm' id='formOrderEdit' class='orderFrom' action='AddUser.php' method='POST'>";
            $file=fopen("../Data/Users.txt", "r");
            $lineNumber=1;
            while(!feof($file)) {
                $line=fgets($file); 
                $lineArray=explode(" ",$line);
            }
            $firstName=$lineArray[0];
            $lastName=$lineArray[1];
            $password=$lineArray[2];
            $emailAddress=$lineArray[3];
            $postalCode=$lineArray[4];
            fclose($file);
    ?>

<body>
    <?php $userSelected=$_REQUEST["index"];
        echo" <form id=\"myform\" action=\"AddUser.php?index=$userSelected\" method=\"post\">"?> <br/>   
        <p id="newFirstName"></p>
        <p id="newLastName"></p>
        <p id="newPassword"></p>
        <p id="newEmail"></p>
        <p id="newPostalCode"></p>

    <ul class="col">
        <section class="column-center">
            <li>
                <div class="column1">
                    <!-- First Name Property -->
                    <label for="fname">First Name: </label><br>
                    <input type="text" id="fname" name="firstName" value="<?php echo $firstName?>" class="form-control"> <br> <br>

                    <!-- Last Name Property -->
                    <label for="lname">Last Name </label> <br>
                    <input type="text" id="lname" name="lastName" value="<?php echo $lastName?>" class="form-control"> <br> <br>

                    <!-- Password Property -->
                    <label for="pwd">Password: </label> <br>
                    <input type="password" id="pwd" name="password" minlength="8" required value="<?php echo $password?>" class="form-control"> <br> <br>
                </div>
            </li>

            <li>
                <div class="column2">
                    <!-- Email Property -->
                    <label for="email">Email: </label><br>
                    <input type="text" id="email" name="emailAddress" value="<?php echo $emailAddress?>" class="form-control"> <br> <br>

                    <!-- Postal Code Property -->
                    <label for="postalcode">Postal Code: </label> <br>
                    <input type="text" id="pcode" name="postalCode" value="<?php echo $postalCode?>" class="form-control"> <br> <br>

                    <!-- Save Button-->
                    <button class="button" onclick="CreatedSuccessfully(), addUser()">Create</button>

                </div>
            </li>
        </section>
    </ul>
    <script>
        function CreatedSuccessfully() {
            var success = window.confirm("Your profile has been created!");
        }

    </script>

</body>


</html>
