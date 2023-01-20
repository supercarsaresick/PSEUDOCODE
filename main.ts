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
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("Whoa!")
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
    music.playMelody("C D E D F F G D ", 120)
    basic.showString("Video games are interesting!")
    basic.showLeds(`
        # # # # #
        # . . # #
        # # . . #
        # . # . #
        . # . # .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("Now that is a better view!")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # . # #
        # . . . #
        # # # # #
        `)
    basic.showString("What sport do you play?")
    basic.showLeds(`
        . # # # .
        # . # . #
        # # . # #
        # . # . #
        . # # # .
        `)
    basic.showString("Soccer")
    basic.showLeds(`
        . . . . .
        # # # # #
        # . . . #
        # . # . #
        . # # # .
        `)
    basic.showString("Basketball")
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showString("Baseball")
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.showString("Tennis")
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showString("Swimming")
    basic.showString("Or etcetera...")
})
basic.showString("Welcome to the fidget cube pseudocode!")
basic.showString("Press the various buttons to begin.")
basic.forever(function () {
	
})
