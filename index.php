<?php

if (isset($_POST['ma_variable'])) {
    $valeur_variable = $_POST['ma_variable'];

    switch ($valeur_variable) {
        case 'valeur1':
            echo "La variable a la valeur 'valeur1'.";
            break;

        case 'valeur2':
            echo "La variable a la valeur 'valeur2'.";
            break;

        default:
            echo "La variable a une valeur différente de 'valeur1' et 'valeur2'.";
            break;
    }
} else {
    require 'Vue/Acceuil.html';
}

?>
