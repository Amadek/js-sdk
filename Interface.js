
var Interface = (function () {
  function Interface (interfaceName, methodNames, propertyNames) {
    if (typeof interfaceName !== 'string') {
      throw new Error('Unexpected type');
    }

    methodNames = methodNames || [];
    propertyNames = propertyNames || [];
    this.methodNames = [];
    this.propertyNames = [];

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

  Interface.prototype.ensureImplemented = function (obj) {
    if (!obj) {
      throw new Error('Obj has to be sth');
    }

    this.methodNames.forEach(function (methodName) {
      if (!obj[methodName] || typeof obj[methodName] !== 'function') {
        throw new Error('Object does not implemented method ' + methodName);
      }
    });

    this.propertyNames.forEach(function (propertyName) {
      if (!obj[propertyName] || typeof obj[propertyName] === 'function') {
        throw new Error('Object does not implement property ' + propertyName);
      }
    });
  };

  return Interface;
}());

module.exports = Interface;
