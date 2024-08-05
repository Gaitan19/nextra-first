import PropTypes from 'prop-types';
import { CCollapse } from '@coreui/react';

const Collapse = ({ visible, content }) => {
  return (
    <CCollapse visible={visible}>
      <div className="mt-3 p-4 bg-white rounded-lg shadow-md border">
        {content}
      </div>
    </CCollapse>
  );
};

Collapse.propTypes = {
  visible: PropTypes.bool.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;
