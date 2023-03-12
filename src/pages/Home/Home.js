import { Stack } from '@mui/material';
import React from 'react';
import Features from '../../component/Features/Features';
import FoodCategory from '../../component/FoodCategory/FoodCategory';
import HeroSection from '../../component/HeroSection/HeroSection';

const Home = () => {
    return (
        <Stack spacing={10}>
            <HeroSection />
            <FoodCategory />
            <Features />
        </Stack>
    );
};

export default Home;