import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

const Select = ({
  options,
  defaultValue,
  isDisabled = false,
  isLoading = false,
  isClearable = true,
  isRtl = false,
  isSearchable = false,
  isMulti = false,
  className = 'basic-single',
  classNamePrefix = 'select',
  name = 'select',
  placeholder = 'Select...',
  ...props
}) => {
  return (
    <ReactSelect
      className={className}
      classNamePrefix={classNamePrefix}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      isMulti={isMulti}
      name={name}
      options={options}
      placeholder={placeholder}
      {...props}
    />
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultValue: PropTypes.object,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isClearable: PropTypes.bool,
  isRtl: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  className: PropTypes.string,
  classNamePrefix: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Select;
