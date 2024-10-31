class Calculo:
    def __init__(self, n1, n2):
        self.n1 = n1
        self.n2 = n2
    
    def adicao(self):
        return print(f'Resultado: {self.n1 + self.n2}')
    
    def subtrair(self):
        return print(f'Resultado: {self.n1 - self.n2}')
    
    def multiplicacao(self):
        return print(f'Resultado: {self.n1 * self.n2}')
    
    def divisao(self):
        return print(f'Resultado: {self.n1 / self.n2}')