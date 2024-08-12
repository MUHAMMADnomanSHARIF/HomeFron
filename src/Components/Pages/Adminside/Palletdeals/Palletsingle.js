
import withDataFetching from '../../../withDataFetching';
import SinglePage from '../../../SinglePage';

const Palletsingle = withDataFetching(SinglePage, 'http://srv577826.hstgr.cloud:8001/api/v1/data/palletsingle');

export default Palletsingle;