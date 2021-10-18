basic.forever(function () {
    if (input.temperature() <= 20) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (input.temperature() >= 30) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    basic.showNumber(input.temperature())
})
basic.forever(function () {
	
})
