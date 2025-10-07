/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import AppFooter from '../layout/AppFooter';
import CopilotCourseHero from '../heros/CopilotCourseHero';
import ElearningShowcaseSection from '../learning/ElearningShowcaseSection';
import type { PageProps } from '../App';

const CopilotCoursePage = ({ navigateTo }: PageProps) => {

    return (
        <div className="bg-pcd-page-bg">
            
            <main>
                <CopilotCourseHero />
                <ElearningShowcaseSection />
            </main>
            <AppFooter navigateTo={navigateTo!} />
        </div>
    );
};

export default CopilotCoursePage;
