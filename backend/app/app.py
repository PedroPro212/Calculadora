import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parents[1]))   # Adiciona o diretório 'backend' ao caminho
from shared.functions.operacoes import Calculo

print("\n--------Caluladora--------\n")

while True:
    try:
        print("Escolha sua operação: \n 1-Adição 2-Subtração 3-Multiplicação 4-Divisão")
        operacao = int(input("Opcão: "))

        n1 = float(input("\nPrimeiro número: "))
        n2 = float(input("Segundo número: "))

        objeto = Calculo(n1,n2)

        if operacao == 1:
            objeto.adicao()
        elif operacao == 2:
            objeto.subtrair()
        elif operacao == 3:
            objeto.multiplicacao()
        elif operacao == 4:
            objeto.divisao()
        else:
            print("Algo deu errado")
            continue
        
        resposta = input("Digite 'sair' para encerrar o programa ou pressione Enter para continuar: ")
        if resposta.lower() == 'sair':
            print("Calculadora encerrada")
            break

    except KeyboardInterrupt:
        print("\nCalculadora encerrada pelo usuário.")
        break  # Encerra o loop

    except:
        print("Algo deu errado")