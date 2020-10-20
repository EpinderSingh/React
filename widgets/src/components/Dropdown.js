import React, { useState, useEffect, useRef } from 'react';
import './dropdown.css';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  const renderedColor = options.map((option) => {
    if (option.text !== selected.text) {
      return null;
    }
    return (
      <div key={option.text} onClick={() => onSelectedChange(option)}>
        <h3 className={option.value}>The Text is {option.text}</h3>
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div
            onClick={() => setOpen(!open)}
            className={`menu ${open ? 'visible transition' : ''}`}
          >
            {renderedOptions}
          </div>
        </div>
      </div>
      {renderedColor}
    </div>
  );
};

export default Dropdown;
