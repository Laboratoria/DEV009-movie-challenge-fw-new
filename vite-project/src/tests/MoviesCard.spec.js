import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MoviesCard from '../components/MoviesCard';

beforeEach(() => {
    render(<MoviesCard/>);
})