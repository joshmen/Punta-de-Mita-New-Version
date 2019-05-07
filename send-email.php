<?php

require 'vendor/autoload.php';

$email = new \SendGrid\Mail\Mail(); 
$email->setFrom("xjoshmenx@gmail.com", "Example User");
$email->setSubject("prueba de envio con send grid");
$email->addTo("xjoshmenx@gmail.com", "HOLA!");
$email->addContent("text/plain", "and easy to do anywhere, even with PHP");
$email->addContent(
    "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
);
$sendgrid = new \SendGrid(getenv('api-key-email'));
try {
    $response = $sendgrid->send($email);
    if($response==202){
        echo 'good job';
    }
    else{
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
    }
} catch (Exception $e) {
    echo 'Caught exception: '. $e->getMessage() ."\n";
}
?>

