// pxt-esp8266-thingspeak-APEX-HTTP.ts
/*******************************************************************************
 * Functions for ThingSpeak
 *
 * Company: Cytron Technologies Sdn Bhd
 * Website: http://www.cytron.io
 * Email:   support@cytron.io
 *******************************************************************************/

// ThingSpeak API url.
const APEX_SERVER_OR_IP = "192.168.1.104"

namespace esp8266_EJ {
    // Flag to indicate whether the data was uploaded to ThingSpeak successfully.
    let APEX_HTTPUploaded = false



    /**
     * Return true if data is uploaded to APEX HTTP server successfully.
     */
    //% subcategory="APEX_HTTP"
    //% weight=30
    //% blockGap=8
    //% blockId=esp8266_is_APEX_HTTP_data_uploaded
    //% block="APEX HTTP data uploaded"
    export function is_APEX_HTTP_data_uploaded(): boolean {
        return APEX_HTTPUploaded
    }



    /**
     * Upload data to APEX HTTP server 
     * @param writeAPIPath URL without http server port
     * @param field1 Data for Field 1.
     * @param field2 Data for Field 2.
     * @param field3 Data for Field 3.
     * @param field4 Data for Field 4.
     * @param field5 Data for Field 5.
     * @param field6 Data for Field 6.
     * @param field7 Data for Field 7.
     * @param field8 Data for Field 8.
     */
    //% subcategory="APEX_HTTP"
    //% weight=29
    //% blockGap=8
    //% blockId=esp8266_upload_APEX_HTTP
    //% block="Upload data to APEX_HTTP server|Write API path (üresen maradhat) %writeApiKey|Field 1 %field1||Field 2 %field2|Field 3 %field3|Field 4 %field4|Field 5 %field5|Field 6 %field6|Field 7 %field7|Field 8 %field8"
    export function upload_APEX_HTTP_Server(writeApiKey: string,
        field1: number,
        field2: number = null,
        field3: number = null,
        field4: number = null,
        field5: number = null,
        field6: number = null,
        field7: number = null,
        field8: number = null) {

        // Reset the upload successful flag.
        APEX_HTTPUploaded = false

        // Make sure the WiFi is connected.
        if (isWifiConnected() == false) return

        // Connect to ThingSpeak. Return if failed.
       // if (sendCommand("AT+CIPSTART=\"TCP\",\"" + THINGSPEAK_API_URL + "\",8080", "OK", 10000) == false) return
       // if (sendCommand("AT+CIPMUX=0", null, 10000) == false) { null }
        let URL = "http://192.168.0.4:8080/ords/f?p=100:6::application_process=log_data_01:::p6_field1:-99.8"
        let page ="/ords/f?p=100:6::application_process=log_data_01:::p6_field1:-99.8"
        let http = "GET " + page + "HTTP/1.0\r\nHost:" + URL + "\r\n\r\n"
        let cmd1 = "AT+CIPSTART=\"TCP\",\"" +   URL + "\", 80\r\n";
        sendCommand(cmd1, null, 2000)
        let cmd2 = "AT+CIPSEND=" + http.length + "\r\n"
        sendCommand(cmd2, null, 2000)
        sendCommand(http, null, 2000)
       
      // sendCommand("AT+CIPSTART=\"TCP\",\"" + APEX_SERVER_OR_IP + "\",8080", null, 10000)
      // sendCommand("AT + CIPMODE=1", null, 10000)
      //  sendCommand( "AT+CIPSEND=" + http.length +"\r\n", null,10000)

        let data = "GET /ords/f?p=100:6::application_process=log_data_01:::p6_field1:-77.7"
        // Send the data.
        sendCommand("AT+CIPSEND=" + (data.length + 2))
        sendCommand(data)
        //basic.showString(getResponse2(100))

/*
        // Return if "SEND OK" is not received.
        if (getResponse("SEND OK", 1000) == "") return

        // Check the response from ThingSpeak.
        let response = getResponse("+IPD", 1000)
        if (response == "") return

        // Trim the response to get the upload count.
        response = response.slice(response.indexOf(":") + 1, response.indexOf("CLOSED"))
        let uploadCount = parseInt(response)

        // Return if upload count is 0.
        if (uploadCount == 0) return

        // Set the upload successful flag and return.
        */
        APEX_HTTPUploaded = true
        serial.redirect(
            SerialPin.P16,
            SerialPin.P15,
            BaudRate.BaudRate115200
        )
        return
    }
    /**
    * APEX HTTP request 
    * @param http_server_path Full URL
    */
    //% subcategory="APEX_HTTP"
    //% weight=29
    //% blockGap=8
    //% blockId=esp8266_APEX_HTTP_Request
    //% block="APEX_HTTP_Request|Write API path  %http_server_path"
    export function APEX_HTTP_Request(http_server_path: string) {

        // Reset the upload successful flag.
        APEX_HTTPUploaded = false

        // Make sure the WiFi is connected.
        if (isWifiConnected() == false) return
        // Send the data.
        serial.redirectToUSB()
        if (sendCommand("AT+HTTPCLIENT=2,3,\"http://192.168.0.4:8080/ords/f?p=100:6::application_process=log_data_01:::p6_field1:-66.6\",\"\",\"\",1", null, 10000) == false) { null }
        basic.pause(1000)
        basic.showString(">")
        radio.setGroup(1)
        radio.sendString(getResponse2(100))
        radio.sendString(getResponse2(100))
        radio.sendString(getResponse2(100))
        radio.sendString(getResponse2(100))
        radio.sendString(getResponse2(100))
        radio.sendString(getResponse2(100))
        radio.sendString(getResponse2(100))
        radio.sendString(getResponse2(100))
        
        APEX_HTTPUploaded = true
        serial.redirect(
            SerialPin.P16,
            SerialPin.P15,
            BaudRate.BaudRate115200
        )
        return
    }
}
