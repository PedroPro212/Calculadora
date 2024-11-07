class Calculo:  # Criação da Classe
    def __init__(self, n1, n2): # Método inicializador (construtor) da classe
        # Atribui os valores 'n1' e 'n2' recebidos como parâmetros aos atributos do objeto
        self.n1 = n1
        self.n2 = n2
    
    def adicao(self):   # Método para somar 'n1' e 'n2'
        return self.n1 + self.n2
    
    def subtrair(self): # Método para subtrair 'n2' de 'n1'
        return self.n1 - self.n2
    
    def multiplicacao(self):    # Método para multiplicar 'n1' e 'n2'
        return self.n1 * self.n2

    def divisao(self):  # Método para dividir 'n1' por 'n2'
        return self.n1 / self.n2