<?php

require 'vendor/autoload.php';

$email = new \SendGrid\Mail\Mail(); 
$email->setFrom("test@example.com", "Example User");
$email->setSubject("Sending with SendGrid is Fun");
$email->addTo("josuemendozasegovia@hotmail.com", "HOLA!");
$email->addContent("text/plain", "and easy to do anywhere, even with PHP");
$email->addContent(
    "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
);
$sendgrid = new \SendGrid(getenv('api-key-email'));
try {
    $response = $sendgrid->send($email);
    if($response==200){
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

