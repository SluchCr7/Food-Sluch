import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Assuming standard utils, but I might need to create it or just use template literals if not present.

// I'll create a simple utility for class merging if it doesn't exist, but for now I'll inline the logic or assume a simple implementation.
// Actually, let's just use template literals for simplicity to avoid dependency issues if 'cn' isn't there.

const Button = ({
    children,
    variant = 'primary',
    size = 'default',
    className = '',
    href,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-500 ease-out border focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-dark border-primary hover:bg-white hover:text-dark hover:border-white",
        secondary: "bg-white text-dark border-white hover:bg-primary hover:text-dark hover:border-primary",
        outline: "bg-transparent text-white border-white/30 hover:bg-primary hover:border-primary hover:text-dark",
        gold: "bg-transparent text-primary border-primary hover:bg-primary hover:text-dark",
        ghost: "bg-transparent text-white border-transparent hover:text-primary hover:bg-white/5",
    };

    const sizes = {
        sm: "text-[10px] px-4 py-2",
        default: "text-xs px-8 py-4",
        lg: "text-sm px-10 py-5",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
