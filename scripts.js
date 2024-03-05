$(document).ready(function() {
    $('.js-example-basic-single').select2();
    $(".js-example-responsive").select2();
    $('#firm').next(".select2-container").hide();
    $('#int_required').next(".select2-container").hide();
    $('#sol_select').next(".select2-container").hide();
    let seconds = Math.floor(new Date().getTime() / 1000).toString().slice(-4);
    $('#ref_num').attr("value", ('' + new Date().getFullYear()).substr(2) + ("0" + (new Date().getMonth() + 1)).slice(-2) + seconds + "A");
});

let stations;
let offences;
let solicitors;

fetch('./stations.json')
    .then(results => results.json())
    .then(
        function(data){
            stations = data;
            for (let i = 0; i < stations.stations.length; i++) {
            document.getElementById("station").innerHTML += `<option value="` + stations.stations[i] + `">` + stations.stations[i] + `</option>`;
            }
    });

fetch('./offences.json')
    .then(results => results.json())
    .then(
        function(data){
            offences = data;
            for (let i = 0; i < offences.offences.length; i++) {
            document.getElementById("offence").innerHTML += `<option value="` + offences.offences[i] + `">` + offences.offences[i] + `</option>`;
            }
    });

fetch('./firms.json')
    .then(results => results.json())
    .then(
        function(data){
            firms = data;
            for (let i = 0; i < firms.firms.length; i++) {
            document.getElementById("firm").innerHTML += `<option value="` + firms.firms[i] + `">` + firms.firms[i] + `</option>`;
            }
    });

fetch('./solicitors.json')
    .then(results => results.json())
    .then(
        function(data){
            solicitors = data;
            for (let i = 0; i < solicitors.solicitors.length; i++) {
            document.getElementById("sol_select").innerHTML += `<option value="` + i + `">` + solicitors.solicitors[i] + `</option>`;
            }
    });

function getSolNum(){
    fetch('./sol_nums.json')
        .then(results => results.json())
        .then(
            function(data){
                sol_nums = data;
                for (let i = 0; i < sol_nums.sol_nums.length; i++) {
                if(document.getElementById("sol_select").value >= 0) {
                    document.getElementById("sol_num").value = sol_nums.sol_nums[document.getElementById("sol_select").value];
                }
                }
        });  
}

fetch('./languages.json')
    .then(results => results.json())
    .then(
        function(data){
            languages = data;
            for (let i = 0; i < languages.languages.length; i++) {
            document.getElementById("int_required").innerHTML += `<option value="` + languages.languages[i] + `">` + languages.languages[i] + `</option>`;
            }
    });

function juvenile_check() {
    if (document.getElementById('adult').checked) {
        document.getElementById('app').disabled = false;
        document.getElementById('app').checked = false;
        document.getElementById('app_arranged').style.display = "none";
        document.getElementById('app_arranged_label').style.display = "none";
    }
    else{
        document.getElementById('app').checked = true;
        document.getElementById('app').disabled = true;
        document.getElementById('app_arranged_label').style.display = "block";
        document.getElementById('app_arranged').style.display = "block";
    }
}

function app_arranged_check() {
    if (document.getElementById('app').checked) {
        document.getElementById('app_arranged_label').style.display = "block";
        document.getElementById('app_arranged').style.display = "block";
    }
    else{
        document.getElementById('app_arranged').style.display = "none";
        document.getElementById('app_arranged_label').style.display = "none";
    }
}

function int_required_check() {
    if (document.getElementById('interpreter').checked) {
        document.getElementById('int_required_label').style.display = "block";
        $('#int_required').next(".select2-container").show();
        document.getElementById('int_required').style.display = "block";
    }
    else{
        document.getElementById('int_required').style.display = "none";
        $('#int_required').next(".select2-container").hide();
        document.getElementById('int_required_label').style.display = "none";
    }
}

function solCheck(src) {
    if (src.value == "sol"){
        document.getElementById('caller_id_question').innerHTML = "Can I take your <strong>surname</strong> and <strong>pin number</strong>?";
        document.getElementById('station_number').style.display = "none";
        document.getElementById('station_number_label').style.display = "none";
        document.getElementById('own').checked = true;
        document.getElementById('duty').disabled = true;
        document.getElementById('firm').style.display = "block";
        $('#firm').next(".select2-container").show();
        document.getElementById('firm_label').innerHTML = "Which <strong>firm</strong> are you with?";
        document.getElementById('firm_label').style.display = "block";
        document.getElementById('scheme').style.display = "none";
        $('#scheme').next(".select2-container").hide();
        document.getElementById('scheme_label').style.display = "none";
    }
    else{
        document.getElementById('caller_id_question').innerHTML = "Can I take your <strong>rank, surname</strong> and <strong>shoulder number</strong>?";
        document.getElementById('station_number').style.display = "block";
        document.getElementById('station_number_label').style.display = "block";
        document.getElementById('duty').disabled = false;
        document.getElementById('firm_label').innerHTML = "Which <strong>firm</strong> do they want?";
    }
}

