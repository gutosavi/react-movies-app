import React from 'react';
import Skeleton from 'react-loading-skeleton';
import '../../App.css';

const ComponentSkeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-box">
        <div>
          <Skeleton
            style={{ marginBottom: '10px' }}
            height={38}
            baseColor="#3c3c3c"
            highlightColor="#474747"
          />
        </div>
        <div>
          <Skeleton
            style={{ marginBottom: '10px' }}
            height={38}
            baseColor="#3c3c3c"
            highlightColor="#474747"
          />
        </div>
      </div>
      <div>
        <Skeleton
          width={250}
          height={120}
          baseColor="#3c3c3c"
          highlightColor="#474747"
        />
      </div>
    </div>
  );
};

export default ComponentSkeleton;
