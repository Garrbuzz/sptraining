<?php
include 'functions.php';
// $login = $_POST['name'];
// $pass =  $_POST['pass'];
$login = 'test';
$pdo = setConnect();
$sql = $pdo->prepare("SELECT * FROM users WHERE login=:login");
$sql->bindValue(':login',$login);
$sql->execute();
$res = $sql->fetch(PDO::FETCH_ASSOC);


// echo $row['id'];

$error_array = $pdo->errorInfo();

	if($pdo->errorCode() != 0000){
 
		echo "SQL ошибка: " . $error_array[2] . '<br />';
	}	


echo $res['id'];
 

// $res=json_encode($sql['login']);
// echo $res;
?>