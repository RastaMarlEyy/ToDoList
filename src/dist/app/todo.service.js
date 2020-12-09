"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_mock_1 = require("./todo-mock");
core_1.Injectable();
var TodoService = /** @class */ (function () {
    function TodoService() {
    }
    // Retourne tous les services
    TodoService.prototype.getTodo = function () {
        return todo_mock_1.TODOS;
    };
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map