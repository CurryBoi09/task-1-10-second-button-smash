controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.startCountdown(10)
info.setLife(3)
