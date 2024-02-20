$(document).ready(function() {
    $('.js-example-basic-single').select2();
    $(".js-example-responsive").select2();
    $('#firm').next(".select2-container").hide();
    $('#int_required').next(".select2-container").hide();
    $('#sol_select').next(".select2-container").hide();
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
                    document.getElementById("sol_num").value = "Tel Number: " + sol_nums.sol_nums[document.getElementById("sol_select").value];
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

function sort_year(dt) 
{ 
  return ('' + dt.getFullYear()).substr(2);
}

dt = new Date(); 
console.log(sort_year(dt));

var seconds = Math.floor(new Date().getTime() / 1000).toString().slice(-4);

document.getElementById('ref_num').innerHTML = "The DRS <strong>reference number</strong> for this Detainee is: " + sort_year(dt) + ("0" + (new Date().getMonth() + 1)).slice(-2) + seconds + "A";