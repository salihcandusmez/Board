import API from '../config/api';

const getAuthorData = async (id) => {
  return API.get(`search.json?language=eng&author=${id}`);
};

export default getAuthorData;
