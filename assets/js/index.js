localforage.keys().then(function (keys) {
    keys.forEach(function (key) {
        $('#savedPassesList').append(
            `<div>
                <div id="card:${key}" class="card bg-light text-dark shadow rounded card-hover-pass">
                    <div class="card-body">
                        <i>${key}</i>
                        <button type="button" class="close" aria-label="Close">
                            <span id="btn:${key}" class="deleteButton" aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <br/>
            </div>`);
    });
}).catch(function (err) {
    console.log(err);
});

$(document).on("click", ".deleteButton", function (event) {
    removePass(event.target);
});

$(document).on("click", ".card-hover-pass", function (event) {
    var key = event.currentTarget.id.split(':')[1];
    localforage.getItem(key, function (err, value) {
        if (err) {
            console.log(err);
            return;
        }
        $('#ePassKey').text(key);
        $('#qrCodeView').attr('src', value);
        $('#savedQrCodeModal').modal('show');
        console.log(key + " : retrieved from local db");
    });
});

function removePass(element) {
    if (window.confirm("Do you really want to delete this ePass?")) {
        var key = element.id.split(':')[1];
        $(element).parent().parent().parent().parent().remove();
        localforage.removeItem().then(function () {
            console.log(key + ' is deleted from local db!');
        }).catch(function (err) {
            console.log(err);
        });
    }
}