input.onButtonPressed(Button.A, function () {
    radio.setGroup(123)
    radio.sendNumber(12345)
    for (let index = 0; index < 10; index++) {
        basic.showString("hacked! code= XYZ ")
    }
})
basic.forever(function () {
	
})
