const respondJSON = (request, response, status, object) => {
  console.log(object);
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};
const respondXML = (request, response, status, object) => {
  
  response.writeHead(status, { 'Content-Type': 'text/xml' });
  response.write(object);
  response.end();
};

const success = (request, response, type) => {
  const responseAny = {
    message: 'This is a successful response',
    id: 'success',
  };
  if (type === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseAny.message}</message>`;
    responseXML = `${responseXML} <id>${responseAny.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.log(responseXML);
    return respondXML(request, response, 200, responseXML);
  }
  return respondJSON(request, response, 200, responseAny);
};
const forbidden = (request, response, type) => {
  const responseAny = {
    message: 'You are forbidden from this page',
    id: 'forbidden',
  };
  if (type === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseAny.message}</message>`;
    responseXML = `${responseXML} <id>${responseAny.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.log(responseXML);
    return respondXML(request, response, 403, responseXML);
  }
  return respondJSON(request, response, 403, responseAny);
};
const internal = (request, response, type) => {
  const responseAny = {
    message: 'There has been an error in the internal server',
    id: 'internal',
  };
  if (type === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseAny.message}</message>`;
    responseXML = `${responseXML} <id>${responseAny.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.log(responseXML);
    return respondXML(request, response, 500, responseXML);
  }
  return respondJSON(request, response, 500, responseAny);
};

const badRequest = (request, response, params, type) => {
  const responseAny = {
    message: 'This request has the required parameters',
    id: 'success',
  };
  if (!params.valid || params.valid !== 'true') {
    responseAny.message = 'Missing valid query parameters';
    responseAny.id = 'badRequest';
    if (type === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>${responseAny.message}</message>`;
      responseXML = `${responseXML} <id>${responseAny.id}</id>`;
      responseXML = `${responseXML} </response>`;
      console.log(responseXML);
      return respondXML(request, response, 400, responseXML);
    }
    return respondJSON(request, response, 400, responseAny);
  }
  if (type === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseAny.message}</message>`;
    responseXML = `${responseXML} <id>${responseAny.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.log(responseXML);
    return respondXML(request, response, 200, responseXML);
  }
  return respondJSON(request, response, 200, responseAny);
};
const unauthorized = (request, response, params, type) => {
  const responseAny = {
    message: 'This request has the required parameters',
    id: 'success',
  };

  if (!params.loggedIn || params.loggedIn !== 'true') {
    responseAny.message = 'Not logged in';
    responseAny.id = 'unauthorized';
    if (type === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>${responseAny.message}</message>`;
      responseXML = `${responseXML} <id>${responseAny.id}</id>`;
      responseXML = `${responseXML} </response>`;
      console.log(responseXML);
      return respondXML(request, response, 401, responseXML);
    }
    return respondJSON(request, response, 401, responseAny);
  }
  if (type === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseAny.message}</message>`;
    responseXML = `${responseXML} <id>${responseAny.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.log(responseXML);
    return respondXML(request, response, 200, responseXML);
  }
  return respondJSON(request, response, 200, responseAny);
};

const notFound = (request, response, type) => {
  const responseAny = {
    message: 'The page you are looking for was not found',
    id: 'notFound',
  };
  if (type === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseAny.message}</message>`;
    responseXML = `${responseXML} <id>${responseAny.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.log(responseXML);
    return respondXML(request, response, 404, responseXML);
  }
  return respondJSON(request, response, 404, responseAny);
};
const notImplemented = (request, response, type) => {
  const responseAny = {
    message: 'Page not implemented',
    id: 'notImplemented',

  };
  if (type === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseAny.message}</message>`;
    responseXML = `${responseXML} <id>${responseAny.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.log(responseXML);
    return respondXML(request, response, 501, responseXML);
  }

  return respondJSON(request, response, 501, responseAny);
};


module.exports = {
  success,
  badRequest,
  notFound,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
};
