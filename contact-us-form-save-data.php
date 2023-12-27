<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
	header('Access-Control-Allow-Headers: token, Content-Type');
	header('Access-Control-Max-Age: 1728000');
	header('Content-Length: 0');
	header('Content-Type: text/plain');
	die();
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$servername = "localhost";
$username = "madpopo_shop";
$password = "MF};qaJ(r4mSq#ye]k{";
$dbname = "madpopo_shop";

try {
	$resp =json_decode(file_get_contents("php://input"),true);
	// echo "<pre>";print_r($resp);die;
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	  // set the PDO error mode to exception
	  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      
	  // prepare sql and bind parameters
	  $stmt = $conn->prepare("INSERT INTO contact_us (user_name, user_email, subject, message)
	  VALUES (:user_name, :user_email, :subject, :message)");
	  $stmt->bindParam(':user_name', $resp['name']);
	  $stmt->bindParam(':user_email', $resp['email']);
	  $stmt->bindParam(':subject', $resp['subject']);
		$stmt->bindParam(':message', $resp['message']);

		$stmt->execute();
		// mailer
		require 'mail/src/Exception.php';
		require 'mail/src/PHPMailer.php';
		require 'mail/src/SMTP.php';

		$mail = new PHPMailer;
		$mail->isSMTP(); 
		$mail->SMTPDebug = 0; 
		$mail->Host = "email-smtp.ap-south-1.amazonaws.com"; 
		$mail->Port = "587"; // typically 587 
		$mail->SMTPSecure = 'tls'; // ssl is depracated
		$mail->SMTPAuth = true;
		$mail->Username = "AKIATNXDZSS6CXDJLVGM";
		$mail->Password = "BPfwtqRNMefKRpHWWhE/WObuerbaEtirvETaSJXF9WHi";
		$mail->setFrom("sales@madpopo.com", "Madpopo");
		$mail->addAddress("sales@madpopo.com");
		$mail->Subject = $resp['subject'];
		$mail->msgHTML('<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0"><table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);sans-serif;"><tr><td><table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td style="height:80px;">&nbsp;</td></tr><tr><td style="height:20px;">&nbsp;</td></tr><tr><td><table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
		style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);"><tr><td style="height:40px;">&nbsp;</td></tr><tr><td style="padding:0 35px;">
				<h2 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;,sans-serif;">Howdy Team,<br/><br>Find below filled inquiry from Madpopo</h2><br/><h4 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;,sans-serif;">Subject: ' . ucfirst($resp["subject"]) . '<br />Message:' . ucfirst($resp["message"]) . '</h4><b>Team Madpopo</b></td></tr><tr><td style="height:40px;">&nbsp;</td></tr></table></td><tr><td style="height:20px;">&nbsp;</td></tr><tr><td style="text-align:center;"><p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>madpopo.com</strong></p></td></tr><tr><td style="height:80px;">&nbsp;</td></tr></table></td></tr></table></body>');

				$mail1 = new PHPMailer;
				$mail1->isSMTP(); 
				$mail1->SMTPDebug = 0; 
				$mail1->Host = "email-smtp.ap-south-1.amazonaws.com"; 
				$mail1->Port = "587"; // typically 587 
				$mail1->SMTPSecure = 'tls'; // ssl is depracated
				$mail1->SMTPAuth = true;
				$mail1->Username = "AKIATNXDZSS6CXDJLVGM";
				$mail1->Password = "BPfwtqRNMefKRpHWWhE/WObuerbaEtirvETaSJXF9WHi";
				$mail1->setFrom("sales@madpopo.com", "Madpopo");
				$mail1->addAddress($resp['email']);
				$mail1->Subject = $resp['subject'];
				$mail1->msgHTML('<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0"><table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);sans-serif;"><tr><td><table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td style="height:80px;">&nbsp;</td></tr><tr><td style="height:20px;">&nbsp;</td></tr><tr><td><table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
				style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);"><tr><td style="height:40px;">&nbsp;</td></tr><tr><td style="padding:0 35px;">
						<h2 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;,sans-serif;">Howdy '. $resp['name'] . ',<br/><br>Thank You for Trusting Us</h2><br/></td></tr><tr><td style="height:40px;">&nbsp;</td></tr></table></td><tr><td style="height:20px;">&nbsp;</td></tr><tr><td style="text-align:center;"><p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>madpopo.com</strong></p></td></tr><tr><td style="height:80px;">&nbsp;</td></tr></table></td></tr></table></body>');
		
		if($mail->send() && $mail1->send())
		$response=array('message' => 'Form submitted successfully','type'=>'success');

		else{
			$response=array('message' => 'Something went wrong','type'=>'failed');
		}

		echo json_encode($response,true);
}
	catch(PDOException $e) {
	$response=array('message' => $e->getMessage(),'type'=>'failed');
		echo json_encode($response,true);
}

$conn = null;