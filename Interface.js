
function Interface (interfaceName, methodNames, propertyNames) {
  if (typeof interfaceName !== 'string') {
    throw new Error('Unexpected type');
  }

  this.interfaceName = interfaceName;
  methodNames = methodNames || [];
  propertyNames = propertyNames || [];

  this.methodNames = methodNames.map(function (methodName) {
    if (typeof methodName !== 'string') {
      throw new Error('Unexpected method type');
    }
    return methodName;
  });

  this.propertyNames = propertyNames.map(function (propertyName) {
    if (typeof propertyName !== 'string') {
      throw new Error('Unexpected property type');
    }
    return propertyName;
  });
}

Interface.prototype.isImplemented = function (obj) {
  if (obj === null || obj === undefined) {
    return false;
  }

  var notImplMethodNames = this.checkMethods(obj);
  var notImplPropertyNames = this.checkProperties(obj);

  if (notImplMethodNames.length > 0 || notImplPropertyNames.length > 0) {
    return false;
  }

  return true;
};

Interface.prototype.ensureImplemented = function (obj) {
  if (obj === null || obj === undefined) {
    throw new Error('Obj has to be sth');
  }

  var notImplMethodNames = this.checkMethods(obj);
  var notImplPropertyNames = this.checkProperties(obj);
  var errorMessage = createErrorMessage(notImplMethodNames, notImplPropertyNames, this.interfaceName);

  if (errorMessage.length > 0) {
    throw new Error(errorMessage);
  }

  function createErrorMessage (notImplMethodNames, notImplPropertyNames, interfaceName) {
    var errorMessage = '';

    if (notImplMethodNames.length > 0 || notImplPropertyNames.length > 0) {
      errorMessage += 'Object does not implement ' + interfaceName + ' interface.\n';
    }

    if (notImplMethodNames.length > 0) {
      errorMessage += 'Missing methods: ' + notImplMethodNames.join(', ') + '.';
    }

    if (notImplPropertyNames.length > 0) {
      errorMessage += notImplMethodNames.length > 0 ? '\n' : '';
      errorMessage += 'Missing properties: ' + notImplPropertyNames.join(', ') + '.';
    }

    return errorMessage;
  }
};

Interface.prototype.checkMethods = function (obj) {
  var notImplementedMethodNames = [];

  this.methodNames.forEach(function (methodName) {
    if (!obj[methodName] || typeof obj[methodName] !== 'function') {
      notImplementedMethodNames.push(methodName);
    }
  });

  return notImplementedMethodNames;
};

Interface.prototype.checkProperties = function (obj) {
  var notImplementedPropertyNames = [];

  this.propertyNames.forEach(function (propertyName) {
    if (!obj[propertyName] || typeof obj[propertyName] === 'function') {
      notImplementedPropertyNames.push(propertyName);
    }
  });

  return notImplementedPropertyNames;
};

module.exports = Interface;
