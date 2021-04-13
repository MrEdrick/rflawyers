"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationsMigrations1602267647723 = void 0;
const typeorm_1 = require("typeorm");
class ConfigurationsMigrations1602267647723 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "username",
                    type: "varchar",
                },
                {
                    name: "salt",
                    type: "varchar",
                },
                {
                    name: "confirmationToken",
                    type: "varchar",
                },
                {
                    name: "recoverToken",
                    type: "varchar",
                },
                {
                    name: "image",
                    type: "varchar",
                },
                {
                    name: "active",
                    type: "boolean",
                },
                {
                    name: "isDefault",
                    type: "boolean",
                },
                {
                    name: "isAdministrator",
                    type: "boolean",
                },
                {
                    name: "insertionDateTime",
                    type: "timestamp",
                    default: "now()"
                },
            ]
        }), true);
    }
    async down(queryRunner) {
    }
}
exports.ConfigurationsMigrations1602267647723 = ConfigurationsMigrations1602267647723;
//# sourceMappingURL=1602267647723-configurations.migration.js.map