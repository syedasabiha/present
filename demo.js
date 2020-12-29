var timings = ['10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM', '03:00 PM', '04:00 PM']
var timings1 = ['10:30 AM','11:30 AM','12:30 PM','01:30 PM', '02:30 PM', '03:30 PM', '04:30 PM']
$(document).ready(function() { 
    
    $(function() { 
        $("#date").datepicker({
            onSelect: function(dateText, inst) { 
                var dateAsString = dateText; //the first parameter of this function
                var dateAsObject = $(this).datepicker( 'getDate' ); //the getDate method
                console.log(dateAsObject,dateText);
                document.getElementById("timeSection").style.display="block";
            }
        }).find('a.ui-state-highlight')
        .removeClass('ui-state-highlight');
    }); 
}) 

var list = document.createElement('div');
timings.forEach(function (timing) {
    var li = document.createElement('h6');
    li.setAttribute("onClick", "timeSelection('"+timing+"')");
    li.innerHTML = `<h6 class="timingsBtn pointer" id="`+timing+`">`+timing+`</h6>`;
    list.appendChild(li);
});

// Inject into the DOM
var app = document.querySelector('#row1');
app.appendChild(list);

var list1 = document.createElement('div');
timings1.forEach(function (timing) {
    var li1 = document.createElement('h6');
    li1.setAttribute("onClick", "timeSelection('"+timing+"')");
    li1.innerHTML = `<h6 class="timingsBtn pointer" id="`+timing+`">`+timing+`</h6>`;
    list1.appendChild(li1);
});

// Inject into the DOM
var app1 = document.querySelector('#row2');
app1.appendChild(list1);
var prev_list = 0;

function timeSelection(li) {
    console.log(li);
    if(prev_list > 0) {
        for(var j=0;j<timings.length;j++) {
            if(timings[j] != li) {
                document.getElementById(timings[j]).style.backgroundColor='#ffffff';
                document.getElementById(timings[j]).style.color='#585858';
            }
            else {
                document.getElementById(li).style.backgroundColor='#07689F';
                document.getElementById(li).style.color='#ffffff';
            }
            
        }
        for(var j=0;j<timings1.length;j++) {
            if(timings1[j] != li) {
                document.getElementById(timings1[j]).style.backgroundColor='#ffffff';
                document.getElementById(timings1[j]).style.color='#585858';
            }
            else {
                document.getElementById(li).style.backgroundColor='#07689F';
                document.getElementById(li).style.color='#ffffff';
            }
            
        }
    }
    else {
        document.getElementById(li).style.backgroundColor='#07689F';
        document.getElementById(li).style.color='#ffffff';
    }
    prev_list++;
}

// Displaying calendar function
function enableCalendar() {
    document.getElementById("calendarSection").style.display="block";
    document.getElementById("mainNext").style.display="none";
}

// show form function
function showForm() {
    document.getElementById("mainContent").style.setProperty('display', 'none', 'important');
    document.getElementById("formContent").style.display="block";
}

// form function
function submitDetails() {
    window.location="index.html";
}

//close function
function close() {
    window.location="index.html";
}