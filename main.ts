music.setVolume(255)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        led.plot(2, 2)
        music.setBuiltInSpeakerEnabled(true)
        music.ringTone(349)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) == false) {
        led.unplot(2, 2)
        music.setBuiltInSpeakerEnabled(false)
    }
})
