input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . # .
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . # . . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . . # . .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        . . . # .
        # # # # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        # # # # #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . # . . .
        . # # # #
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . # . .
        . . # # #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C D E D F F E D ", 120)
    basic.showString("Video games are interesting!")
    basic.showLeds(`
        # # # # #
        # . . # #
        # # . . #
        # . # . #
        . # . # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # . # #
        # . . . #
        # # # # #
        `)
})
basic.forever(function () {
	
})
