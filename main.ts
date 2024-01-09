basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.showLeds(`
    . . # # #
    . . . . #
    . . # # #
    . . . . #
    . . # # #
    `)
basic.pause(1000)
basic.showLeds(`
    . . # # #
    . . . . #
    . . # # #
    . . # . .
    . . # # #
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    while (true) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        basic.pause(100)
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        basic.pause(100)
        maqueen.motorStop(maqueen.Motors.M1)
    }
})
