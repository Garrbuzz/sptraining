<?php
include 'functions.php';
$login = $_POST['name'];
$pass =  $_POST['pass'];

$pdo = setConnect();
$sql = $pdo->prepare('SELECT login FROM users WHERE login = ?');
$sql->execute('login' => $login);
$row = $sql->fetch_assoc();
$res=json_encode($row['login']);
echo $res;
?>