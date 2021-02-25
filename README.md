# Unit test with JEST and NODE.

This branch will solve one of the exercises passed by teacher.

## Exercise

Gives these classes, implements the following unit tests:
+ Throw exception when weigh or height is < 0
+ classificacao must be "abaixo do peso" when imc < 18.5
+ classificacao must be "normal" when imc < 25
+ classificacao must be "acima do peso" when imc < 30
+ classificacao must be "obeso" when imc >= 30

***IMCCalculadora.java***
```java
IMCCalculadora.java
public class IMCCalculadora {

    public IMCStatus calcular(Pessoa p) {
        double peso = p.getPeso();
        double altura = p.getAltura();
        
        if(peso <= 0 || altura <= 0)
            throw new IllegalArgumentException();
        
        double imc = peso / (altura * altura);
        String classificacao = "";
        
        if(imc < 18.5)
            classificacao = "abaixo do peso";
        else if(imc < 25)
            classificacao = "normal";
        else if(imc < 30)
            classificacao = "acima do peso";
        else
            classificacao = "obeso";
        
        return new IMCStatus(imc, classificacao);
    }
}
```

***Pessoa.java***
```java
public class Pessoa {

    String nome;
    double peso, altura;
    
    public Pessoa(String nome, double peso, double altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    //incluir getters
}
```

***IMCStatus.java***
```java
public class IMCStatus {

    double imc;
    String classificacao;
    
    public IMCStatus(double imc, String classificacao) {
        this.imc = imc;
        this.classificacao = classificacao;
    }
    //incluir getters
}
```
