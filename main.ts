//  RECEPTOR
let comando = "S"
//  Inicia com o comando de parar (Stop)
radio.setGroup(1)
//  Altera para receber Strings em vez de Numbers
radio.onReceivedString(function on_received_string(receivedString: string) {
    
    comando = receivedString
})
basic.forever(function on_forever() {
    //  Frente (Emissor envia "F")
    if (comando == "F") {
        robotbit.MotorRunDual(robotbit.Motors.M1A, -500, robotbit.Motors.M2A, 500)
    } else if (comando == "B") {
        //  Ré (Emissor envia "B")
        robotbit.MotorRunDual(robotbit.Motors.M1A, 500, robotbit.Motors.M2A, -500)
    } else if (comando == "L") {
        //  Esquerda (Emissor envia "L")
        robotbit.MotorRunDual(robotbit.Motors.M1A, -500, robotbit.Motors.M2A, 0)
    } else if (comando == "R") {
        //  Direita (Emissor envia "R")
        robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 500)
    } else if (comando == "S") {
        //  Parar (Emissor envia "S")
        robotbit.MotorStop(robotbit.Motors.M1A)
        robotbit.MotorStopAll()
    }
    
})
