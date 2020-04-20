function loadSavedPasses() {
    localforage.keys().then(function (keys) {
        if (keys.length == 0) {
            $('#savedPassesList').append('<div class="font-weight-light" style="margin-left:15px"><small>No Records!</small></div>');
        }
        else {
            keys.forEach(function (key) {
                $('#savedPassesList').append(
                    `<div>
                        <div id="card:${key}" class="card text-dark shadow-sm rounded card-hover-pass">
                            <div class="card-body">
                                <i class="fa fa-download text-info downloadButton" style="font-size: 1.2em" aria-hidden="true"></i>
                                <span class="text-">${key}</span>
                                <button type="button" class="close" aria-label="Close">
                                    <span id="btn:${key}" class="deleteButton" aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                        <br/>
                    </div>`);
            });
        }
    }).catch(function (err) {
        console.log(err);
    });
}

loadSavedPasses();

$(".custom-file-input").on("change", function (file) {
    var fileName = $(this).val().split("\\").pop();
    var filePath = $(this).siblings(".custom-file-label");

    var input = file.target;
    var reader = new FileReader();
    reader.onload = function () {
        var payload = reader.result;
        if (payload.startsWith("data:image/png")) {
            //Here should be the code to save the data into your database
            localforage.setItem(fileName, reader.result).then(function (value) {
                // Do other things once the value has been saved.
                console.log(fileName + " : Saved to local storage");
                filePath.addClass("selected").html("");
                $('#savedPassesList').html("");
                loadSavedPasses();
                $('#uploadQrCodeModal').modal('hide');
            }).catch(function (err) {
                // This code runs if there were any errors
                console.log(err);
            });
        }
        else {
            filePath.addClass("selected").html("Invalid file!");
            console.log(fileName + " : is not valid image");
        }
    };
    reader.readAsDataURL(input.files[0]);
});

$('#uploadCard').click(function () {
    $('#uploadQrCodeModal').modal('show');
});

$(document).on("click", ".deleteButton", function (event) {
    removePass(event.target);
});

$(document).on("click", ".card-hover-pass", function (event) {
    if (event.target && event.target.className.startsWith('deleteButton')) return;
    var key = event.currentTarget.id.split(':')[1];
    localforage.getItem(key, function (err, value) {
        if (err) {
            console.log(err);
            return;
        }
        $('#ePassKey').text(key);
        $('#qrCodeViewLink').attr('src', value);
        $('#qrCodeView').attr('src', value);
        $('#savedQrCodeModal').modal('show');
        console.log(key + " : retrieved from local db");
    });
});

function removePass(element) {
    if (window.confirm("Do you really want to delete this ePass?")) {
        var key = element.id.split(':')[1];
        $(element).parent().parent().parent().parent().remove();
        localforage.removeItem(key).then(function () {
            console.log(key + ' is deleted from local db!');

            localforage.keys().then(function (keys) {
                if (keys.length == 0) {
                    $('#savedPassesList').append('<div class="font-weight-light" style="margin-left:15px"><small>No Records!</small></div>');
                }
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
}

$('#savedQrCodeModal').on('shown.bs.modal', function () {
    //initialize();
    $('#statusMsg').text("Initializing...");
})

//---------------Peering---------------

var lastPeerId = new ClientJS().getFingerprint();
var peer = null; // Own peer object
var conn = null;

function initialize() {
    // Create own peer object with connection to shared PeerJS server
    peer = new Peer(String(lastPeerId));

    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id
        if (peer.id === null) {
            console.log('Received null id from peer open');
            peer.id = lastPeerId;
        } else {
            lastPeerId = peer.id;
        }

        if (peer.id === null) {
            $('#statusMsg').text("Error! Refresh the page.");
            return;
        }

        console.log('Your Id: ' + peer.id);
        $('#statusMsg').text("Ready for verification.");
    });

    peer.on('connection', function (c) {
        // Allow only a single connection
        if (conn) {
            c.on('open', function () {
                c.send("BUSY");
                setTimeout(function () { c.close(); }, 500);
            });
            return;
        }

        conn = c;
        console.log("Connected to: " + conn.peer);
        $('#statusMsg').text("Verification starting...");

        ready();
    });

    peer.on('disconnected', function () {
        $('#statusMsg').text("Connection problem. Retrying...");
        console.log('Connection lost. Reconnecting...');

        // Workaround for peer.reconnect deleting previous id
        peer.id = lastPeerId;
        peer._lastServerId = lastPeerId;
        peer.reconnect();
    });

    peer.on('close', function () {
        conn = null;
        console.log('Connection closed');
        $('#statusMsg').text("");
    });

    peer.on('error', function (err) {
        console.log(err);
        $('#statusMsg').text("Error! Refresh the page.");
    });
}

function ready() {
    conn.on('data', function (data) {
        console.log("Data recieved");
        $('#statusMsg').text("OTP received!");

        if (conn && conn.open) {
            setTimeout(() => {
                conn.send(data);
                console.log("Bounced: " + data);
                $('#statusMsg').text("Response sent!");
            }, 1000);
        } else {
            console.log('Connection closed');
            $('#statusMsg').text("Verification interrupted!");
        }
    });

    conn.on('close', function () {
        $('#statusMsg').text("");
        conn = null;
    });
}

(function () {

    var lastPeerId = null;
    var peer = null; // Own peer object
    var peerId = null;
    var conn = null;

    /**
     * Create the Peer object for our end of the connection.
     *
     * Sets up callbacks that handle any events related to our
     * peer object.
     */
    function initialize() {
        // Create own peer object with connection to shared PeerJS server
        peer = new Peer("2216827340", {
            debug: 2
        });

        peer.on('open', function (id) {
            // Workaround for peer.reconnect deleting previous id
            if (peer.id === null) {
                console.log('Received null id from peer open');
                peer.id = lastPeerId;
            } else {
                lastPeerId = peer.id;
            }

            console.log('ID: ' + peer.id);
        });
        peer.on('connection', function (c) {
            // Allow only a single connection
            if (conn) {
                c.on('open', function () {
                    c.send("Already connected to another client");
                    setTimeout(function () { c.close(); }, 500);
                });
                return;
            }

            conn = c;
            console.log("Connected to: " + conn.peer);
            ready();
        });
        peer.on('disconnected', function () {
            console.log('Connection lost. Please reconnect');

            // Workaround for peer.reconnect deleting previous id
            peer.id = lastPeerId;
            peer._lastServerId = lastPeerId;
            peer.reconnect();
        });
        peer.on('close', function () {
            conn = null;
            console.log('Connection destroyed');
        });
        peer.on('error', function (err) {
            console.log(err);
        });
    };

    /**
     * Triggered once a connection has been achieved.
     * Defines callbacks to handle incoming data and connection events.
     */
    function ready() {
        conn.on('data', function (data) {
            console.log("Data recieved");
            setTimeout(() => {
                if (conn && conn.open) {
                    conn.send(data);
                    console.log("Bounced: " + data)
                } else {
                    console.log('Connection is closed');
                }
            }, 1000);
        });
        conn.on('close', function () {
            console.log('Connection reset');
            conn = null;
        });
    }

    initialize();
})();