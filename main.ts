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
    . . # # #
    . . # . #
    . . # . #
    . . # . #
    . . # # #
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 125)
basic.pause(70)
basic.forever(function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 125)
    basic.pause(140)
    motor.motorStop(motor.Motors.M1)
    basic.pause(100)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 125)
    basic.pause(140)
    motor.motorStop(motor.Motors.M1)
})
