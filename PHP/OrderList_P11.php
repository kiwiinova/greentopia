<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lists of Orders</title>
    <link rel="stylesheet" href="../CSS/Page1.css" />
    <link rel="stylesheet" href="../CSS/Page11.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
   <body>
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
 
    <br /><br />
    <div class="container">
      <table border="border" class="table" >
        <caption>
          <br /><br /><br /><br /><br />
          Order #1
        </caption>
        <tr>
          <th>Products</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td align="center">1. Apple</td>
          <td align="center" rowspan="3">
            <a href="EditOrder_P12.php" class="btn1"
              ><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a
            >
          </td>
          <td align="center" rowspan="3">
            <a href="#" class="btn2"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></a>
          </td>
        </tr>

        <td align="center">2. Banana</td>

        <tr>
          <td align="center">3. Fish Bass</td>
        </tr>
      </table>
     
      <br />
      <br />
      <br />

      <table border="border" class="table">
        <caption>
          Order #2
        </caption>
        <tr>
          <th>Products</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td align="center">1. Cucumbers</td>
          <td align="center" rowspan="3">
            <a href="EditOrder_P12.php" class="btn1"
              ><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a
            >
          </td>
          <td align="center" rowspan="3">
            <a href="#" class="btn2"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></a>
          </td>
        </tr>

        <td align="center">2. Lettuce</td>

        <tr>
          <td align="center">3. Chicken</td>
        </tr>
      </table>
      <br />
      
      <br /><br />

      <table border="border" class="table">
        <caption>
          Order #3
        </caption>
        <tr>
          <th>Products</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td align="center">1. White Bread</td>
          <td align="center" rowspan="3">
            <a href="EditOrder_P12.php" class="btn1"
              ><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a
            >
          </td>
          <td align="center" rowspan="3">
            <a href="#" class="btn2"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></a>
          </td>
        </tr>
        </tr>

        <td align="center">2. Spaghetti</td>
        
        <tr>
          <td align="center">3. Milk</td>
          
        </tr>
      </table>
      
      <br /><br /><br /><br /><br />
    </div>

    <p align="center">
      <a href="#" class="btn4">Add an order</a>
    </p>
    <br /><br /><br /><br /><br /><br />
  </body>
</html>

