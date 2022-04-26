"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var goal_controller_1 = __importDefault(require("../controllers/goal.controller"));
var getGoals = goal_controller_1.default.getGoals, getGoalById = goal_controller_1.default.getGoalById, createGoal = goal_controller_1.default.createGoal, updateGoal = goal_controller_1.default.updateGoal, deleteGoal = goal_controller_1.default.deleteGoal;
var router = express_1.default.Router();
router.get('/', getGoals);
router.get('/:id', getGoalById);
router.post('/', createGoal);
router.put('/:id', updateGoal);
router.delete('/:id', deleteGoal);
exports.default = router;
