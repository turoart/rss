<html>
  <head>
  </head>
  <body>
    <?php

      $url = '';
      $title = '';
      $description = '';

      if(! empty($_POST['url'])){
        $url = $_POST['url']; 
      }else{
        echo "Sin URL no... malo malo.";
        return;
      }

      if(! empty($_POST['title'])){
        $title = $_POST['title']; 
      }else{
        $title = $url;
      }

      if(! empty($_POST['code'])){
        $code = md5($_POST['code']);

        if($code === "f35fae1880c00489154518d6e66dea08"){
          $description = "Este tiro esta pargueando asanabria";

        }elseif($code === "bb53412d2bcfb93ae250e4ac4f594290"){
          $description = "Este tiro esta pargueando avargas";

        }elseif($code === "3d93d4ebc64340021de23d33a81015fa"){
          $description = "Este tiro esta pargueando gsulca";
        }else{
          echo "Ese c&oacute;digo no... malo malo.";
          return;
        }
      } else{
        echo "Ese c&oacute;digo no... malo malo.";
        return;
      }


      if(! empty($_POST['description'])){
        $description = $description . '-> {'.$_POST['description'].'}'; 
      }

        /* write the rss.xml file */
        // Get SimpleXMLElement object from an XML document
        $rss_xml = simplexml_load_file("rss.xml");

        $item = $rss_xml->channel->addChild('item');

        $item->addChild('title',  $title);
        $item->addChild('description', $description);
        $item->addChild('url', $url);

        file_put_contents('rss.xml', $rss_xml->asXML());

        echo "Listo... <br /><h1>&iexcl;Cuidado con los dragones&#33;</h1>";
    ?>

    <br />

    <form action="index.php">
      <input type="submit" id="submit" value="volver"/>
    </form>
  </body>
</html



