const fetchAllUserRolesController = ({ viewAllUserRoleUseCase }) => {
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
      const userRole = await viewAllUserRoleUseCase(response);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: userRole,
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

module.exports = fetchAllUserRolesController;
