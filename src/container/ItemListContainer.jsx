import React from "react";
import Container from 'react-bootstrap/Container';

export const ItemListContainer = ({greeting}) =>{
    return(
        <Container className="mt-4">
            <div>
                {greeting}
            </div>
        </Container>
    );
};