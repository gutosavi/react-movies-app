import React from 'react';
import Skeleton from 'react-loading-skeleton';
import '../../App.css';
import styles from './ComponentSkeleton.module.css';

const ComponentSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonBox}>
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
          width={260}
          height={150}
          baseColor="#3c3c3c"
          highlightColor="#474747"
        />
      </div>
    </div>
  );
};

export default ComponentSkeleton;
