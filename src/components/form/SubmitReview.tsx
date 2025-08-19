import React from 'react';

interface SubmitReviewProps {
    onSubmit: () => void;
    isSubmitting?: boolean;
    error?: string;
}

const SubmitReview: React.FC<SubmitReviewProps> = ({
    onSubmit,
    isSubmitting = false,
    error,
}) => {
    return (
        <div>
            <h2>Review & Submit</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button onClick={onSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </div>
    );
};

export default SubmitReview;