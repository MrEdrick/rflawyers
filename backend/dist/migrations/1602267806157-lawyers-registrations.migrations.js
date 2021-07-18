"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawyersRegistrationsMigrations1602267806157 = void 0;
const typeorm_1 = require("typeorm");
class LawyersRegistrationsMigrations1602267806157 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "lawyer",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "userId",
                    type: "uuid",
                },
                {
                    name: "firstName",
                    type: "varchar",
                },
                {
                    name: "lastName",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "specializations",
                    type: "varchar",
                },
                {
                    name: "languages",
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
                    name: "oab",
                    type: "number",
                },
                {
                    name: "insertionDateTime",
                    type: "timestamp",
                    default: "now()"
                },
            ]
        }), true);
        await queryRunner.createForeignKey("lawyer", new typeorm_1.TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));
        await queryRunner.createTable(new typeorm_1.Table({
            name: "schooling",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "lawyerId",
                    type: "uuid",
                },
                {
                    name: "userId",
                    type: "uuid",
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "active",
                    type: "boolean",
                },
                {
                    name: "insertionDateTime",
                    type: "timestamp",
                    default: "now()"
                },
            ]
        }), true);
        await queryRunner.createForeignKey("schooling", new typeorm_1.TableForeignKey({
            columnNames: ["lawyerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "lawyer",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("schooling", new typeorm_1.TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));
        await queryRunner.createTable(new typeorm_1.Table({
            name: "resume",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "lawyerId",
                    type: "uuid",
                },
                {
                    name: "userId",
                    type: "uuid",
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "active",
                    type: "boolean",
                },
                {
                    name: "insertionDateTime",
                    type: "timestamp",
                    default: "now()"
                },
            ]
        }), true);
        await queryRunner.createForeignKey("resume", new typeorm_1.TableForeignKey({
            columnNames: ["lawyerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "lawyer",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("resume", new typeorm_1.TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));
        await queryRunner.createTable(new typeorm_1.Table({
            name: "resume_item",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "resumeId",
                    type: "uuid",
                },
                {
                    name: "userId",
                    type: "uuid",
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "active",
                    type: "boolean",
                },
                {
                    name: "insertionDateTime",
                    type: "timestamp",
                    default: "now()"
                },
            ]
        }), true);
        await queryRunner.createForeignKey("resume_item", new typeorm_1.TableForeignKey({
            columnNames: ["resumeId"],
            referencedColumnNames: ["id"],
            referencedTableName: "resume",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("resume_item", new typeorm_1.TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));
    }
    async down(queryRunner) {
    }
}
exports.LawyersRegistrationsMigrations1602267806157 = LawyersRegistrationsMigrations1602267806157;
//# sourceMappingURL=1602267806157-lawyers-registrations.migrations.js.map