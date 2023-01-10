//  Testando os Hooks

import { useCallback, useEffect, useMemo, useState } from 'react';


const Teste = () => {
    // A renderização ocorre quando a alguma modificação no componente de stado
    // Exemplo: o nome alterar...
    const [name, setName] = useState('Pablo');
    const [age, setAge] = useState(23);
    const handleChangeName = () => {
        // o "prev" - serve para pegar uma previa.
        // A função setState é usada para atualizar o estado. Ela aceita um novo valor de estado e coloca na fila de re-renderização do componente.
        setName(prev => prev == 'Pablo' ? 'José' : 'Pablo')
    }

    // Serve para validar o cilo de vida da aplicação. Neste exemplo abaixo,
    // Está sendo redenrizado toda vez que o name foi implementado/Alterado. Não é bom passar parâmetro pode dá bug no código. Só passar se realmente for necessário
    useEffect(() => {
        handleChangeName();
    }, []);

    //useMemo - Fica salvo e não precisa ser feito o calculo novamente toda fez que for redenrizado/o estado mudar
    // Salvar referência em variáveis
    const calculo = useMemo( () => {
        console.log('calculou')
        return 14520*4546123
    }, []);
    

    // o callback memoriza uma função - neste caso se quiser que a função seja atualizada de acordo com os parâmetros tem que passar um array de dependência
    //  Gerenciar Redenrizações de Funções no Componente
    const handleChangeAge = useCallback( () => {
        const newAge = 10*age;
        console.log('Actual Age: ', age, " New Age: ", newAge);
        setAge(prev => prev == 23 ? 24 : 23)
    }, [age]); //[] - o que fica dentro se chama array de dependência

    // Dando o console só para ver que o calculo não é feito novamente. 
    // console.log('reden', calculo);

    return (
        <div>
            <p>
                Nome: {name}
                <br />
                Idade: {age}
            </p>
            <button onClick={handleChangeName}>Alterar Nome</button>
            <br />
            <button onClick={handleChangeAge}>Alterar Idade</button>
        </div>
    )
}

const Counter=({initialCount=0}) => {

    const [count, setCount] = useState(initialCount);
    return (
      <>
        Contador: {count}
        <button onClick={() => setCount(initialCount)}>Reiniciar</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }

  export {Counter};
export {Teste};
