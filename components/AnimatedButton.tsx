'use client';

import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function AnimatedButton({
  variant = 'primary',
  children,
  className = '',
  onClick,
  type = 'button',
}: AnimatedButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300';
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:shadow-xl',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
