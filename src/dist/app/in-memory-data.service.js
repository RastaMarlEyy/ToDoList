"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_mock_1 = require("./todo-mock");
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = todo_mock_1.TODOS;
        return { todos: todos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map