const makeExpressCallback = (controller) => {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      protocol: req.protocol,
      host: req.get("host"),
      file: req.file, 
      token: req.token,
      Authorization: req.get("Authorization"),
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
        "Authorization": req.get("Authorization"),
        "Access-Control-Allow-Origin": "*"
      }
    };
    controller(httpRequest)
      .then((httpResponse) => {
        if (httpResponse.headers) {
          res.set("Access-Control-Allow-Origin", "*");
          res.set(httpResponse.headers);
        }
        res.type("json");
        res.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch((e) => res.sendStatus(500));
  };
};

module.exports = makeExpressCallback;
