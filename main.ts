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
    esp8266_EJ.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
    if (esp8266_EJ.isESP8266Initialized()) {
        basic.showLeds(`
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        esp8266_EJ.connectWiFi("MOBAP", "Budapest1")
        basic.showLeds(`
            # # . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        if (esp8266_EJ.isWifiConnected()) {
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
            esp8266_EJ.uploadThingspeak(
            "ICPZTSAEIMBWJDTK",
            200
            )
            if (esp8266_EJ.isThingspeakUploaded()) {
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
esp8266_EJ.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
if (esp8266_EJ.isESP8266Initialized()) {
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    esp8266_EJ.connectWiFi("MOBAP", "Budapest1")
    basic.showLeds(`
        # # . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    if (esp8266_EJ.isWifiConnected()) {
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
        esp8266_EJ.upload_APEX_HTTP_Server(
        "",
        11
        )
        if (esp8266_EJ.is_APEX_HTTP_data_uploaded()) {
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
