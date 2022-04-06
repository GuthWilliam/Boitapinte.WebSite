<?php

try {
    // Get the posted data.
    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata)) {

        // Extract the data.
        $data = json_decode($postdata);

        // Sanitize.
        $sender = $data->sender;
        $mail = $data->mail;
        $phoneNumber = $data->phone;
        $message = $data->message;
        // Test fonction mail();
        $to    = "contact@boitapinte.fr";
        // adresse MAIL OVH liée à l’hébergement.
        $from  = "contact@boitapinte.fr";
        ini_set("SMTP", "smtp.boitapinte.fr");

        $JOUR  = date("Y-m-d");
        $HEURE = date("H:i");
        $Subject = "Mail de contact - boitapinte.fr - $JOUR $HEURE";
        $Emetteur = " $sender - $mail - $phoneNumber";
        $mail_Data = "";
        $mail_Data .= "<html> \n";
        $mail_Data .= "<head> \n";
        $mail_Data .= "<title> Subject </title> \n";
        $mail_Data .= "</head> \n";
        $mail_Data .= "<body> \n";
        $mail_Data .= "<b>$Subject </b> <br> \n";
        $mail_Data .= "<br> \n <b>De :</b> $Emetteur";
        $mail_Data .= "<br> \n";
        $mail_Data .= "<br> \n $message";
        $mail_Data .= "<br> \n";
        $mail_Data .= "</body> \n";
        $mail_Data .= "</HTML> \n";

        $headers  = "MIME-Version: 1.0 \n";
        $headers .= "Content-type: text/html; charset=iso-8859-1 \n";
        $headers .= "From: $from  \n";

        $CR_Mail = TRUE;
        $CR_Mail = @mail($to, $Subject, $mail_Data, $headers);
        http_response_code(200);
        if ($CR_Mail === FALSE) {
            $errorMessage = "Erreur lors de l'envoie du mail ";
            $e=error_get_last();
            if(isset($e))
            {
                $errorMessage .= " : $e";
            }
            echo "$errorMessage";
        } else {
            echo "";
        }
    }
} catch (Exception $e) {
    http_response_code(200);
    echo 'Exception reçue : ',  $e->getMessage(), "\n";
}
