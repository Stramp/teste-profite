import React, { useState } from 'react';
import styled from 'styled-components';
import arrowRightIco from '../../assets/img/icon_arrow_right.svg';
import arrowLeftIco from '../../assets/img/icon_arrow_left.svg';



const SNav = styled.nav`
    position:relative;
    bottom:10%;
    display:flex;
    justify-content: center;
`;
const SUl = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:row;
   
`;

const SLiBack = styled.li` 
position: absolute;
bottom: 20rem;
left: 5%;
`;
const SLiNext = styled.li` 
position: absolute;
bottom: 20rem;
right: 5%;
`;



const SLi = styled.li` 
`;
const SA = styled.div` 
text-decoration:none;
margin:5px;

color: #000;
border-bottom: solid 1px #000;
font-size:1.4rem;
background: ${props => Number(props.index) === Number(props.tabIndex) ? '#FF9F1C' : '#BDBDBD'};
transition: all 0.3s ease 0s;
width:15px;
height:15px;
border-radius:100%;
&&:hover{
        cursor:pointer;
    }
`;





const Pagination = ({ postsPerPage, totalPosts, setPage, currentPage }) => {
    const [paginationInd, setPageInd] = useState(0);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const indexOfLastList = 10 + paginationInd;
    const indexOfFirstList = 0 + paginationInd;
    const currentList = pageNumbers.slice(indexOfFirstList, indexOfLastList);




    function handDownPageInd() {
        if (currentPage <= (indexOfFirstList + 2) && paginationInd >= 1) setPageInd(paginationInd - 1);
        setPage(currentPage - 1);
    }
    function handUpPageInd() {
        if (currentPage >= (indexOfLastList - 1)) setPageInd(paginationInd + 1)
        setPage(currentPage + 1);
    }

    return (
        <SNav>
            <SUl >

                <SLiBack>
                    <img src={arrowLeftIco} onClick={handDownPageInd} alt="Prevent Slider" />

                </SLiBack>


                {currentList.map(number => (
                    <SLi key={number} >
                        <SA onClick={(e) => setPage(number - 1)} tabIndex={currentPage + 1} index={number}>

                        </SA>
                    </SLi>
                ))}



                <SLiNext>

                    <img src={arrowRightIco} onClick={handUpPageInd} alt="Next Slider" />
                </SLiNext>


            </SUl>

        </SNav >
    );
};

export default Pagination;