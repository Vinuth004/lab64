import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Card } from 'react-bootstrap';

interface Billing {
  testName: string;
  testDate: string;
  description: string;
  payment: string;
}

interface BillingReportProps {
  test: Billing;
}

const BillingReport: React.FC<BillingReportProps> = ({ test }) => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Payment Report: {test.testName}</Card.Title>
          <Card.Text>
            <strong>Test Date:</strong> {test.testDate} <br />
            <hr />
            <strong>Description:</strong> {test.description} <br />
            <hr />
            <strong>Payment:</strong> {test.payment}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BillingReport;