function ownCheck(src) {
    if (src.value == "own"){
        document.getElementById('firm').style.display = "block";
        $('#firm').next(".select2-container").show();
        document.getElementById('firm_label').style.display = "block";
        document.getElementById('scheme').style.display = "none";
        $('#scheme').next(".select2-container").hide();
        document.getElementById('scheme_label').style.display = "none";
        $('#sol_select').next(".select2-container").show();
        document.getElementById('sol_select_label').style.display = "block";
        document.getElementById('sol_num').style.display = "block";
    }
    else{
        document.getElementById('firm').style.display = "none";
        $('#firm').next(".select2-container").hide();
        document.getElementById('firm_label').style.display = "none";
        document.getElementById('scheme').style.display = "block";
        $('#scheme').next(".select2-container").show();
        document.getElementById('scheme_label').style.display = "block";
        $('#sol_select').next(".select2-container").hide();
        document.getElementById('sol_select_label').style.display = "none";
        document.getElementById('sol_num').style.display = "none";
    }
}

fetch('./cases.json')
    .then(results => results.json())
    .then(
        function(data){
            cases = data;
            for (let i = 0; i < cases.length; i++) {
            document.getElementById("deploy_station").innerHTML = "The case is for " + "<strong>" + cases[cases.length - 1].station + " police station" + "</strong>";
            document.getElementById("deploy_name").innerHTML = "The detainee is " + "<strong>" + cases[cases.length - 1].forename + " " + cases[cases.length - 1].surname + "</strong>";
            document.getElementById("deploy_identity").innerHTML = "They are an " + "<strong>" + cases[cases.length - 1].adult + " " + cases[cases.length - 1].gender + "</strong>";
            document.getElementById("deploy_offence").innerHTML = "The offence(s) is " + "<strong>" + cases[cases.length - 1].offence.split('- ')[1] + "</strong>";
            document.getElementById("deploy_arrival").innerHTML = "The arrival time was " + "<strong>" + cases[cases.length - 1].arrival.split('T')[1] + " (" + cases[cases.length - 1].arrival.substring(0, cases[cases.length - 1].arrival.indexOf("T")) + ")</strong>";
            document.getElementById("deploy_ref").innerHTML = "The case reference number is " + "<strong>" + cases[cases.length - 1].ref_num + "</strong>";
            document.getElementById("deploy_custody").innerHTML = "The custody number is " + "<strong>" + cases[cases.length - 1].cust_num + "</strong>";
            document.getElementById("case_type").innerHTML = "Hello, this is Defence Resgistry Solicitor _____ speaking. We have a <strong>" + cases[cases.length - 1].duty_or_own + "</strong> case, if you are able to accept?";
            document.getElementById("sms_station").value = cases[cases.length - 1].station;
            document.getElementById("sms_name").value = cases[cases.length - 1].forename + " " + cases[cases.length - 1].surname;
            document.getElementById("sms_identity").value = cases[cases.length - 1].adult + " " + cases[cases.length - 1].gender;
            document.getElementById("sms_offence").value = cases[cases.length - 1].offence.split('- ')[1];
            document.getElementById("sms_arrival").value = cases[cases.length - 1].arrival.split('T')[1] + " (" + cases[cases.length - 1].arrival.substring(0, cases[cases.length - 1].arrival.indexOf("T")) + ")";
            document.getElementById("sms_ref").value = cases[cases.length - 1].ref_num;
            document.getElementById("sms_custody").value = cases[cases.length - 1].cust_num;
            $('#deploy_sol_details').attr("value", cases[cases.length - 1].sol_select + " " + solicitors.solicitors[cases[cases.length - 1].sol_select].substring(solicitors.solicitors[cases[cases.length - 1].sol_select].indexOf(' ') + 1));
            $('#deploy_sol_tel').attr("value", cases[cases.length - 1].sol_num);
            }
    });