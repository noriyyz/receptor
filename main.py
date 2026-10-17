# RECEPTOR

comando = "S" # Inicia com o comando de parar (Stop)
radio.set_group(1)

# Altera para receber Strings em vez de Numbers
def on_received_string(receivedString):
    global comando
    comando = receivedString
radio.on_received_string(on_received_string)

def on_forever():
    # Frente (Emissor envia "F")
    if comando == "F":
        robotbit.motor_run_dual(robotbit.Motors.M1A, -500, robotbit.Motors.M2A, 500)
    
    # Ré (Emissor envia "B")
    elif comando == "B":
        robotbit.motor_run_dual(robotbit.Motors.M1A, 500, robotbit.Motors.M2A, -500)
    
    # Esquerda (Emissor envia "L")
    elif comando == "L":
        robotbit.motor_run_dual(robotbit.Motors.M1A, -500, robotbit.Motors.M2A, 0)
    
    # Direita (Emissor envia "R")
    elif comando == "R":
        robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 500)
    
    # Parar (Emissor envia "S")
    elif comando == "S":
        robotbit.motor_stop(robotbit.Motors.M1A)
        robotbit.motor_stop_all()

basic.forever(on_forever)