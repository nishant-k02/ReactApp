import styled from "styled-components";

const Logo = styled.img`
    width: 140px;
    height: 140px;
    margin: 20px auto;
`

const CityLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
`

const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: black solid 2px;
    border-radius: 5px;
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 20px auto;
    & input {
        padding: 10px;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        outline: none;
        font-weight: bold;
    }

    & button {
        padding: 10px;
        font-size: 14px;
        color: white;
        background-color: black;
        border: none;
        outline: none;
        font-weight: bold;
        cursor: pointer;
    }
`

const CityComponent = () => {
    return (
        <>
            <Logo src="/Icons/perfect-day.svg" />
            <CityLabel>Find Weather of Your City</CityLabel>
            <SearchBox>
                <input placeholder="City"/>
                <button>Search</button>
            </SearchBox>
        </>
    );
}
export default CityComponent;