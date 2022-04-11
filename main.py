k = [0, 1]
l = [1, 0]
led.plot(k[0], k[1])
led.plot(l[0], l[1])

def on_button_pressed_ab():
    global k,l
    y = 0
    while y < 4:
        k[0] += 1
        k[1] += 1
        l[0] += 1
        l[1] += 1
        y += 1

        if y >= 4:
            y = 0
            k = [0, 1]
            l = [1, 0]

        basic.clear_screen()
        led.plot(k[0], k[1])
        led.plot(l[0], l[1])
        basic.pause(3000)
input.on_button_pressed(Button.AB, on_button_pressed_ab)
