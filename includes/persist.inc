<?php

function add_item_to_xml($title, $description, $url){

  /* write the rss.xml file */

  // Get SimpleXMLElement object from an XML document
  $rss_xml = simplexml_load_file("rss.xml");

  // Add the child
  $item = $rss_xml->channel->addChild('item');

  $item->addChild('title',  $title);
  $item->addChild('description', $description);
  $item->addChild('url', $url);


  // Convert the SimpleXMLElement to DOMDocument to format the output
  $dom = new DOMDocument;
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->loadXML($rss_xml->asXML());

  // write to the file
  file_put_contents("rss.xml", $dom->saveXML());
}

?>
