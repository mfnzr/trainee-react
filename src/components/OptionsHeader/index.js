import styled from 'styled-components';

const Option = styled.p`
    min-width: 120px;
    margin: 10px;
    font-size: 18px;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
    transition: color 0.3s ease, background-color 0.3s ease; 

    &:hover {
        color: white;
        background-color: #3E444F;
        border-radius: 5px;
    }
`;

const Options = styled.ul`
    display: flex;
    padding: 0;
`;

const textOptions = ['Cadastro', 'Desenvolvedores', 'Níveis'];

function OptionsHeader() {
    return (
        <Options>
            {textOptions.map((text, index) => (
                <Option key={index}>{text}</Option>
            ))}
        </Options>
    );
}

export default OptionsHeader;
