import React from 'react';
import cx from 'classnames';

type BackgroundColor = 'DARK' | 'LIGHT';

type SectionProps = {
    children: React.ReactNode;
    bgColor: BackgroundColor;
    fullHeight?: boolean;
};

function Section({ children, bgColor, fullHeight }: SectionProps) {
    return (
        <div
            className={cx(
                'w-full h-fit',
                bgColor === 'DARK' ? 'bg-section-dark' : 'bg-section-light',
                fullHeight ? 'h-screen' : 'h-fit'
            )}
        >
            <div className="container mx-auto">
                <div className="p-4 sm:p-10">{children}</div>
            </div>
        </div>
    );
}

export default Section;
