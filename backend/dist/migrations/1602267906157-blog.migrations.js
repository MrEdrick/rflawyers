"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawyersRegistrationsMigrations1602267806157 = void 0;
const typeorm_1 = require("typeorm");
class LawyersRegistrationsMigrations1602267806157 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "article",
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
                    name: "lawyerId",
                    type: "uuid",
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "text",
                },
                {
                    name: "date",
                    type: "date",
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
                    name: "insertionDateTime",
                    type: "timestamp",
                    default: "now()"
                },
            ]
        }), true);
        await queryRunner.createForeignKey("article", new typeorm_1.TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("article", new typeorm_1.TableForeignKey({
            columnNames: ["lawyerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "lawyer",
            onDelete: "CASCADE"
        }));
        await queryRunner.createTable(new typeorm_1.Table({
            name: "content",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "articleId",
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
                    type: "text",
                },
                {
                    name: "order",
                    type: "number",
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
        await queryRunner.createForeignKey("content", new typeorm_1.TableForeignKey({
            columnNames: ["articleId"],
            referencedColumnNames: ["id"],
            referencedTableName: "article",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("content", new typeorm_1.TableForeignKey({
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
//# sourceMappingURL=1602267906157-blog.migrations.js.map