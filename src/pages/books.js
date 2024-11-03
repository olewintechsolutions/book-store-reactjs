import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = () => {
  // Sample data for the cards
  const cardsData = [
    { id: 1, image: 'https://via.placeholder.com/150', brandName: 'Brand 1' },
    { id: 2, image: 'https://via.placeholder.com/150', brandName: 'Brand 2' },
    { id: 3, image: 'https://via.placeholder.com/150', brandName: 'Brand 3' },
    { id: 4, image: 'https://via.placeholder.com/150', brandName: 'Brand 4' },
    { id: 5, image: 'https://via.placeholder.com/150', brandName: 'Brand 5' },
    { id: 6, image: 'https://via.placeholder.com/150', brandName: 'Brand 6' },
    { id: 7, image: 'https://via.placeholder.com/150', brandName: 'Brand 7' },
    { id: 8, image: 'https://via.placeholder.com/150', brandName: 'Brand 8' },
    { id: 9, image: 'https://via.placeholder.com/150', brandName: 'Brand 9' },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.brandName}</Card.Title>
                <Button variant="primary" className="me-2">Start Reading</Button>
                <Button variant="secondary">Add to Read Later</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
