while True:
    print("Escolha uma opção:")
    print("1 - Calculadora de Conversão Decimal-Binário")
    print("2 - Dados do Projeto")
    print("3 - Sair")

    opcao = input("Opção selecionada: ")

    if opcao == "1":
        decimal = int(input("Digite o número decimal a ser convertido: "))

        binario = ""
        while decimal > 0:
            binario = str(decimal % 2) + binario
            decimal = decimal // 2

        print("O número em binário é:", binario)
        break
    elif opcao =="2":
        print("")
        print("Dados do Projeto")
        print("")
        print("Curso: Analise e Desenvolvimento de Sistemas")
        print("")
        print("Componentes do grupo")
        print("")
        print("Lucas Kaique de Almeida")
        print("Gustavo dos Santos Pinho")
        print("Daniel Jose Alencar")
        print("Matheus Almeida")
        print("Allas Assis de Oliveira")
        print("")
        print("Disciplinas Envolvidas")
        print("")
        print("Organização e Arquitetura de Computadores ")
        print("")
        print("Programaçâo de Computadores ")
        print("")
        print("Versao do Aplicativo")
        print("1.1")
        break
    elif opcao == "3":
        print("Voce Saiu")
        break
    else:
        print("Opção inválida. Tente novamente.")
