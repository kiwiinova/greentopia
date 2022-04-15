<?php 
    session_start();
?>

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>GreenTopia Grocery Store</title>

    <link rel="stylesheet" href="../CSS/P10(real).css">
    <link rel="stylesheet" href="../CSS/Page1.css">
    <link rel="stylesheet" href="../CSS/Page11.css">
    <script type="text/javascript" src="../JavaScript/EditUser.js"></script>

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
<h1>Edit User Profile</h1><br>

<body>
    <ul class="col">
        <section class="column-center">
            <li>
                <div class="column1">
                    <!-- First Name Property -->
                    <label for="fname">First Name: </label><br>
                    <input type="text" id="fname" name="firstName"> <br> <br>

                    <!-- Last Name Property -->
                    <label for="lname">Last Name: </label> <br>
                    <input type="text" id="lname" name="lastName"> <br> <br>

                    <!-- Password Property -->
                    <label for="pwd">Password: </label> <br>
                    <input type="password" id="pwd" name="password" minlength="8" required> <br> <br>
                </div>
            </li>

            <li>
                <div class="column2">
                    <!-- Email Property -->
                    <label for="email">Email: </label><br>
                    <input type="text" id="email" name="emailAddress"> <br> <br>

                    <!-- Postal Code Property -->
                    <label for="postalcode">Postal Code: </label> <br>
                    <input type="text" id="pcode" name="postalCode"> <br> <br>

                    <!-- Save Button-->
                    <button class="button" onclick="SavedSuccessfully()">Save</button>

                </div>
            </li>
        </section>
    </ul>
    <script>
        function SavedSuccessfully() {
            var success = window.confirm("Your profile has been updated!");
        }

    </script>

</body>


</html>
