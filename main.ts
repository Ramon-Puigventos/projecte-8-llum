basic.forever(function () {
    if (input.lightLevel() <= 175) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
