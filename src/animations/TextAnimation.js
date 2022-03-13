import React from 'react';
import styled, {keyframes} from 'styled-components';


export default function TextAnimation (){
    
    const letterArray = "E-स्कूल".split("");

    return (
        <Wrapper>
            {letterArray.map((item, index)=> (
                <span key={index}>{item}</span>
            ))}
        </Wrapper>
    )
}



const animation = keyframes`
  0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter:
     blur(10px); }
  25% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter:
     blur(0px); }
  75% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter:
     blur(0px); }
  100% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter:
     blur(10px); }
`;
const Wrapper = styled.span`
        display: inline-block;

    color: purple;
    
    span{
        display: inline-block;

        opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    }
`;