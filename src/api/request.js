const request = {
  get: async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
  },
};

export default request;
