// thingspeak
input.onButtonPressed(Button.A, function () {
    // Grove ESP USB power EJ01 v1.01
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
    if (esp8266.isESP8266Initialized()) {
        basic.showLeds(`
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        esp8266.connectWiFi("MOBAP", "Budapest1")
        basic.showLeds(`
            # # . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        if (esp8266.isWifiConnected()) {
            basic.showLeds(`
                # # . . .
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # . .
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                `)
            esp8266.uploadThingspeak(
            "ICPZTSAEIMBWJDTK",
            0
            )
            if (esp8266.isThingspeakUploaded()) {
                basic.showLeds(`
                    # # # . .
                    . . . . .
                    # # # . .
                    . . . . .
                    . . . . .
                    `)
            } else {
                basic.showLeds(`
                    # # # . .
                    . . . . .
                    # # . . .
                    . . . . .
                    . . # . .
                    `)
            }
        } else {
            basic.showLeds(`
                # # . . .
                . . . . .
                # . . . .
                . . . . .
                . # . . .
                `)
        }
    } else {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
})
// APEX_HTTP
// Grove ESP USB power EJ01 v1.01
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
if (esp8266.isESP8266Initialized()) {
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    esp8266.connectWiFi("MOBAP", "Budapest1")
    basic.showLeds(`
        # # . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    if (esp8266.isWifiConnected()) {
        basic.showLeds(`
            # # . . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        esp8266.upload_APEX_HTTP_Server(
        "",
        11
        )
        if (esp8266.is_APEX_HTTP_data_uploaded()) {
            basic.showLeds(`
                # # # . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # # # . .
                . . . . .
                # # . . .
                . . . . .
                . . # . .
                `)
        }
    } else {
        basic.showLeds(`
            # # . . .
            . . . . .
            # . . . .
            . . . . .
            . # . . .
            `)
    }
} else {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
}
basic.forever(function () {
    
})
