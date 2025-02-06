import { useState, useEffect } from 'react';
import '../styles/SeatingPlan.scss';

// assets
import floorPlan from '../assets/floor-plan.svg';

// Seating banks components
import SeatingBank1 from './SeatingBank1';
import SeatingBank2 from './SeatingBank2';
import SeatingBank3 from './SeatingBank3';
import SeatingBank4 from './SeatingBank4';
import SeatingBank5 from './SeatingBank5';
import SeatingBank6 from './SeatingBank6';
import SeatingBank7 from './SeatingBank7';
import SeatingBank8 from './SeatingBank8';
import SeatingBank9 from './SeatingBank9';
import SeatingBank10 from './SeatingBank10';
import SeatingBank11 from './SeatingBank11';
import SeatingBank12 from './SeatingBank12';
import SeatingBank13 from './SeatingBank13';
import SeatingBank14 from './SeatingBank14';
import SeatingBank15 from './SeatingBank15';
import SeatingBank16 from './SeatingBank16';
import SeatingBank17 from './SeatingBank17';
import SeatingBank18 from './SeatingBank18';
import SeatingBank19 from './SeatingBank19';
import SeatingBank20 from './SeatingBank20';
import SeatingBank21 from './SeatingBank21';

function SeatingPlan() {
  const [creatives, setCreatives] = useState([]);

  // Fetch creatives data when component mounts
  useEffect(() => {
    const fetchCreatives = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/creatives'); // Fetch creatives from API
        const data = await response.json();
        setCreatives(data);  // Set creatives data in state
      } catch (error) {
        console.error('Error fetching creatives:', error);
      }
    };

    fetchCreatives();
  }, []);

  return (
    <div className="seating-plan-container">
      <img src={floorPlan} className="floor-plan" alt="Floor Plan" />

      {/* Render seating banks */}
      <SeatingBank1 />
      <SeatingBank2 />
      <SeatingBank3 />
      <SeatingBank4 />
      <SeatingBank5 />
      <SeatingBank6 />
      <SeatingBank7 />
      <SeatingBank8 />
      <SeatingBank9 />
      <SeatingBank10 />
      <SeatingBank11 />
      <SeatingBank12 />
      <SeatingBank13 />
      <SeatingBank14 />
      <SeatingBank15 />
      <SeatingBank16 />
      <SeatingBank17 />
      <SeatingBank18 />
      <SeatingBank19 />
      <SeatingBank20 />
      <SeatingBank21 />

      {/* Display the creatives' names */}
      <div className="creatives-list">
        <h2>Creatives Seated:</h2>
        <ul>
          {creatives.map((creative) => (
            <li key={creative._id}>
              {creative.first_name} {creative.last_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SeatingPlan;
