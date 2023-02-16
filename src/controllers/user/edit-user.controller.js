const editUserController = ({ editUserUseCase }) => {
  return async function get(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const response = {
        ...info,
        source,
        id: httpRequest.params.id
      };

      const users = await editUserUseCase(response);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: users
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  };
};

module.exports = editUserController;
