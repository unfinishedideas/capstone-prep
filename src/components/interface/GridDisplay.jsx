import React, { useState } from "react";
import GridBox from "./GridBox";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GridDisplayer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: .6rem;
  width: 100%;

  @media (max-width: 915px) {
    grid-column-gap: 0;
    grid-template-columns 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  `;

function GridDisplay(props) {
  const gridBoxes = [
    {
      isOn: false,
      id: 1,
      count: '1',
      bigCount: true
    },
    {
      isOn: false,
      id: 2,
      count: 'e',
      bigCount: false
    },
    {
      isOn: false,
      id: 3,
      count: '+',
      bigCount: false
    },
    {
      isOn: false,
      id: 4,
      count: 'a',
      bigCount: false
    },
    {
      isOn: true,
      id: 5,
      count: '2',
      bigCount: true
    },
    {
      isOn: false,
      id: 6,
      count: 'e',
      bigCount: false
    },
    {
      isOn: false,
      id: 7,
      count: '+',
      bigCount: false
    },
    {
      isOn: false,
      id: 8,
      count: 'a',
      bigCount: false
    },
    {
      isOn: false,
      id: 9,
      count: '3',
      bigCount: true
    },
    {
      isOn: false,
      id: 10,
      count: 'e',
      bigCount: false
    },
    {
      isOn: false,
      id: 11,
      count: '+',
      bigCount: false
    },
    {
      isOn: false,
      id: 12,
      count: 'a',
      bigCount: false
    },
    {
      isOn: true,
      id: 13,
      count: '4',
      bigCount: true
    },
    {
      isOn: false,
      id: 14,
      count: 'e',
      bigCount: false
    },
    {
      isOn: false,
      id: 15,
      count: '+',
      bigCount: false
    },
    {
      isOn: false,
      id: 16,
      count: 'a',
      bigCount: false
    }
  ];
  const [boxes, updateBoxes] = useState(gridBoxes);

  const toggleBox = id => {

    let newRhythmArray = []

    let updatedBoxes = boxes.map(b => {
      if (b.id === id) b.isOn = !b.isOn;
      return b;
    });

    updatedBoxes.forEach(b => {
      if (b.isOn === true) {
        newRhythmArray.push(b.id);
      }
    });

    props.onChangeRhythm(newRhythmArray)
    updateBoxes(updatedBoxes);
  };


  return (
    <GridDisplayer>
      {boxes.map((b, i) => (
        <GridBox isOn={b.isOn} key={i} id={b.id} bigCount={b.bigCount} count={b.count} toggleBox={toggleBox} />
      ))}
    </GridDisplayer>
  );
}

// const subdivisionText = {
//   textAlign: 'center',
//   marginTop: '0'
// }
// const beatText = {
//   textAlign: 'center',
//   marginTop: '0',
//   color: 'yellow'
// }

// const gridDisplayStyle = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
//   gridColumnGap: '.6rem',
//   width: "100%"
// };

GridDisplay.propTypes = {
  onChangeRhythm: PropTypes.func
}

export default GridDisplay;
