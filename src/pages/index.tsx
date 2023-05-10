import { lazy } from "react";
import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

const TestPage = lazy(() => import("./test"));
const Download = lazy(() => import("./download"));

export const Routing = () => {
    return (
        <Suspense fallback={<Download />}>
            <Routes>
                <Route path='/' element={<TestPage />} />
                <Route path='*' element={'wrong adress'} />
            </Routes>
        </Suspense>
    );
};