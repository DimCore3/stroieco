import { lazy } from "react";
import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

const TestPage = lazy(() => import("./Test"));
const Download = lazy(() => import("./Download"));

export const Routing = () => {
    return (
        <div className="pages_root">
            <Suspense fallback={<Download />}>
                <Routes>
                    <Route path='/' element={<TestPage />} />
                    <Route path='*' element={'wrong adress'} />
                </Routes>
            </Suspense>
        </div>
    );
};