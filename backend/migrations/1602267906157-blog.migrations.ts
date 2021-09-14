import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class LawyersRegistrationsMigrations1602267806157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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

        await queryRunner.createForeignKey("article", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("article", new TableForeignKey({
            columnNames: ["lawyerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "lawyer",
            onDelete: "CASCADE"
        }));
        
        await queryRunner.createTable(new Table({
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

        await queryRunner.createForeignKey("content", new TableForeignKey({
            columnNames: ["articleId"],
            referencedColumnNames: ["id"],
            referencedTableName: "article",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("content", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
