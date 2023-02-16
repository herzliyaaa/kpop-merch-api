const deleteUserRoleController = ({ softDeleteUserRoleUseCase }) => {
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

      const userRole = await softDeleteUserRoleUseCase(response);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: userRole
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

module.exports = deleteUserRoleController;
