export const deletarUltimoCaracter = (activeInput:any, inputValue1:any, inputValue2:any, inputValue3:any, setInputValue1:any, setInputValue2:any, setInputValue3:any) => {
    if (activeInput === "n1") {
        setInputValue1(inputValue1.slice(0, -1));
    } else if (activeInput === "n2") {
        setInputValue2(inputValue2.slice(0, -1));
    } else if (activeInput === "operacao") {
        setInputValue3(inputValue3.slice(0, -1));
    }
};
