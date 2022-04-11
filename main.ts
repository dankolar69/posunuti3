let k = [0, 1]
let l = [1, 0]
led.plot(k[0], k[1])
led.plot(l[0], l[1])
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    let y = 0
    while (y < 4) {
        k[0] += 1
        k[1] += 1
        l[0] += 1
        l[1] += 1
        y += 1
        if (y >= 4) {
            y = 0
            k = [0, 1]
            l = [1, 0]
        }
        
        basic.clearScreen()
        led.plot(k[0], k[1])
        led.plot(l[0], l[1])
        basic.pause(3000)
    }
})
