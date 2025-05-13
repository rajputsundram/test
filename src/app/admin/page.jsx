'use client'

import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const AdminPage = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    testType: '',
    testDate: '',
    resultValue: '',
    referenceRange: '',
    status: 'normal',
  });
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/testreport', formData);
      setTests((prev) => [response.data, ...prev]);
      setFormData({
        patientName: '',
        testType: '',
        testDate: '',
        resultValue: '',
        referenceRange: '',
        status: 'normal',
      });
      toast.success('Medical test added successfully!');
    } catch (err) {
      const message = err.response?.data?.error || 'Submission failed';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Toaster position="top-right" />
      <h1 className="text-2xl font-bold mb-4">Add Medical Test</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block font-medium">Patient Name</label>
          <input
            type="text"
            name="patientName"
            placeholder="e.g. Jane Doe"
            value={formData.patientName}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Test Type</label>
          <input
            type="text"
            name="testType"
            placeholder="e.g. Complete Blood Count"
            value={formData.testType}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Test Date</label>
          <input
            type="date"
            name="testDate"
            placeholder="YYYY-MM-DD"
            value={formData.testDate}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Result Value</label>
          <input
            type="text"
            name="resultValue"
            placeholder="e.g. 14.2 g/dL"
            value={formData.resultValue}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Reference Range</label>
          <input
            type="text"
            name="referenceRange"
            placeholder="e.g. 12.0 - 15.5 g/dL"
            value={formData.referenceRange}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="normal">Normal</option>
            <option value="abnormal">Abnormal</option>
            <option value="critical">Critical</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Add Test'}
        </button>
      </form>

 
    </div>
  );
};

export default AdminPage;
