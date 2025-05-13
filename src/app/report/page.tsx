'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MedicalTestCard from '../../components/medical-test-card';

export default function Home() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('/api/testreport');
        setTests(response.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to load tests');
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading test reports...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">{error}</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <h1 className="text-2xl font-bold mb-4">Medical Test Reports</h1>

      {tests.length === 0 ? (
        <p>No test reports available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
          {tests.map((test) => (
            <MedicalTestCard
              key={test._id}
              patientName={test.patientName}
              testType={test.testType}
              testDate={new Date(test.testDate).toLocaleDateString()}
              resultValue={test.resultValue}
              referenceRange={test.referenceRange}
              status={test.status}
            />
          ))}
        </div>
      )}
    </main>
  );
}
