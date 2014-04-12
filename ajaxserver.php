<!DOCTYPE html>
<html>
<head>
        <title>Корпоративный блог</title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="description" content="Учебный корпоративный блог">
        <meta name="keywords" content="блог, ИТМО, технологии программирования">
        <link rel="stylesheet" href="css/style.css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
        <script src="http://jashkenas.github.com/coffee-script/extras/coffee-script.js"></script>
        <script type="text/coffeescript" src="scripts/userscript.coffee"></script>
    </head>
    <body>
<?php
   $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "http://vesna.yandex.ru/pushkin/?write=onegin");
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    $out = curl_exec($curl);
    echo "<div>". $out. "</div>";
    curl_close($curl);
    echo 7623478562354;
?>
</body>
</html>