let 合計 = 0
let 値 = 0
let ＬＥＤ: number[] = []
let 位置 = 0
let ロック = 0
input.onButtonPressed(Button.AB, () => {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    位置 = 2
    ＬＥＤ = [1, 1, 1, 1, 1]
    合計 = 5
    ロック = 0
})
input.onGesture(Gesture.TiltLeft, () => {
    if (ロック == 0 && 合計 > 0) {
        led.unplot(位置, 4)
        if (位置 > 0) {
            位置 = 位置 - 1
        }
        led.plot(位置, 4)
    }
})
input.onGesture(Gesture.TiltRight, () => {
    if (ロック == 0 && 合計 > 0) {
        led.unplot(位置, 4)
        if (位置 < 4) {
            位置 = 位置 + 1
        }
        led.plot(位置, 4)
    }
})
input.onButtonPressed(Button.A, () => {
    ロック = 1
    if (合計 > 0) {
        値 = 3
        for (let i = 0; i < 4; i++) {
            if (led.point(位置, 値)) {
                led.unplot(位置, 0)
                ＬＥＤ[位置] = 0
                合計 = 合計 - 1
                basic.clearScreen()
                basic.showNumber(合計)
                basic.clearScreen()
                for (let カウンター = 0; カウンター <= 4; カウンター++) {
                    if (ＬＥＤ[カウンター] == 1) {
                        led.plot(カウンター, 0)
                    }
                }
                led.plot(位置, 4)
            } else {
                led.plot(位置, 値)
                basic.pause(100)
                led.unplot(位置, 値)
            }
            値 = 値 - 1
        }
    }
    if (合計 == 0) {
        music.beginMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
        for (let i = 0; i < 2; i++) {
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
        }
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }
    ロック = 0
})
basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
位置 = 2
ＬＥＤ = [1, 1, 1, 1, 1]
合計 = 5
ロック = 0
