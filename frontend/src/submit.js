import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { Modal } from './Modal';
import { getApiUrl, API_ENDPOINTS } from './constants/api';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const pipelineData = {
        nodes: nodes,
        edges: edges
      };

      const formData = new FormData();
      formData.append('pipeline', JSON.stringify(pipelineData));

      const response = await fetch(getApiUrl(API_ENDPOINTS.PARSE_PIPELINE), {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }
      
      setModalData(result);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error submitting pipeline:', error);
      setError(error.message);
      setModalData({ error: error.message });
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div style={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0'
      }}>
        <button 
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#fff',
            backgroundColor: isLoading ? '#9ca3af' : '#2196F3',
            border: 'none',
            borderRadius: '8px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease',
            opacity: isLoading ? 0.7 : 1
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = '#1976D2';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = '#2196F3';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }
          }}
        >
          {isLoading ? 'Processing...' : 'Submit Pipeline'}
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={error ? 'Error' : 'Pipeline Analysis Results'}
      >
        {error ? (
          <div style={{ color: '#dc2626' }}>
            <p style={{ margin: 0, fontSize: '14px' }}>{error}</p>
          </div>
        ) : modalData ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '8px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#d1fae5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>
                  Number of Nodes:
                </span>
                <span style={{ fontSize: '18px', color: '#1f2937', fontWeight: '600' }}>
                  {modalData.num_nodes}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>
                  Number of Edges:
                </span>
                <span style={{ fontSize: '18px', color: '#1f2937', fontWeight: '600' }}>
                  {modalData.num_edges}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: modalData.is_dag ? '#f0fdf4' : '#fef2f2',
                borderRadius: '8px',
                border: `1px solid ${modalData.is_dag ? '#bbf7d0' : '#fecaca'}`
              }}>
                <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>
                  Is DAG:
                </span>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{
                    fontSize: '18px',
                    color: modalData.is_dag ? '#10b981' : '#ef4444',
                    fontWeight: '600'
                  }}>
                    {modalData.is_dag ? 'Yes' : 'No'}
                  </span>
                  {modalData.is_dag ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <div style={{
              padding: '12px',
              backgroundColor: '#eff6ff',
              borderRadius: '8px',
              border: '1px solid #bfdbfe',
              fontSize: '12px',
              color: '#1e40af',
              lineHeight: '1.5'
            }}>
              <strong>Note:</strong> A DAG (Directed Acyclic Graph) means your pipeline has no cycles and can be executed in a valid order.
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
