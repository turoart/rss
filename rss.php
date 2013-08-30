<html>
  <head>
    <title>Rss poster</title>
  </head>
<body>
  <?php
  // If the form has been submitted, then display the information...
  if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    echo '<p>Your name is ' . $name . '</p>';
  }
  // Otherwise, display the form...
  else {
    echo '<form method="post" action="'.$_SERVER['PHP_SELF'].'">';
    echo '  <label for="name">Your Name...</label>';
    echo '  <input type="text" id="name"/>';
    echo '  <input type="submit" id="submit" value="Submit"/>';
    echo '</form>';
  } // end IF statement
  ?>
</body>
</html> 
