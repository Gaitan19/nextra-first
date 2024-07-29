import PropTypes from 'prop-types';
import Image from 'next/image';

const Card = ({
  title,
  subtitle,
  text,
  imgSrc,
  imgAlt = 'Card image cap',
  header,
  footer,
  textAlign = 'left',
  variant = 'basic',
  outline = false,
  className = '',
  children = <></>,
}) => {
  const baseStyles =
    'rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out';

  const variants = {
    basic: 'bg-white text-black',
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
  };

  const textAlignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const variantStyles = variants[variant] || variants.basic;
  const textAlignStyles = textAlignClass[textAlign] || textAlignClass.left;

  return (
    <div
      className={`${baseStyles} ${variantStyles} ${textAlignStyles} ${className}`}
    >
      {header && (
        <div className="card-header bg-gray-100 px-4 py-2">{header}</div>
      )}
      {imgSrc && (
        <div className="w-full relative" style={{ height: '200px' }}>
          <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="card-body p-4">
        {title && (
          <h5 className="card-title text-xl font-bold mb-2">{title}</h5>
        )}
        {subtitle && (
          <h6 className="card-subtitle mb-2 text-gray-500">{subtitle}</h6>
        )}
        {text && <p className="card-text">{text}</p>}
        {children}
      </div>
      {footer && (
        <div className="card-footer bg-gray-100 px-4 py-2">{footer}</div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  header: PropTypes.string,
  footer: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  variant: PropTypes.oneOf([
    'basic',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
  ]),
  outline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
