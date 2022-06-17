let icono = 0
input.onGesture(Gesture.Shake, function () {
    icono = 0
    if (icono == 0) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (icono == 1) {
        basic.showIcon(IconNames.Square)
    }
    if (icono == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})
