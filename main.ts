function ATInitEsp () {
    SendATCommand("abc", 10)
}
function ATEchoOn (TrueFalse: boolean) {
    if (TrueFalse) {
        SendATCommand("AT+ECXH0", 10)
    } else {
        SendATCommand("AT+ECXH1", 10)
    }
}
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
            esp8266_EJ.uploadThingspeak2(
            "ICPZTSAEIMBWJDTK",
            250
            )
            if (esp8266_EJ.isThingspeakUploaded2()) {
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
// thingspeak
input.onButtonPressed(Button.AB, function () {
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
input.onButtonPressed(Button.B, function () {
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
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
})
function SendATCommand (strCommand: string, nWaitAfterms: number) {
    serial.writeLine(strCommand)
    basic.pause(nWaitAfterms)
}
radio.setGroup(1)
led.setBrightness(10)
basic.pause(200)
radio.sendString("x")
radio.sendString("X")
basic.pause(200)
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
