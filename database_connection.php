<?php
/*Define constant to connect to database */
DEFINE('DATABASE_USER', 'root');
DEFINE('DATABASE_PASSWORD', 'mondeo');
DEFINE('DATABASE_HOST', 'localhost');
DEFINE('DATABASE_NAME', 'myriadticker');

/* Default time zone */
date_default_timezone_set('Europe/Amsterdam');

/*We might not need this */
//ini_set('SMTP', "mail.myt.mu");

//This is the address that will appear coming from ( Sender )
DEFINE('EMAIL', 'support@myriadticker.com');

/*Define the root url where the script will be found such as http://website.com or http://website.com/Folder/ */
DEFINE('WEBSITE_URL', 'myriadticker.com');

// Make the connection:
$dbc = @mysqli_connect(DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME);

if (!$dbc) {
	trigger_error('Could not connect to MySQL: ' . mysqli_connect_error());
}
?>