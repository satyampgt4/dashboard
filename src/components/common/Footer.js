import React from 'react';
import styled from 'styled-components'

function footer(props) {
    return (
        
        <>
        <StyledHeader>
            <div className="header-info-container">
                <p className="facilitator-email-id">For any queries, drop an e-mail at:<a href='mailto:gcf.iet@gmail.com'>gcf.iet@gmail.com</a> </p>
                <p className="facilitator-Group-name">Also, join Telegram Group for further info:<a href='https://t.me/+W0W172iRxGJmMDdl'>GroupLink</a></p>
            </div>
        </StyledHeader>

        <StyledFooter>
            <p>Made for 2022 Google Cloud Ready Facilitators & Students with 💖 by Team</p>
        </StyledFooter>
        </>
    );
}

export default footer;

let StyledFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 40px auto;
    padding: 10px; 
    box-sizing: border-box;
    p{
        text-align: center;
        font-size: 11px;
    }
`;
let StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 auto auto;
    /* width: 100vw; */
    box-sizing: border-box;
    h1{
        text-transform: uppercase;
        font-size: 25px;
        color: #EA4335;
        text-align: center;
    }
    img{
        max-width: 300px;
    }
    .header-info-container{
        display: flex;
        align-items: center;
        background-color: white;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
        border-radius: 60px;
        padding: 7px 17px;
        .facilitator-email-id{
            font-weight: 600;
            margin: 0;
            padding: 0;
            font-size: 12px;
            margin-left:5px;

        }
        .facilitator-Group-name{

            font-weight: 600;
            margin: 0;
            padding: 0;
            font-size: 12px;
            margin-left:5px;


        }

    }
    .tab-menu{
        display: flex;
        margin: 20px;
        p{
            padding: 15px 20px;
            color: black;
            text-transform: uppercase;
            font-size: 15px;
            margin: 10px;
            padding: 0;
            font-weight: 500;
            cursor: pointer;
            white-space: nowrap;
        }
        .tab-menu-active{
            border-bottom: 2px solid black;
        }
    }
    @media only screen and (max-width: 600px) {
        h1{
            font-size: 18px;
        }
        .header-info-container{
            flex-direction: column;
            padding: 10px!important;
            border-radius: 5px;
        }
    }
    @media only screen and (max-width: 350px) {
        .tab-menu{
            p{
                font-size: 12px;
            }
        }
    }
`