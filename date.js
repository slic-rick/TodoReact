exports.getDate = function () {


    var theDay = "";
    var date = new Date();
    var today = date.getDay();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    theDay = date.toLocaleString("en-US", options);

    return theDay;

}

exports.getDay = function () {


    var theDay = "";
    var date = new Date();
    var today = date.getDay();

    var options = {
        weekday: "long",

    }

    theDay = date.toLocaleString("en-US", options);

    return theDay;

}