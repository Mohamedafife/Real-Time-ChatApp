var Connection = new signalR.HubConnectionBuilder().withUrl("/ChatHub").build();
Connection.on("receivemessage", function (fromUser, message) {
    var msg = fromUser + ": " + message;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li);
});
Connection.start();
$("#btnsend").on("click", function () {
    var fromUser = $("#txtuser").val();
    var message = $("#txtmessage").val();
    Connection.invoke("SendMessage", fromUser, message);
});