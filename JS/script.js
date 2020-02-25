
//globals
let times = ['9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm']
let timecomp = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
var currentHour = moment().format('H');

//run on start
addTimes();
loadSchedule();
var timeAdj = setInterval(adjustTime, 1000);

//functions
function addTimes() {
    for (var i = 0; i < 9; i++) {
        var row = $('<div>').addClass("row time-block").attr('id', 'r' + i);
        $('#timeBlocksHolder').append(row);
        if (parseFloat(timecomp[i]) > currentHour)
        {
            //var time = $('<span>').addClass("col-sm-2 hour future").attr('id', times[i]).text(times[i]);
            var plans = $('<textarea>').addClass("col-sm-8 future").attr('id', "plans" + i).text("insert plans here");
        }
        else if (parseFloat(timecomp[i]) < currentHour)
        {
            //var time = $('<span>').addClass("col-sm-2 hour past").attr('id', times[i]).text(times[i]);
            var plans = $('<textarea>').addClass("col-sm-8 past").attr('id', "plans" + i).text("insert plans here");
        }
        else 
        {
            //var time = $('<span>').addClass("col-sm-2 hour present").attr('id', times[i]).text(times[i]);
            var plans = $('<textarea>').addClass("col-sm-8 present").attr('id', "plans" + i).text("insert plans here");
        }
        var time = $('<span>').addClass("col-sm-2 hour").attr('id', times[i]).text(times[i]);
        var save = $('<button>').addClass("col-sm-2 saveBtn").attr('id', i).text("Save");
        row.append(time, plans, save);
    }
}

function adjustTime() {
    var currentDate = moment().format('LLLL');
    $("#currentDay").text(currentDate);
}

function save(saveBox) {
    var key = '#' + saveBox;
    var value = $(key).text;
    if (window.localStorage.getItem(key)) //deletes old stuff if you put in new stuff and hit save
    {
        window.localStorage.removeItem(key);
    }
    window.localStorage.setItem(key, $(key)[0].value);
}

function loadSchedule() {
    var archive = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        archive[keys[i]] = localStorage.getItem(keys[i]);
        $(keys[i]).text(archive[keys[i]]);
    }

}

//event listeners

$( ".saveBtn" ).click(function(event) {
    save('plans' + event.target.id);
})
