import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useMemo } from 'react';

const useApi = (config: AxiosRequestConfig) => {
  const instance = useMemo<AxiosInstance>(() => axios.create(config), [config]);

  return instance;
};

export default useApi;
