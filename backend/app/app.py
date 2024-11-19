from flask import Flask, request, jsonify   # Biblioteca para lidar com requisições HTTP
from flask_cors import CORS     # Biblioteca que permite acesso de diferentes domínios
import sys      # Não é uma biblioteca, é nativo do Python. Fornece acesso a funções do sistema, como modificar o caminho de importação de módulos.
from pathlib import Path    # Não é uma biblioteca, é nativo do Python. Oferece uma forma orientada a objetos para manipular caminhos de arquivos.

sys.path.append(str(Path(__file__).resolve().parents[1]))   # Adiciona o diretório 'backend' ao caminho
from shared.classes.operacoes import Calculo    # Importei minha classe Calculo

app = Flask(__name__)   # Inicia uma aplicação Flask
CORS(app, resources={r"/*": {"origins": "*"}})   # Configuramos a aplicação para aceitar requisições de diferentes origens

@app.route('/calcular', methods=['POST'])   # Definimos uma rota de URL que estará disponível para receber requsições HTTP do tipo POST.

def calcular():
    data= request.json  # Recebe os dados enviados na requisição em formato JSON
    n1 = float(data['n1'])  # Converte para float o valor associado à chave 'n1' do JSON recebido
    n2 = float(data['n2'])  # Converte para float o valor associado à chave 'n1' do JSON recebido
    operacao = data['operacao']     # Extrai o valor da operação a ser realizada, que deve estar na chave 'operacao' do JSON recebido

    print(f'\nN1: {n1} \nSinal: {operacao} \nN2: {n2} \n')

    objeto = Calculo(n1,n2)     # Cria uma instância do objeto 'Calculo', passando 'n1' e 'n2' como parâmetros para o construtor

    # Verifica qual operação foi solicitada e chama a condicional correspondente na instância de Calculo
    if operacao == '+':
        resultado = objeto.adicao() # Realiza adição
    elif operacao == '-':
        resultado = objeto.subtrair()   # Realiza subtração
    elif operacao == '*':
        resultado = objeto.multiplicacao()  # Realiza multiplicação
    elif operacao == '/':
        resultado = objeto.divisao()    # Realiza divisão
    else:
        return jsonify({'error': 'Operação inválida'}), 400 # Retorna uma resposta JSON de erro com código 400 (requisição inválida) se a operação não for reconhecida
    
    return jsonify({'resultado': resultado})    # Retorna o resultado em formato JSON

if __name__ == '__main__':  # Executa o servidor Flask se este script for executado diretamente
    app.run(debug=True, host='0.0.0.0') # Inicia o servidor Flask em modo debug
    # app.run(debug=True)