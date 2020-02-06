
//globals
$('<ol>').addClass("list-group");
$('#timeBlocksHolder').append($('.list-group'));
addTimes();

function addTimes() {
    for (var i = 0; i < 10; i++) {
        var item = $('<li>').attr('id', ('block' + i));
        item.text("test");
        item.addClass("list-group-item time-block");
        $('#timeBlocksHolder').append(item);
    }
}