input.onButtonPressed(Button.A, function () {
    radio.sendString("we")
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK
    )
})
input.onButtonPressed(Button.AB, function () {
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK
    )
})
radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 2; index++) {
        basic.showString(receivedString)
    }
})
radio.setGroup(255)
radio.setFrequencyBand(83)
