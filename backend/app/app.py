from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parents[1]))   # Adiciona o diretório 'backend' ao caminho
from shared.classes.operacoes import Calculo

app = Flask(__name__)
CORS(app)

@app.route('/calcular', methods=['POST'])

def calcular():
    data= request.json
    n1 = float(data['n1'])
    n2 = float(data['n2'])
    operacao = data['operacao']

    objeto = Calculo(n1,n2)

    if operacao == '+':
        resultado = objeto.adicao()
    elif operacao == '-':
        resultado = objeto.subtrair()
    elif operacao == '*':
        resultado = objeto.multiplicacao()
    elif operacao == '/':
        resultado = objeto.divisao()
    else:
        return jsonify({'error': 'Operação inválida'}), 400
    
    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run(debug=True)