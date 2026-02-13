import React from 'react';

const SectionTitle = ({
    subtitle,
    title,
    align = 'center',
    className = '',
    description
}) => {
    const alignment = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end',
    };

    return (
        <div className={`flex flex-col mb-12 ${alignment[align]} ${className}`}>
            {subtitle && (
                <span className="text-primary font-display italic text-lg tracking-wide mb-2 block relative">
                    <span className="relative z-10">{subtitle}</span>
                    {/* Subtle line decoration could go here */}
                </span>
            )}

            {title && (
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white leading-tight mb-6">
                    {title}
                </h2>
            )}

            {/* Decorative separator */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6"></div>

            {description && (
                <p className={`text-white/60 font-light leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
