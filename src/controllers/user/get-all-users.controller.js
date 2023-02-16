const fetchAllUsersController = ({ viewAllUserUseCase }) => {
  return async function getAll(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const response = {
        ...info,
        source,
      };
      const user = await viewAllUserUseCase(response);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: user,
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

module.exports = fetchAllUsersController;
