<?php require("send.php") ?>
<?php include 'head.php';?>
    <title>DRS - Case Deploying</title>
</head>
<body>
    <header class="site-header">
        <div class="header-left">
            <h1 class="header-title">DRS</h1>
            <p class="header-tag">Defence Registery Solicitors</p>
        </div>
        <nav class="nav-bar"></nav>
    </header>
    <div class="content">
        <form action="" method="post">
            <p id="case_type">

            </p>
            <div class="content-block">
                <p id="sol_details_clarify" class="content-deploy">Can I have your <strong>pin</strong> and <strong>last name</strong>, please?</p>
                <input type="text" name="deploy_sol_details" id="deploy_sol_details" class="content-deploy">
            </div>
            <div class="content-block">
                <p id="deploy_station" class="content-deploy">
                <p id="deploy_name" class="content-deploy"></p>
                <p id="deploy_identity" class="content-deploy"></p>
                <p id="deploy_offence" class="content-deploy"></p>
                <p id="deploy_arrival" class="content-deploy"></p>
                <p id="deploy_ref" class="content-deploy"></p>
                <p id="deploy_custody" class="content-deploy"></p>

                <input type="text" name="sms_station" id="sms_station" class="sms-deploy">
                <input type="text" name="sms_name" id="sms_name" class="sms-deploy">
                <input type="text" name="sms_identity" id="sms_identity" class="sms-deploy">
                <input type="text" name="sms_offence" id="sms_offence" class="sms-deploy">
                <input type="text" name="sms_arrival" id="sms_arrival" class="sms-deploy">
                <input type="text" name="sms_ref" id="sms_ref" class="sms-deploy">
                <input type="text" name="sms_custody" id="sms_custody" class="sms-deploy">
            </div>
            <div class="content-block">
                <p id="sol_tel_clarify" class="content-deploy">Can I confirm the <strong>phone number</strong> you would like us to send the text to?</p>
                <input type="text" name="deploy_sol_tel" id="deploy_sol_tel" class="content-deploy">
            </div>
            <div class="btn_container">
				<input type="submit" name="submit" class="submit_btn" value="Send SMS">
            </div>
        </form>
    </div>

        <?php include 'page_scripts.php';?>