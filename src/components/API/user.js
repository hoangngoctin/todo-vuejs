import axiosInstance from './baseAxios';

export const createUser = function (data) {
    return axiosInstance.post('/todos', data).then(({ data }) => {
      return data;
    })
  }