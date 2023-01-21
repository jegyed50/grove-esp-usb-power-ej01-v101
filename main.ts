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
            250
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
input.onButtonPressed(Button.AB, function () {
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
    esp8266_EJ.init(SerialPin.P15, SerialPin.P16, BaudRate.BaudRate115200)
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
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
})
// thingspeak
input.onButtonPressed(Button.B, function () {
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
    esp8266_EJ.init(SerialPin.P15, SerialPin.P16, BaudRate.BaudRate115200)
    if (esp8266_EJ.isESP8266Initialized()) {
        basic.showLeds(`
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        esp8266_EJ.connectWiFi("ARRIS-02D9", "01C2BBC549B74403")
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
            esp8266_EJ.APEX_HTTP_Request("")
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
})
led.setBrightness(10)
// APEX_HTTP
// Grove ESP USB power EJ01 v1.01
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.pause(1000)
basic.forever(function () {
	
})
