import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Card } from 'react-bootstrap';

interface Test {
  testName: string;
  testDate: string;
  description: string;
  doctor: string;
}

interface TestReportProps {
  test: Test;
}

const TestReport: React.FC<TestReportProps> = ({ test }) => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Test Report: {test.testName}</Card.Title>
          <Card.Text>
            <strong>Test Date:</strong> {test.testDate} <br />
            <hr />
            <strong>Description:</strong> {test.description} <br />
            <hr />
            <strong>Doctor:</strong> {test.doctor}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TestReport;
