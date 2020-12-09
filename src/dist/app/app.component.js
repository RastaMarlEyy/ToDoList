"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_service_1 = require("./todo.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
        this.title = "ToDoList";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.todos = this.todoService.getTodo();
    };
    AppComponent.prototype.addTodo = function (newTodoLabel) {
        var newTodo = {
            label: newTodoLabel,
            done: false
        };
        var pass = true;
        this.todos.forEach(function (Todos) {
            if (newTodoLabel == Todos.label) {
                pass = false;
            }
        });
        if (pass == true) {
            this.todos.push(newTodo);
        }
    };
    AppComponent.prototype.delete = function (todo) {
        this.todos = this.todos.filter((function (t) { return t.label !== todo.label; }));
    };
    AppComponent.prototype.switchDone = function (todo) {
        if (todo.done == false) {
            todo.done = true;
        }
        else {
            todo.done = false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todolist-app',
            templateUrl: "./app/app.component.html"
        }),
        __metadata("design:paramtypes", [todo_service_1.TodoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map