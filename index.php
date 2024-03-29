<?php require("script.php") ?>
<?php include 'head.php';?>
    <title>DRS - Case Logging</title>
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
			<p class="script_intro">Hello, Defence Registery Solicitors, this is ______ speaking. How can I help?</p>
		<form action="" method="post">
		<label for="station" class="question-text">Which <strong>station</strong> is this for?</label>
            <select id="station" class="js-example-basic-single" name="station">
                <option></option>
            </select>
            <label for="pol_or_sol" class="question-text"><strong>Police</strong> or <strong>Solicitor</strong> logging?</label>
            <input type="radio" id="pol" name="pol_or_sol" value="pol" onchange="solCheck(this)" checked>
            <label for="pol">Police</label>
            <input type="radio" id="sol" name="pol_or_sol" value="sol" onchange="solCheck(this)">
            <label for="sol">Solicitor</label>
            <label for="caller_id" class="question-text" id="caller_id_question">Can I take your <strong>rank, surname</strong> and <strong>shoulder number</strong>?</label>
            <input type="text" name="caller_id" id="caller_id">
            <label for="station_number" id="station_number_label" class="question-text">Can you confirm the <strong>contact number of the station</strong>, as well?</label>
            <input type="text" name="station_number" id="station_number">
            <label for="duty_or_own" class="question-text">Is this a <strong>Duty</strong> or an <strong>Own</strong> request?</label>
            <input type="radio" id="duty" name="duty_or_own" value="duty" onchange="ownCheck(this);" checked>
            <label for="duty">Duty</label>
            <input type="radio" id="own" name="duty_or_own" value="own" onchange="ownCheck(this);">
            <label for="own">Own</label>
            <label for="scheme" id="scheme_label" class="question-text">Which <strong>scheme</strong> is it under?</label>
            <select id="scheme" class="js-example-basic-single" name="scheme">
                <option></option>
            </select>
            <label for="firm" id="firm_label" class="question-text">Which <strong>firm</strong> do they want?</label>
            <select id="firm" class="js-example-basic-single" name="firm">
                <option></option>
            </select>
            <label for="sol_select" id="sol_select_label" class="question-text">Is there a specific <strong>solicitor</strong> they want?</label>
            <div class="sol_select_group">
                <select id="sol_select" class="js-example-responsive sol_select" name="sol_select" onchange="getSolNum()">
                    <option></option>
                </select>
                <label for="sol_num" id="sol_num_label" class="question-text">
                    Tel Number: 
                    <input class="sol_num" type="text" name="sol_num" id="sol_num">
                </label>
            </div>
            <div class="dp_name_group">
                <div class="dp_name_field">
                    <label for="surname" class="question-text">Detainee’s <strong>Surname</strong>?</label>
                    <input type="text" class="dp_name" name="surname" id="surname">
                </div>
                <div class="dp_name_field">
                    <label for="forename" class="question-text">Detainee’s <strong>First name?</strong></label>
                    <input type="text" class="dp_name" name="forename" id="forename">
                </div>
            </div>
            <label for="gender" class="question-text">Is that a <strong>Male/Female</strong>? </label>
            <input type="radio" id="male" name="gender" value="male" checked>
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>
            <label for="adult" class="question-text">Are they an <strong>Adult?</strong> </label>
            <input type="checkbox" id="adult" name="adult" value="adult" onclick="juvenile_check()" checked>
            <label class="question-text">Do they require an <strong>Appropriate Adult</strong> or an <strong>Interpreter</strong>?</label>
            <input type="checkbox" name="app" id="app" value="app" onchange="app_arranged_check()" /><label for="app">Appropriate Adult</label>
            <input type="checkbox" name="interpreter" id="interpreter" value="interpreter" onchange="int_required_check()"  /><label for="interpreter">Interpreter</label>
            <label for="app_arranged" id="app_arranged_label" class="question-text">Has an <strong>Appropriate Adult</strong> been arranged?</label>
            <input type="checkbox" id="app_arranged" name="app_arranged" value="app_arranged" checked>
            <label for="int_required" id="int_required_label" class="question-text">Which <strong>Language</strong>?</label>
            <select id="int_required" class="js-example-basic-single" name="int_required">
                <option></option>
            </select>
            <label for="cust_num" class="question-text">Can I have the <strong>Custody Number</strong>, please?</label>
            <input type="text" name="cust_num" id="cust_num">
            <label for="arrival" class="question-text">And the <strong>Date and Time</strong> of arrival?</label>
            <input type="datetime-local" id="arrival" name="arrival" />
            <label for="offence" class="question-text">And what is the <strong>Offence</strong>?</label>
            <select id="offence" class="js-example-basic-single data_dropdown" name="offence">
                <option></option>
            </select>
            <label for="comments" class="question-text">Do you have any further <strong>comments</strong> about the Detainee's current condition?</label>
            <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
            <label class="question-text">The DRS <strong>reference number</strong> for this Detainee is:</label>
				<input type="text" id="ref_num" name="ref_num">
            <div class="btn_container">
				<input type="submit" name="submit" class="submit_btn" value="Deploy Case">
            </div>
			<p class="error"><?php echo @$error; ?></p>
			<p class="success"><?php echo @$success; ?></p>
	</form>
	<?php include 'page_scripts.php';?>