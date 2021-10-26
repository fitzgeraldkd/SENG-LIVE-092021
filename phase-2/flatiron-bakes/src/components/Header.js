import styled from 'styled-components';

function Header({ bakery, slogan }) {
    return (
        <HeaderContainer>
            <h1>{bakery}</h1>
            <h3>{slogan}</h3>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    background-color: #cdcdcd;
    text-align: center;
`;