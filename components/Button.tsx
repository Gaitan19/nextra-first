import PropTypes from 'prop-types';

const Button = ({
  children,
  variant = 'primary',
  outline = false,
  size = 'medium',
  className = '',
  ...props
}) => {
  const baseStyles =
    'rounded-lg font-semibold focus:outline-none transition duration-300 ease-in-out';

  const variants = {
    primary: outline
      ? 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
      : 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: outline
      ? 'border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white'
      : 'bg-gray-500 text-white hover:bg-gray-600',
    success: outline
      ? 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
      : 'bg-green-500 text-white hover:bg-green-600',
    danger: outline
      ? 'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
      : 'bg-red-500 text-white hover:bg-red-600',
    warning: outline
      ? 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
      : 'bg-yellow-500 text-white hover:bg-yellow-600',
    info: outline
      ? 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white'
      : 'bg-teal-500 text-white hover:bg-teal-600',
    light: outline
      ? 'border border-gray-100 text-gray-700 hover:bg-gray-100 hover:text-gray-900'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    dark: outline
      ? 'border border-black text-black hover:bg-black hover:text-white'
      : 'bg-black text-white hover:bg-gray-800',
    link: 'text-blue-500 hover:text-blue-600',
  };

  const sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-5 py-3 text-lg',
  };

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes[size] || sizes.medium;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'link',
  ]),
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default Button;
