exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      id: 100,
      message: "hello from CF Stack!",
    }),
  };
};
