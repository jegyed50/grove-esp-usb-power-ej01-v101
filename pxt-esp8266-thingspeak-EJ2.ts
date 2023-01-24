// pxt-esp8266-thingspeak-EJ2.ts
/*******************************************************************************
 * Functions for ThingSpeak
 *
 * Company: Cytron Technologies Sdn Bhd
 * Website: http://www.cytron.io
 * Email:   support@cytron.io
 *******************************************************************************/

// ThingSpeak API url.
const THINGSPEAK_API_URL2 = "192.168.0.4"

namespace esp8266_EJ {
    // Flag to indicate whether the data was uploaded to ThingSpeak successfully.
    let thingspeakUploaded2 = false



    /**
     * Return true if data is uploaded to ThingSpeak successfully.
     */
    //% subcategory="ThingSpeak2"
    //% weight=30
    //% blockGap=8
    //% blockId=esp8266_is_thingspeak_data_uploaded2
    //% block="ThingSpeak data uploaded2"
    export function isThingspeakUploaded2(): boolean {
        return thingspeakUploaded2
    }



    /**
     * Upload data to ThingSpeak (Data can only be updated to Thingspeak every 15 seconds).
     * @param writeApiKey ThingSpeak Write API Key.
     * @param field1 Data for Field 1.
     * @param field2 Data for Field 2.
     * @param field3 Data for Field 3.
     * @param field4 Data for Field 4.
     * @param field5 Data for Field 5.
     * @param field6 Data for Field 6.
     * @param field7 Data for Field 7.
     * @param field8 Data for Field 8.
     */
    //% subcategory="ThingSpeak2"
    //% weight=29
    //% blockGap=8
    //% blockId=esp8266_upload_thingspeak2
    //% block="Upload data to ThingSpeak2|Write API key %writeApiKey|Field 1 %field1||Field 2 %field2|Field 3 %field3|Field 4 %field4|Field 5 %field5|Field 6 %field6|Field 7 %field7|Field 8 %field8"
    export function uploadThingspeak2(writeApiKey: string,
        field1: number,
        field2: number = null,
        field3: number = null,
        field4: number = null,
        field5: number = null,
        field6: number = null,
        field7: number = null,
        field8: number = null) {

        // Reset the upload successful flag.
        thingspeakUploaded2 = false

        // Make sure the WiFi is connected.
        if (isWifiConnected() == false) return

        // Connect to ThingSpeak. Return if failed.
        //if (sendCommand("AT+CIPMUX=0", null, 10000) == false) { null }
        if (sendCommand("AT+CIPSTART=\"TCP\",\"" + THINGSPEAK_API_URL2 + "\",800", "OK", 10000) == false) return

        if (sendCommand("AT + CIPMODE=1", null, 10000) == false) { null }
        // Construct the data to send.
      /*  let data = "GET /update?api_key=" + writeApiKey + "&field1=" + field1
        if (field2 != null) data += "&field2=" + field2
        if (field2 != null) data += "&field3=" + field3
        if (field2 != null) data += "&field4=" + field4
        if (field2 != null) data += "&field5=" + field5
        if (field2 != null) data += "&field6=" + field6
        if (field2 != null) data += "&field7=" + field7
        if (field2 != null) data += "&field8=" + field8*/
        let data = "GET /ords/f?p=100:6::application_process=log_data_01:::p6_field1:100"

        // Send the data.
        sendCommand("AT+CIPSEND=" + (data.length + 2))
        sendCommand(data)
        //   radio.setGroup(1)
        //   basic.pause(200)
        //   radio.sendString(getResponse2(100))
        // Return if "SEND OK" is not received.


        let response = ""
       // if (getResponse("SEND OK", 1000) == "") return
        response = getResponse(null, 1000)
        if (response == "") return
        // Check the response from ThingSpeak.
       //  response = getResponse(null, 1000)
       // if (response == "") return

        // Trim the response to get the upload count.
     //   response = response.slice(response.indexOf(":") + 1, response.indexOf("CLOSED"))
     //   let uploadCount = parseInt(response)

        // Return if upload count is 0.
      //  if (uploadCount == 0) return

        // Set the upload successful flag and return.
        thingspeakUploaded2 = true
        return
    }
}
